from django.urls import path, include

from . import views


urlpatterns = [
    path("comment", views.add_comment, name = "create comment"),
    path("like", views.like_post, name = "like post")
]