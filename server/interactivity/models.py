from django.db import models
from users.models import user

# Create your models here.



class Comment(models.Model):
    content = models.TextField()
    author = models.ForeignKey(user, on_delete=models.CASCADE)
    creation_date = models.DateTimeField(auto_now_add=True)     
    
    
class Like(models.Model):
    author = models.ForeignKey(user, on_delete=models.CASCADE)   