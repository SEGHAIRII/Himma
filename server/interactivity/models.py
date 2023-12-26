from django.db import models
from users.models import user
from stories.models import article
# Create your models here.



class Comment(models.Model):
    content = models.TextField()
    author = models.ForeignKey(user, on_delete=models.CASCADE)
    creation_date = models.DateTimeField(auto_now_add=True)     
    post = models.ManyToManyField(article)
    
    
class Like(models.Model):
    author = models.ForeignKey(user, on_delete=models.CASCADE)   