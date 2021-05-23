from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview),
    path('room-list/', views.roomList),
    path('room-detail/<str:code>/', views.detailRoom),
    path('room-create/', views.createRoom.as_view()),
    path('room-update/<str:code>/', views.updateRoom),
    path('room-delete/<str:code>/', views.deleteRoom),
]
