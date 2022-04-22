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
    teachers = models.ManyToManyField("Employee", related_name="teachers", through='EmployeeRoom')

    class Meta:
        db_table = "room"


class EmployeeRoom(models.Model):
    employee_room_id = models.AutoField(primary_key=True)
    employee_id = models.ForeignKey("Employee", on_delete=models.CASCADE)
    room_id = models.ForeignKey("Room", on_delete=models.CASCADE)

    class Meta:
        db_table = "employee_room"

    def __str__(self):
        return f"{self.room_id.room_id} - {self.employee_id.display_name()}"


class Title(models.Model):
    title_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    class Meta:
        db_table = "title"

    def __str__(self):
        return self.name


class EmployeeTitle(models.Model):
    employee_title_id = models.AutoField(primary_key=True)
    title_id = models.ForeignKey("Title", on_delete=models.CASCADE)
    employee_id = models.ForeignKey("Employee", on_delete=models.CASCADE)
    position = models.IntegerField()
    location = models.CharField(max_length=6, choices=[("before", "before"), ("after", "after")], default=None)

    def __str__(self):
        return f"{self.employee_id.first_name} {self.employee_id.last_name} | {self.title_id.name}"

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
    phone_number = models.CharField(max_length=100, null=True, blank=True)
    titles = models.ManyToManyField(Title, related_name="titles", through='EmployeeTitle')
    rooms = models.ManyToManyField(Room, related_name="rooms", through='EmployeeRoom')

    class Meta:
        db_table = "employee"

    def display_name(self) -> str:
        output = ""
        titles_before = EmployeeTitle.objects.filter(employee_id=self, location="before").order_by(
            "position").all()
        titles_after = EmployeeTitle.objects.filter(employee_id=self, location="after").order_by(
            "position").all()
        output += " ".join([title.title_id.name for title in titles_before])
        output += f"{self.prefix if self.prefix else ''} {self.first_name} {self.last_name} {self.suffix if self.suffix else ''}"
        output += "".join([", " + title.title_id.name for title in titles_after])
        return output

    def __str__(self):
        return self.display_name()
