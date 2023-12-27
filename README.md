# HIMMA
## An open platform where readers from all kinds of nationalites, circumstances and lives can connect and read interesting and thought provoking articles without any restriction
At HIMMA, we aim to help all people especially those with hard lives to express their beautiful thoughts and feelings, and get it out in the world, for thousands to read and explore,
we accomplish this by providing a set of tools such as our special article generation technology which can auto understand the users feelings and sentiment through a sentence he entered either by typing or speaking and generate a profound article based on it
## Tasks:
-auto detect user voice and execute site navigation based on it
-search for articles using voice or text, keywords or semantic recongnition
-text to speech functionality to help those without vision use our app
-sentiment analysis based on a simple phrase
-article generation based on sentiment and a simple phrase
-ability to add comments a like articles

## Prerequisties:
-django >= 5.0
-pytorch >= 2.0
-lastmileai>=4.2.7
-openai>=0.0.2
-transformers>=4.36.2
-django-cors-headers
-react>=18.2

## Install:
-clone the repo
```
git clone git@github.com:SEGHAIRII/Himma.git
```
-install server packages
```
cd server
pip install -r requirements.txt
```
-install client packages
```
cd client
npm install
```

## Usage:
-launch the server :
```
cd server
python manage.py runserver
```
-launch the client:
```
cd client
npm run dev
```
