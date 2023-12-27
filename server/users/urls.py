from django.urls import path, include

from . import views

urlpatterns = [
    path("register", views.register, name = "register"),
    path("login", views.login, name = "login"),
    path("logout", views.logout, name = 'logout'),
    path("deleteaccount", views.deleteAccount, name = "delete account"),
    path("resetpassword", views.reset_password, name = "reset password"),
    path("resetpassword_successfully", views.reset_password_confirm, name = "reset password successfully"),
    path("getuser/<int:user_id>", views.get_user, name = "get user")
]