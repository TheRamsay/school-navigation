from django.db.models import Value as V
from django.db.models.functions import Concat
from .models import Room, Employee
from .serializers import RoomSerializer, EmployeeSerializer, SimpleRoomSerializer
from rest_framework.decorators import api_view
from rest_framework.views import Response


@api_view(["GET"])
def all_employees(request):
    employees = Employee.objects.all()
    employee_serializer = EmployeeSerializer(employees, many=True)
    return Response(employee_serializer.data)


@api_view(["GET"])
def all_rooms(request):
    rooms = Room.objects.all()
    room_serializer = RoomSerializer(rooms, many=True)
    return Response(room_serializer.data)


@api_view(["GET"])
def all_rooms_by_floor(request, floor: int):
    rooms = Room.objects.filter(floor=floor)
    room_serializer = RoomSerializer(rooms, many=True)
    return Response(room_serializer.data)


@api_view(["GET"])
def get_room(request, room_id: str):
    room = Room.objects.get(pk=room_id)
    room_serializer = RoomSerializer(room)
    return Response(room_serializer.data)


@api_view(["GET"])
def get_employee(request, employee_id):
    employee = Employee.objects.get(pk=employee_id)
    serializer = EmployeeSerializer(employee)
    return Response(serializer.data)


@api_view(["GET"])
def get_employee_in_room(request, employee_id, room_id):
    employee = Employee.objects.get(pk=employee_id)
    room = Room.objects.get(pk=room_id)
    employee_data = EmployeeSerializer(employee)
    room_data = SimpleRoomSerializer(room)
    data = {**employee_data.data, "room": room_data.data}
    del data["rooms"]
    return Response(data)


@api_view(["GET"])
def search(request):
    query = request.GET["query"]

    if len(query) < 3:
        return Response([])

    employees = Employee.objects.annotate(
        full_name=Concat("first_name", V(" "), "last_name")
    ).filter(full_name__icontains=query)

    employee_serializer = EmployeeSerializer(employees, many=True)

    rooms = Room.objects.filter(room_id__contains=query) | Room.objects.filter(room_type__contains=query)
    room_serializer = RoomSerializer(rooms, many=True)

    if employee_serializer.data:
        return Response({"type": "employee", "result": employee_serializer.data})

    if room_serializer.data:
        return Response({"type": "room", "result": room_serializer.data})

    return Response([])
