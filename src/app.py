__author__ = 'Erik Rosales'

from flask import Flask, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = "mongodb://localhost:27017/watchDb"

@app.route('/')
def index():
    return render_template('watch.html')

if __name__ == "__main__":
    app.run()