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


class EmployeeRoom(models.Model):
    employee_room_id = models.AutoField(primary_key=True)
    employee_id = models.ForeignKey("Employee", on_delete=models.CASCADE)
    room_id = models.ForeignKey("Room", on_delete=models.CASCADE)

    class Meta:
        db_table = "employee_room"


class Title(models.Model):
    title_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    class Meta:
        db_table = "title"


class EmployeeTitle(models.Model):
    employee_title_id = models.AutoField(primary_key=True)
    title_id = models.ForeignKey("Title", on_delete=models.CASCADE)
    employee_id = models.ForeignKey("Employee", on_delete=models.CASCADE)
    position = models.IntegerField()
    location = models.CharField(max_length=6, choices=[("before", "before"), ("after", "after")], default=None)

    class Meta:
        db_table = "employee_title"


class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    gender = models.CharField(max_length=1, choices=[("M", "M"), ("F", "F")], default=None)
    prefix = models.CharField(max_length=100, blank=True, null=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    suffix = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100)
    titles = models.ManyToManyField(Title, related_name="titles", through='EmployeeTitle')

    class Meta:
        db_table = "employee"

    def display_name(self):
        output = ""
        titles_before = self.titles.filter(titles__employeetitle__location="before").all()
        titles_after = self.titles.filter(titles__employeetitle__location="after").all()
        output += "".join([title.name for title in titles_after])
        output += f"{self.prefix} {self.first_name} {self.last_name} {self.suffix}"
        output += "".join(["," + title.name for title in titles_before])

    def __str__(self):
        return self.display_name()
