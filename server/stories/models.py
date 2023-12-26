from django.db import models
from users.models import user
from django.contrib.postgres.fields import ArrayField  
# Create your models here.





class article(models.Model):
    content = models.TextField("content")
    img = models.FileField("images", upload_to="images/", blank = True, null = True)
    title = models.CharField("Title", max_length=1000)
    author = models.ForeignKey(user,  on_delete=models.CASCADE)
    likes = models.PositiveIntegerField(default = 0)
    creation_date = models.DateTimeField(auto_now_add=True, blank = True, null = True)
    categories = ArrayField(models.CharField(max_length=100, blank = True, null = True), null = True, default = list, blank = True)
