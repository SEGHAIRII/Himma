from django.shortcuts import render
from django.http import JsonResponse, HttpResponse, HttpResponseForbidden, HttpResponseNotFound
from operator import itemgetter
import json
import requests
from django.conf import settings
import openai
from .models import article
from lastmileai import LastMile
from django.core.serializers import serialize

# import pinecone
'''
from langchain.vectorstores import Pinecone
from langchain.embeddings import HuggingFaceEmbeddings
import pinecone
import random
'''






'''pinecone.init(      
	api_key='0f974a83-d911-40bc-916d-8c3356131b3a',      
	environment='gcp-starter'      
)      
index = pinecone.Index('search')
embeddings = HuggingFaceEmbeddings(model_name="bert-base-uncased")
'''
# import environ
# Create your views here.
# env = environ.Env()
# environ.Env.read_env()

# embeddings = HuggingFaceEmbeddings(model_name="bert-base-uncased") 
 #Create your views here.




def create_story(request):
    if(request.method == "POST"):
        lastmile = LastMile(api_key="eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..ZVJHv-Fn1pWrgapT.cqAirZcHForo8aoDhP0u4gqffxNn_R_3vxhWUrPoDNOp2ONf_93zrbJw-93L8Jxx_9schlrgeKl_Etc4wnT7tvvpLrqPMuKAe1dc00p8iK-w4Ny-V4g-F_VSqvpBNojOnb1RbDQzMBwdCltJmA2chHD_zn3wv9DUN-7uONa69CwwHacJPW-BG8kNUs3x3ACj5movSsh8QIf5vCMkF-aXRpjBcB9gviplRN2rx17QcMgFozhIbtVpvCOH_BrIm_TNUEhBZDE54NxkC-fo7RcIwG6NLAkDvfAxxAw7lo0PApW600b58koOldM_VJk1FeENmn7dU3jj4J9TxPlZmkWlj55swROCvYfONh03e7DYsOmD1lCzjcLsla5PFWweG5q8VkXGdlF0aFAnow.ZcZbR7KpKyTrShp8e66dpQ")
        prompt = itemgetter('prompt')(json.loads(request.body))
        completion = lastmile.create_openai_chat_completion(
             completion_params = {
                "model": "gpt-4-1106-preview",
                "messages": [
                    {"role":"system", "content":'''you are a personal writer that helps people write medium like articles based on a sentence they enter, your task is to help them expres    s themselves by firstly identifying the sentiment in their sentence and then generating the corresponding article as if it was written by them, return the result in JSON fo    rmat with the following keys : title, content, categories without formatting the string'''},
                    { "role": "user", "content": prompt }
                    ,]
                ,}
            )
        x = completion['completionResponse']['choices'][0]['message']['content']
        x = x.replace("```json","")
        x = x.replace("```","")
        t = json.loads(x)
        categories = t['categories'].split(',')
        story = article(title = t['title'], content = t['content'], categories = categories, author = request.user.user)
        story.save()
        #docsearch = Pinecone.from_texts(t['title'], embeddings, index_name="search")


        return JsonResponse({
            "message":"story created successfully"
        })
    
    

    
def get_home_stories(request):
    if(request.method == 'GET'):
        articles = article.objects.all()
        articles = list(articles.values())
        if (len(articles) > 5 ):
            articles = random.sample(article, 5) 
        return JsonResponse({"articles":articles})

        
        

        
'''def search_stories(request):
    if(request.method == 'GET'):
        query = request.body.text
        doc_result = embeddings.embed_documents([query])
        results = index.query(doc_result, top_k=5,include_values=True,include_metadata=True)
        matches = results.matches
        top_titles = [m.metadata['text'] for m in matches]
        articles = list(article.objects.filter(title__contained_by = top_titles))
        return JsonResponse({"articles":articles})

        
    
'''