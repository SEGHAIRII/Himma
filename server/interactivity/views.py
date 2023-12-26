from django.shortcuts import render
from .models import Comment, Like
from stories.models import article
from django.http import JsonResponse
# Create your views here.



def add_comment(request):
    if(request.method == 'POST'):
        content ,article_id= itemgetter('content', 'article_id')(json.loads(request.body))
        story = article.objects.get(id = article_id)        
        commentaire = Comment(author = request.user.user, content = content, post = story)
        commentaire.save()
        return JsonResponse({
            "id":commentaire.id,
        })               
    else:
        return JsonResponse({
            'message':"this url doesnt provide this type of request method"
        })

        
def like_post(request):
    if(request.method == "PUT"):
        article_id= itemgetter('content', 'article_id')(json.loads(request.body))
        story = article.objects.get(id = article_id)
        story.likes += 1
        story.save()
        return JsonResponse({
            "message":"added like"
        })
    else:
        return JsonResponse({
            'message':"this url doesnt provide this type of request method"
        })
        