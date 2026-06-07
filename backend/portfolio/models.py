from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=160)
    description = models.TextField(max_length=2000)
    technologies = models.JSONField(default=list, blank=True)

    github_url = models.URLField(max_length=500, blank=True, null=True)
    live_url = models.URLField(max_length=500, blank=True, null=True)
    image_url = models.URLField(max_length=500, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self) -> str:
        return self.title

