from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Project
from .serializers import ProjectSerializer


class ProjectListView(APIView):
    def get(self, request):
        qs = Project.objects.all()[:50]
        data = ProjectSerializer(qs, many=True).data
        return Response(data)

