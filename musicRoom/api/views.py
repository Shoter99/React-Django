from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from .models import Room
from .serializers import RoomSerializers, CreateRoomSerializer
# Create your views here.


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/room-list/',
        'Detail View': '/taks-detail/<str:pk>',
        'Create': '/room-create/',
        'Update': '/room-update/<str:pk>/',
        'Delete': '/room-delete/<str:pk>/'
    }
    return Response(api_urls)


@api_view(['GET'])
def roomList(request):
    rooms = Room.objects.all()
    serializer = RoomSerializers(rooms, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def detailRoom(request, id):
    rooms = Room.objects.filter(id=id)
    serializer = RoomSerializers(rooms, many=False)
    return Response(serializer.data)


class createRoom(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guests_can_pause = serializer.data.get('guests_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guests_can_pause = guests_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=['guests_can_pause', 'votes_to_skip'])
            else:
                room = Room(host=host, guests_can_pause=guests_can_pause,
                            votes_to_skip=votes_to_skip)
                room.save()
            return Response(RoomSerializers(room).data, status=status.HTTP_200_OK)


@api_view(['POST'])
def updateRoom(request, id):
    room = Room.objects.get(id=id)
    serializer = RoomSerializers(instance=room, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response("Updated record")


@api_view(['DELETE'])
def deleteRoom(request, id):
    room = Room.objects.get(id=id)
    room.delete()
    return Response("Deleted successfully")
