from django.db import models


class Room(models.Model):
    room_id = models.CharField(max_length=50, primary_key=True)
    floor = models.CharField(
        max_length=1,
        choices=[("0", "0"), ("1", "1"), ("2", "2"), ("3", "3"), ("4", "4")],
        default=None
    )
    room_type = models.CharField(max_length=100)
    room_number = models.CharField(max_length=50, blank=True)
    phone_extension = models.IntegerField(blank=True)

    class Meta:
        db_table = "room"


class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    gender = models.CharField(max_length=1, choices=[("M", "M"), ("F", "F")], default=None)
    title_before = models.CharField(max_length=100, null=True, blank=True)
    first_name = models.CharField(max_length=100)

    last_name = models.CharField(max_length=100)
    title_after = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100)
    room_id = models.ForeignKey('Room', on_delete=models.CASCADE, db_column="room_id", blank=True)

    class Meta:
        db_table = "employee"

    def __str__(self):
        return f"{self.title_before or ''} {self.first_name} {self.last_name}{f', {self.title_after}' if self.title_after else ''}"
