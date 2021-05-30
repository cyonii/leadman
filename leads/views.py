# from django.shortcuts import render
from rest_framework import viewsets, permissions

from .models import Lead
from .serializers import LeadsSerializer


# Create your views here.
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = LeadsSerializer
