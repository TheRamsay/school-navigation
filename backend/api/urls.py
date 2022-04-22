from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import get_room, get_employee, search, all_employees, all_rooms, all_rooms_by_floor, get_employee_in_room

urlpatterns = [
    path("room/<str:room_id>", get_room),
    path("employee/<str:employee_id>", get_employee),
    path("employee/<str:employee_id>/room/<str:room_id>", get_employee_in_room),
    path("employee/", all_employees),
    path("room/", all_rooms),
    path("search/", search),
    path("room/floor/<int:floor>", all_rooms_by_floor),
]
