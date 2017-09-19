"""
diaspora models
"""
import datetime
import operator


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


class Stats(object):
    def __init__(self, res):
        posts = res.json()['body']['stream']
        self.posts = [StreamPost(post) for post in posts]
        self.stats = {}
        for post in self.posts:
            if post.author not in self.stats:
                self.stats[post.author] = []
            self.stats[post.author].append(post)

    def __str__(self):
        print "\n\n="*80
        print '{} {}'.format(
            'author'.rjust(55),
            'posts'.rjust(15))
        print "="*80

        unsorted = {author: len(posts) for author, posts in self.stats.iteritems()}
        sortedStats = sorted(unsorted.iteritems(),
                        key=operator.itemgetter(1), reverse=True)
        for author, posts in sortedStats:
            print "{} {}".format(
                        author.rjust(55),
             "{}".format(posts).rjust(15)
            )
        return "="*80
