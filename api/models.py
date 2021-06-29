from django.db import models
from django.db.models.enums import Choices

class Room(models.Model):
   
    room_id = models.CharField(max_length=50, primary_key=True)
    floor = models.CharField(
        max_length=1,
        choices=[("0", "0"), ("1", "1") ,("2", "2"), ("3", "3"), ("4", "4")],
        default=None
    )
    room_type = models.CharField(max_length=100)
    room_number = models.CharField(max_length=50, blank=True)
    phone_number = models.IntegerField(blank=True)

    class Meta:

        db_table = "room"
        app_label = "api"

class Employee(models.Model):

    employee_id = models.AutoField(primary_key=True)
    gender = models.CharField(max_length=1, choices=[("M", "M"), ("F", "F")], default=None)
    title_before = models.CharField(max_length=100, null=True, blank=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    title_after = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100)
    room_id = models.ForeignKey('Room', on_delete=models.CASCADE, db_column="room_id")


    class Meta:
        db_table = "employee"
        app_label = "api"



class DemoRouter:
    def db_for_read(self, model, **hints):
        if model._meta.app_label == "api":
            return "api_db"
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label == "api":
            return "api_db"
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if obj1._meta.app_label == "api" or obj2._meta.app_label == "api":
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):

        if app_label == "api":
            return db == "api_db"
        return None
