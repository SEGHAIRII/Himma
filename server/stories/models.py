from django.db import models
from users.models import user
from interactivity.models import Comment
# Create your models here.





class article(models.Model):
    content = models.TextField("content")
    img = models.FileField("images", upload_to="images/")
    title = models.CharField("Title", max_length=1000)
    author = models.ForeignKey(user,  on_delete=models.CASCADE)
    comments = models.ManyToManyField(Comment)
    likes = models.PositiveIntegerField(default = 0)
    creation_date = models.DateTimeField(auto_now_add=True, blank = True, null = True)