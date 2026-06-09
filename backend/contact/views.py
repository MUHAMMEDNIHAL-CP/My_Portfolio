from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ContactMessageCreateSerializer


class ContactCreateView(APIView):
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        serializer = ContactMessageCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'success': True}, status=status.HTTP_201_CREATED)







