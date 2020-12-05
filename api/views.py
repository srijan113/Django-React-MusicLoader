from django.shortcuts import render
from django.http import HttpResponse
from .models import Room
from .serializers import RoomSerializer


from rest_framework import generics


class RoomApiView(generics.ListAPIView):
    queryset=Room.objects.all()
    serializer_class=RoomSerializer

    



