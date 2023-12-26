import pickle 
from transformers import pipeline

with open('./sentiment_analysis_model.pkl', 'rb') as f:
    tokenizer ,model = pickle.load(f)

emotion = pipeline('sentiment-analysis', 
                    model='arpanghoshal/EmoRoBERTa')

emotion_labels = emotion("Thanks for using it.")
print(emotion_labels)
def get_emotion(text):
    return emotion(text)[0]['label']


# In[ ]:




