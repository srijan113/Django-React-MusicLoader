from django.urls import path
from . import views

urlpatterns = [
    path("", views.RoomApiView.as_view(), name="home"),
    path("create-room/", views.CreateRoomView.as_view(), name="createRoom"),
    path("get-room/", views.GetRoom.as_view(), name="getRoom")

]
