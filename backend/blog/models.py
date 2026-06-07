from django.db import models


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    excerpt = models.TextField(max_length=500, blank=True, default='')
    content = models.TextField(max_length=10000)

    category = models.CharField(max_length=80, blank=True, default='')

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self) -> str:
        return self.title

