from django.contrib import admin

from .models import Quote


@admin.register(Quote)
class QuoteAdmin(admin.ModelAdmin):
    list_display = ("name", "company", "service_type", "status", "created_at")
    list_filter = ("status", "service_type", "created_at")
    search_fields = ("name", "email", "phone", "company", "message")
    readonly_fields = ("created_at",)
