from django.urls import path, include
from . import views

urlpatterns = [
	path('get/', views.getAccess),
	path('users/', views.get_poolers),
]
