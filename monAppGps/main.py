""" 
PROGRAMME PRINCIPALE

Flask nous gere l'app et la lance en locale
jinja2 moteur de template, pour appeler notre html et le passer a flask

C'est ici que l'on a définit notre fonction périodique d'acquisition gps, qui fait appelle à nos autres .py

Ne pas oublier d'écrire en console export FLASK_ENV=development, pour etre en environnement de dev, c'est mieux parait

sudo python3 app.py    sudo pour le droit pour les usb

css js dans dossier static
 html dans dossier templates


 A faire !
 plus de séparation front/back
 se familiariser avec bdd (mongoDB) et tester de remplir bdd et de récupérer
 terminer le déploiement pour mieux piger comment ça marche, sur heroku

 tenter de coder un gestionnaire de pub
"""

from flask import Flask, jsonify, render_template, request
import webbrowser
import time
import random
"""
import getGpsDatav3
from getGpsDatav3 import *
"""
import serial
from geopy.geocoders import Nominatim 
from geopy.distance import geodesic
import perimetre
from perimetre import *




import pdb

"""
client = MongoClient("mongodb+srv://user:passwordpassword@gpsapp.850mb.mongodb.net/test")
geolocator = Nominatim(user_agent="Nominatim")
app.db = client.gpsapp
entries = []
"""

app = Flask(__name__)
    
@app.route('/_stuff', methods = ['GET']) #Flask via javascript appelle cette fonction périodiquement pour actualiser nos coordonnées
def stuff():
        
    getGpsDatav3.main()   #cette fonction initialise et écrit les coordonnées dans le dictionnaire 
        
    for cle,valeur in perimetre.coord.items():
        if geodesic(valeur, (mescoord["lalatitude"], mescoord["lalongitude"])).kilometers <= perimetre.radius :
            print("%s est dans le périmètre" %(cle))
        else:
            print("%s n'est pas dans le périmètre" %(cle)) 
                
    return jsonify( result=random.uniform(3,4),result1=random.uniform(43,44)) #on pas les coord à l'app
       
def create_app():
    

    @app.route('/')
    def index():
    
        return render_template('map2v3.html')

    
    @app.route('/map')
    def map():
        
        return render_template('1km.html')
    """
    @app.route('/refresh')
    def refresh():
        
        return render_template('test.html')
    """
    return app
    

