from django.core.management.base import BaseCommand

from apps.services.models import Service
from apps.site_settings.models import SiteSetting


DEFAULT_SETTINGS = {
    "phone": "+88 02 48957260",
    "email": "info@smartaircargo.net",
    "quote_notification_emails": "info@smartaircargo.net",
    "address": "House-04, Road-11, Sector-01, Uttara, Dhaka-1230, Bangladesh",
    "hero_eyebrow": "Bangladesh's Best Freight Forwarder",
    "hero_title": "Moving the World",
    "hero_text": (
        "Smart Air Cargo Services connects Bangladesh to 140+ global airports. "
        "Precision logistics from Dhaka (DAC) and Chattogram (CGP)."
    ),
    "about_text": (
        "Smart Air Cargo Services (SACS) is an international freight forwarding "
        "company providing air, sea, and land logistics from Bangladesh."
    ),
}

DEFAULT_SERVICES = [
    (
        "Air Freight",
        "Time-critical import and export cargo from DAC and CGP to global airports.",
        "plane",
    ),
    (
        "Ocean Freight",
        "FCL and LCL sea freight for cost-effective bulk cargo movement.",
        "ship",
    ),
    (
        "Customs Brokerage",
        "Documentation and clearance support for compliant cargo movement.",
        "file-check",
    ),
    (
        "Warehousing",
        "Short-term storage, consolidation, handling, and inventory support.",
        "warehouse",
    ),
    (
        "Door-to-Door",
        "Integrated pickup, freight, clearance, and final-mile coordination.",
        "truck",
    ),
    (
        "Freight Forwarding",
        "End-to-end planning across carriers, routes, documents, and timelines.",
        "route",
    ),
]


class Command(BaseCommand):
    help = "Seeds initial services and editable site settings."

    def handle(self, *args, **options):
        for key, value in DEFAULT_SETTINGS.items():
            SiteSetting.objects.update_or_create(key=key, defaults={"value": value})

        for title, description, icon in DEFAULT_SERVICES:
            Service.objects.update_or_create(
                title=title,
                defaults={"description": description, "icon": icon, "active": True},
            )

        self.stdout.write(self.style.SUCCESS("Initial content seeded."))
