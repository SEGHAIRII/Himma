from django.urls import path, include

from . import views


urlpatterns = [
    path("createstory", views.create_story, name = "create story"),
    path("", views.get_home_stories, name = "get home page")
]