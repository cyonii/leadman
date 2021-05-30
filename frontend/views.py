import json
from django.shortcuts import render
from django.http import JsonResponse
from django.utils.text import slugify


# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')
