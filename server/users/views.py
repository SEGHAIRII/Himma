from django.http import HttpResponse, HttpResponseForbidden, HttpResponseNotFound, JsonResponse
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
        password ,fullname, email= itemgetter('password', 'fullname', 'email')(json.loads(request.body))
        full_name = fullname.split()
        first_name = full_name[0]
        last_name = full_name[1]
        utilisateur = authenticate(username = email, password = password)
        if utilisateur is not None:
            return JsonResponse({
                "error":"user already found"
            })
        else:
            djuser = User.objects.create_user(username = email, email = email, password = password, first_name = first_name, last_name = last_name)
            utilisateur = user(djuser = djuser)
            utilisateur.save()
            djlogin(request, djuser)
            
            return JsonResponse({
                "id":djuser.id,
                "full_name": f'{djuser.first_name} {djuser.last_name}'
            })

    else:
        return JsonResponse({"message": "wrong method"})


def login(request):
    if request.method == 'POST':
        email, password = itemgetter('email', 'password')(json.loads(request.body))
        djuser = authenticate(username = email, password = password)
        if djuser is not None :
            djlogin(request, djuser)
            return JsonResponse({
                 "id":djuser.id,
                "full_name": f'{djuser.first_name} {djuser.last_name}'
            })
        else:
            return JsonResponse({
                "error":"wrong password"},
                status=400)
        
        
def logout(request):
    if request.method == 'POST':
        djlogout(request)
        return JsonResponse({"message":"logout successfully"})


@login_required
def deleteAccount(request):
    if request.method == 'DELETE':
        user = request.user
        user.delete()
        return JsonResponse({"message":"user removed successefully"})
    



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
        password, uid, token = itemgetter('email')(json.loads(request.GET))
        t = cache.get(f'{uid}')
        if t == token:
            utilisateur = User.objects.get(id = uid)
            utilisateur.password = password
            utilisateur.save()
            djlogin(request, utilisateur)
            return HttpResponse("password reset successfully")
        else:
            return HttpResponseForbidden("wrong token")
        



def get_user(request, user_id):
    if (request.method == 'GET'):
        try:
            id_1 = ord(user_id) - ord('0')
            print(id)
            utilisateur = user.objects.filter(id = id_1)
            print(utilisateur)
        except:
            utilisateur = ''
            print(id)
        finally:
            return JsonResponse({
            'user':utilisateur
        }, safe=False)
    else:
        return JsonResponse({"message" : "cant access this"}, status = 404)
    