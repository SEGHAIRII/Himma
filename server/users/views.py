from django.http import HttpResponse, HttpResponseForbidden, HttpResponseNotFound
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as djlogin, logout as djlogout
from operator import itemgetter
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from .models import user
# Create your views here.



@csrf_exempt    
def register(request):
    if request.method == 'POST':
        username, password ,first_name, last_name, email, gender = itemgetter('username','password', 'first_name', 'last_name', 'email', 'gender')(json.loads(request.body))
        utilisateur = authenticate(username = username, password = password)
        if utilisateur is not None:
            return HttpResponseForbidden("Email Already exists")
        else:
            djuser = User.objects.create_user(username = username, email = email, password = password, first_name = first_name, last_name = last_name)
            utilisateur = user(djuser = djuser, gender = gender)
            utilisateur.save()
            djlogin(request, djuser)
            
            return HttpResponse("created user successefully")


@csrf_exempt
def login(request):
    if request.method == 'POST':
        username, password = itemgetter('username', 'password')(json.loads(request.body))
        user = authenticate(username = username, password = password)
        if user is not None :
            djlogin(request, user)
            return HttpResponse("user logged in successfully")
        else:
            return HttpResponseNotFound("user not found")
        
        
@csrf_exempt    
def logout(request):
    if request.method == 'POST':
        djlogout(request)
        return HttpResponse("logout successfully")


@csrf_exempt
@login_required
def deleteAccount(request):
    if request.method == 'DELETE':
        user = request.user
        user.delete()
        return HttpResponse("user removed successefully")
    