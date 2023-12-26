from transformers import pipeline, AutoTokenizer, AutoModelForSequenceClassification

loaded_classifier = pipeline("sentiment-analysis", model="my_pipeline")

def get_emotion(text):
    return loaded_classifier(text)[0]['label'] 
