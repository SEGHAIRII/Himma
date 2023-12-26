from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField   
# Create your models here.


class user(models.Model):

    

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"

   
    
    djuser = models.OneToOneField(User, on_delete=models.CASCADE) 
   

    interests = ArrayField(models.CharField(max_length=100, blank = True, null = True), null = True, default = list, blank = True)
    
    
    
    
    def __str__(self):
        return self.djuser.username