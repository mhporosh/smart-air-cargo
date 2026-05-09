from rest_framework import serializers

from apps.quotes.models import Quote
from apps.services.models import Service
from apps.site_settings.models import SiteSetting
from apps.site_settings.models import TeamMember


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "company",
            "service_type",
            "message",
            "status",
            "created_at",
        ]
        read_only_fields = ["id", "status", "created_at"]


class QuoteStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ["status"]


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ["id", "title", "description", "icon", "active"]


class SiteSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSetting
        fields = ["key", "value"]


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = [
            "id",
            "name",
            "position",
            "section",
            "email",
            "phone",
            "website",
            "order",
            "active",
        ]
        read_only_fields = ["id"]
