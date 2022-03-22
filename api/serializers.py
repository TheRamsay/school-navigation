from rest_framework import serializers
from rest_framework.utils import field_mapping
from .models import Room, Employee


class EmployeeSerializer(serializers.ModelSerializer):
    floor = serializers.SerializerMethodField("get_floor")

    def get_floor(self, obj):
        return obj.room_id.floor if obj.room_id_id else None

    class Meta:
        model = Employee
        fields = (
            "employee_id", "gender", "title_before", "first_name", "last_name", "title_after", "email", "room_id",
            "floor")


class RoomSerializer(serializers.ModelSerializer):
    teachers = EmployeeSerializer(read_only=True, many=True, source="employee_set")

    class Meta:
        model = Room
        fields = ("room_id", "floor", "room_type", "room_number", "phone_extension", "teachers")
