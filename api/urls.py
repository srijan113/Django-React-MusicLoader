from django.urls import path
from . import views

urlpatterns = [
    path("", views.RoomApiView.as_view(), name="home"),

]
