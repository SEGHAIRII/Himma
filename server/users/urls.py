from django.urls import path, include

from . import views

urlpatterns = [
    path("register", views.register, name = "register"),
    path("login", views.login, name = "login"),
    path("logout", views.logout, name = 'logout'),
    path("deleteaccount", views.deleteAccount, name = "delete account"),
    path("googleLogin", include("allauth.urls"))
]