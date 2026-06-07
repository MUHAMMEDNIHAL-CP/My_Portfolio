from rest_framework.response import Response
from rest_framework.views import APIView

from .models import BlogPost
from .serializers import BlogPostSerializer


class BlogListView(APIView):
    def get(self, request):
        category = request.query_params.get('category')
        qs = BlogPost.objects.all().order_by('-created_at')
        if category:
            qs = qs.filter(category__iexact=category)
        qs = qs[:50]
        return Response(BlogPostSerializer(qs, many=True).data)

