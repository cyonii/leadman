from .models import Lead
from rest_framework import serializers


class LeadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
