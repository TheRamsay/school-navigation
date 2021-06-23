from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import get_room, get_employee, search

urlpatterns = [
    path("room/<str:room_id>", get_room),
    path("employee/<int:employee_id>", get_employee),
    path("employee/search/", search),
]
