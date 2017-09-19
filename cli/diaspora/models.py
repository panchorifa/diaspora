"""
diaspora models
"""
import datetime


class StreamPost(object):
    def __init__(self, post):
        self.author = post['author_name'].encode('utf-8').strip()
        self.time = post['post_time']
        self.likes = "{}".format(post['post_likes'])
        self.reshares = "{}".format(post['post_reshares'])

    def __str__(self):
        return '{} {} {} {}'.format(
                self.time.rjust(35),
                self.author.rjust(45),
                self.likes.rjust(15),
                self.reshares.rjust(15))


class Stream(object):
    def __init__(self, res):
        posts = res.json()['body']['stream']
        self.posts = [StreamPost(post) for post in posts]

    def __str__(self):
        print '{} {} {} {}'.format(
            'time'.rjust(35),
            'author'.rjust(45),
            'likes'.rjust(15),
            'reshares'.rjust(15))
        print "="*120
        for post in self.posts:
            print post
        return "="*120
