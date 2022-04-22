import os
from typing import List
import django
from django.db.models.functions import Concat
from django.db.models import Value as V

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from api.models import EmployeeRoom, Room, Employee

with open("ucebny_druhe.txt") as f:
    for room in f.read().split("\n\n"):
        lines = [l.strip() for l in room.split("\n")]
        room_id, room_number, phone_extension = lines[0].split(":")
        phone_extension = phone_extension or None
        room_type = lines[1].lower()

        if room_type == "ucebna":
            room_type = "učebna"

        elif room_type == "-":
            room_type = ""

        teachers: List[Employee] = []
        print(f"{room_id=} {room_number=} {phone_extension=} {room_type=} {teachers=}")
        for name in lines[2:]:
            parts = name.split(" ")
            if len(parts) == 1:
                try:
                    t = Employee.objects.get(last_name__iexact=parts[0])
                    teachers.append(t)
                except Exception as e:
                    print(parts)
                    continue
            else:
                try:
                    last_name = parts[0]
                    first_name = parts[1][0]
                    t = Employee.objects.filter(first_name__startswith=first_name).filter(last_name=last_name).first()
                    teachers.append(t)
                except Exception as e:
                    print(parts)
                    continue

        if not Room.objects.filter(room_id=room_id).exists():
            r = Room.objects.create(room_id=room_id, phone_extension=phone_extension, room_type=room_type, floor="2",
                                    room_number=room_number)
            r.save()
            print(f"Created {r}")
        else:
            r = Room.objects.get(room_id=room_id)
            r.phone_extension = phone_extension
            r.room_number = room_number
            r.room_type = room_type
            r.floor = "2"
            r.save()
            print(f"Got {r}")

        for t in teachers:
            if not EmployeeRoom.objects.filter(room_id=r, employee_id=t).exists():
                e = EmployeeRoom.objects.create(room_id=r, employee_id=t)
                e.save()
                print(f"Created EmployeeRoom {e}")
