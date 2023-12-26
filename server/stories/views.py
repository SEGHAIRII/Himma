from django.shortcuts import render
from django.http import HttpResponse, HttpResponseForbidden, HttpResponseNotFound
from operator import itemgetter
import json
import requests
from django.conf import settings
import openai
# Create your views here.



from transformers import pipeline, AutoTokenizer, AutoModelForSequenceClassification

loaded_classifier = pipeline("sentiment-analysis", model="models/my_pipeline")

def get_emotion(text):
    return loaded_classifier(text)[0]['label'] 


def create_story(request):
    if(request.method == "POST"):
        openai.api_key = settings.OPENAI_API_KEY
        text = itemgetter('text')(json.loads(request.body))
        emotion = get_emotion(text)
        prompt = ""
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=100
        )
        generated_text = response.choices[0].text.strip()
        return HttpResponse(generated_text)
    
    
