from chalice import Chalice
from chalicelib.spiders import Spiders
from chalicelib.spider  import Spider
import boto3
import os
import json

app = Chalice(app_name='crawlers-api')

filename = os.path.join(os.path.dirname(__file__), 'chalicelib', 'config.json')
with open(filename) as f:
    config = json.load(f)

@app.route('/', cors=True)
def index():
    return config['api']

@app.route('/spiders', cors=True)
def spiders(): return Spiders().list()

@app.route('/spiders', methods=['POST'], cors=True)
def spiders(): return Spiders().create()

@app.route('/spiders/:id/accounts', cors=True)
def spiders(): return Spider(id).accounts()
