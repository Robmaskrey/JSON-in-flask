#importing app variable from app folder, which is initialized through the __init__.py module. We set FLASK_APPS = main.py in the terminal with the command "export FLASK_APPS=main.py", set debug to active with the command "export FLASK_DEBUG=1" and then flask run to run the application on the internal server
from app import app
