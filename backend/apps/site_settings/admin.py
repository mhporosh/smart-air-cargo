from django.contrib import admin

from .models import SiteSetting


@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    list_display = ("key", "short_value")
    search_fields = ("key", "value")

    def short_value(self, obj):
        return obj.value[:80]


from .models import TeamMember


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ("name", "position", "email", "phone", "active", "order")
    list_filter = ("active", "section")
    search_fields = ("name", "position", "email")
    ordering = ("order", "name")
    fields = ("name", "position", "section", "email", "phone", "website", "active", "order")
