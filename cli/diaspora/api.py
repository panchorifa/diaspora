import requests
from settings import DIASPORA_STREAM_URL

class Diaspora(object):
    def __init__(self, api=None):
        self.api = api if api else requests

    def stream(self, limit=None):
        query = "?limit={}".format(limit) if limit else ''
        return self.api.get(DIASPORA_STREAM_URL+query)
