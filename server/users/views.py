from django.http import HttpResponse, HttpResponseForbidden, HttpResponseNotFound
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as djlogin, logout as djlogout
from operator import itemgetter
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from .models import user
from django.core.mail import send_mail
from django.core.cache import cache
import secrets
# Create your views here.



def register(request):
    if request.method == 'POST':
        password ,first_name, last_name, email, gender = itemgetter('password', 'first_name', 'last_name', 'email', 'gender')(json.loads(request.body))
        utilisateur = authenticate(username = email, password = password)
        if utilisateur is not None:
            return HttpResponseForbidden("Email Already exists")
        else:
            djuser = User.objects.create_user(username = email, email = email, password = password, first_name = first_name, last_name = last_name)
            utilisateur = user(djuser = djuser, gender = gender)
            utilisateur.save()
            djlogin(request, djuser)
            
            return HttpResponse("created user successefully")


def login(request):
    if request.method == 'POST':
        email, password = itemgetter('email', 'password')(json.loads(request.body))
        user = authenticate(username = email, password = password)
        if user is not None :
            djlogin(request, user)
            return HttpResponse("user logged in successfully")
        else:
            return HttpResponseNotFound("user not found")
        
        
def logout(request):
    if request.method == 'POST':
        djlogout(request)
        return HttpResponse("logout successfully")


@login_required
def deleteAccount(request):
    if request.method == 'DELETE':
        user = request.user
        user.delete()
        return HttpResponse("user removed successefully")
    



def reset_password(request):
    if(request.method == 'POST'):
        email = itemgetter('email')(json.loads(request.body))
        utilisateur = User.objects.get(email = email)
        if utilisateur is None:
            return HttpResponseNotFound("User not found")
        else:
            token = secrets.token_hex(32 // 2)
            uid = utilisateur.id
            cache.set(f'{uid}', token)
            mail = f'https://localhost:5137/password-reset-confirm/{uid}/{token}'
            send_mail("RESET PASSWORD", f"Click this link to reset your password , {mail}", "raoufseghairi@gmail.com", [email])
            return HttpResponse("waiting for email confirmation")
    
def reset_password_confirm(request):
    if(request.method == 'POST'):
        password, uid, token = itemgetter('email')(json.loads(request.body))
        t = cache.get(f'{uid}')
        if t == token:
            utilisateur = User.objects.get(id = uid)
            utilisateur.password = password
            utilisateur.save()
            djlogin(request, utilisateur)
            return HttpResponse("password reset successfully")
        else:
            return HttpResponseForbidden("wrong token")