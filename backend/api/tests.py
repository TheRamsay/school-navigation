from django.test import TestCase
from .models import Room, Employee


class NavigationTestCase(TestCase):

    def setUp(self) -> None:
        obj = Room.objects.create(room_id="205", floor="1", room_type="ucebna", phone_extension=105)
        Employee.objects.create(gender="M", first_name="Petr", last_name="Pernes", email="petr.pernes@sspbrno.cz",
                                room_id=obj)

    def test_employee_has_correct_room(self):
        employee = Employee.objects.first()
        self.assertEqual(employee.room_id_id, "205")
