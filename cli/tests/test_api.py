import requests
import unittest
import json
from diaspora.api import Diaspora

diaspora = Diaspora()

def test_stream():
    res = diaspora.stream()
    assert(res.status_code == 200)
    stream = res.json()['body']['stream']
    assert(len(stream) == 15)
    assert(len(stream[0]['post_time']) == 24)# 2017-07-05T00:20:22.000Z

def test_stream_limit():
    res = diaspora.stream(limit=1)
    assert(res.status_code == 200)
    stream = res.json()['body']['stream']
    assert(len(stream) == 1)
