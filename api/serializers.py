from rest_framework import serializers
from rest_framework.utils import field_mapping
from .models import Room, Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee 
        fields = "__all__"

class RoomSerializer(serializers.ModelSerializer):
    teachers = EmployeeSerializer(read_only=True, many=True, source="employee_set")

    class Meta:
        model = Room
        fields = ("room_id", "floor", "room_type","room_number", "phone_number", "teachers")
