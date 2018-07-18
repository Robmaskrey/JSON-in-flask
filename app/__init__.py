#imports necessary for bare flask app
from flask import Flask
from flask_bootstrap import Bootstrap #gets bootstrap for the application to use

# application variables
app = Flask (__name__) #
bootstrap = Bootstrap(app) #needs to be passed the app variable

#routes must be imported after application variables
from app import routes # this show the application where the routes are
