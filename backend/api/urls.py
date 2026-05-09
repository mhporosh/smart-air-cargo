from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import HealthCheckView, QuoteViewSet, ServiceViewSet, SiteSettingsView

router = DefaultRouter()
router.register("quotes", QuoteViewSet, basename="quotes")
router.register("services", ServiceViewSet, basename="services")

urlpatterns = [
    path("health/", HealthCheckView.as_view(), name="api-health"),
    path("settings/", SiteSettingsView.as_view(), name="site-settings"),
]

urlpatterns += router.urls
