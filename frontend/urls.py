from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("join/", views.join, name="join"),
    path("create/", views.create, name="create"),
    path("room/<str:roomcode>", views.index,name="room"),
    
    
]
