from django.db import models


class SiteSetting(models.Model):
    key = models.CharField(max_length=80, unique=True)
    value = models.TextField(blank=True)

    class Meta:
        ordering = ["key"]

    def __str__(self):
        return self.key


class TeamMember(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=80, blank=True)
    website = models.CharField(max_length=255, blank=True)
    section = models.CharField(
        max_length=80, blank=True, help_text="Optional section like Leadership, Operations"
    )
    order = models.IntegerField(default=0, help_text="Lower numbers appear first")
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "name"]

    def __str__(self):
        return self.name
