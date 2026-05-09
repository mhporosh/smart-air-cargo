from rest_framework import generics, permissions, response, status, views, viewsets
from django.conf import settings
from django.core.mail import EmailMessage
from django.db import transaction

from apps.quotes.models import Quote
from apps.services.models import Service
from apps.site_settings.models import SiteSetting
from apps.site_settings.models import TeamMember

from .serializers import (
    QuoteSerializer,
    QuoteStatusSerializer,
    ServiceSerializer,
    SiteSettingSerializer,
    TeamMemberSerializer,
)


class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    http_method_names = ["get", "post", "patch", "head", "options"]

    def get_serializer_class(self):
        if self.action == "partial_update":
            return QuoteStatusSerializer
        return QuoteSerializer

    def get_authenticators(self):
        if self.request.method == "POST":
            return []
        return super().get_authenticators()

    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def perform_create(self, serializer):
        quote = serializer.save()

        def send_admin_notification():
            raw_recipients = (
                SiteSetting.objects.filter(key="quote_notification_emails")
                .values_list("value", flat=True)
                .first()
                or SiteSetting.objects.filter(key="email")
                .values_list("value", flat=True)
                .first()
                or getattr(settings, "DEFAULT_FROM_EMAIL", "")
            )
            recipients = [
                email.strip()
                for email in raw_recipients.split(",")
                if email.strip()
            ]
            if not recipients:
                return

            subject = f"New enquiry from {quote.name}"
            body = "\n".join(
                [
                    "A new cargo enquiry has been submitted.",
                    "",
                    f"Name: {quote.name}",
                    f"Email: {quote.email}",
                    f"Phone: {quote.phone or '-'}",
                    f"Company: {quote.company or '-'}",
                    f"Service Type: {quote.service_type}",
                    f"Status: {quote.status}",
                    f"Created At: {quote.created_at}",
                    "",
                    "Message:",
                    quote.message or "-",
                ]
            )

            email = EmailMessage(
                subject=subject,
                body=body,
                from_email=getattr(settings, "DEFAULT_FROM_EMAIL", None),
                to=recipients,
                reply_to=[quote.email],
            )
            email.send(fail_silently=False)

        transaction.on_commit(send_admin_notification)


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    http_method_names = ["get", "post", "put", "patch", "delete", "head", "options"]

    def get_queryset(self):
        queryset = super().get_queryset()
        if not self.request.user.is_staff:
            return queryset.filter(active=True)
        return queryset

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]


class SiteSettingsView(views.APIView):
    def get_permissions(self):
        if self.request.method == "GET":
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def get(self, request):
        settings = SiteSetting.objects.all()
        data = {item.key: item.value for item in settings}

        # include team members as a list under the "team" key
        # public view: only active members
        team_qs = TeamMember.objects.filter(active=True).order_by("order", "name")
        team_ser = TeamMemberSerializer(team_qs, many=True)
        data["team"] = team_ser.data

        return response.Response(data)

    def put(self, request):
        if not isinstance(request.data, dict):
            return response.Response(
                {"detail": "Expected a JSON object of key/value pairs."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        updated = []
        for key, value in request.data.items():
            item, _ = SiteSetting.objects.update_or_create(
                key=key,
                defaults={"value": "" if value is None else str(value)},
            )
            updated.append(item)

        serializer = SiteSettingSerializer(updated, many=True)
        return response.Response(serializer.data)


class HealthCheckView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        return response.Response({"status": "ok"})
