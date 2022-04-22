from rest_framework import serializers
from .models import Room, Employee, EmployeeRoom, Title, EmployeeTitle


class SimpleRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ("room_id", "floor", "room_type", "room_number", "phone_extension")


class SimpleEmployeeSerializer(serializers.ModelSerializer):
    titles_before = serializers.SerializerMethodField("get_titles_before")
    titles_after = serializers.SerializerMethodField("get_titles_after")

    def get_titles_before(self, obj):
        titles = EmployeeTitle.objects.filter(employee_id=obj, location="before").order_by(
            "position").all()
        return " ".join([title.title_id.name for title in titles]) + " "

    def get_titles_after(self, obj):
        titles = EmployeeTitle.objects.filter(employee_id=obj, location="after").order_by(
            "position").all()
        out = ", ".join([title.title_id.name for title in titles])
        if out:
            out = ", " + out
        return out

    class Meta:
        model = Employee
        fields = (
        "employee_id", "gender", "first_name", "last_name", "email", "titles_before", "titles_after", "phone_number")


class EmployeeSerializer(serializers.ModelSerializer):
    titles_before = serializers.SerializerMethodField("get_titles_before")
    titles_after = serializers.SerializerMethodField("get_titles_after")
    rooms = SimpleRoomSerializer(many=True, read_only=True)

    def get_titles_before(self, obj):
        titles = EmployeeTitle.objects.filter(employee_id=obj, location="before").order_by(
            "position").all()
        return " ".join([title.title_id.name for title in titles]) + " "

    def get_titles_after(self, obj):
        titles = EmployeeTitle.objects.filter(employee_id=obj, location="after").order_by(
            "position").all()
        out = ", ".join([title.title_id.name for title in titles])
        if out:
            out = ", " + out
        return out

    class Meta:
        model = Employee
        fields = (
            "employee_id", "gender", "first_name", "last_name", "email", "rooms", "titles_before", "titles_after",
            "phone_number")
        depth = 2


class RoomSerializer(serializers.ModelSerializer):
    teachers = SimpleEmployeeSerializer(read_only=True, many=True)

    class Meta:
        model = Room
        depth = 2
        fields = ("room_id", "floor", "room_type", "room_number", "phone_extension", "teachers")
