# need to import the app variable itself
import os
from app import app
from flask import render_template, jsonify, request, json, url_for
import requests
import json

# import requests
#needed to render html files
# from app.calculations import Calc #this is calling the module we created "Calc" from the app folder. The app variable is looking in the app folder into calculations file to find the Calc module, I have since deleted this module, but i wanted to leave this comment here for reference


@app.route('/')
@app.route('/index')
def index():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "assets", "products.json")
    data = json.load(open(json_url))
    return render_template('index.html',data=data)


    #very bare minimum, must return a rendered template of index.html, in render_template, we are sending the variable calc to index. This allows the index route to access the calc module, I have since deleted this module, but i wanted to leave this comment here for reference
