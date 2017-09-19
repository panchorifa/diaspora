"""
Command line tool to retrieve diaspora stream
"""
import requests
import argparse
from diaspora.api import Diaspora
from diaspora.models import Stream, Stats

def create_main_parser():
    parser = argparse.ArgumentParser(
        description='List diaspora stream posts',
        prog='stream'
    )
    subparsers = parser.add_subparsers(
        title='commands',
        help='valid commands',
        dest='command'
    )
    return parser, subparsers

def create_posts_parser(subparsers):
    posts_parser = subparsers.add_parser(
        'stream', help='List stream posts'
    )
    posts_parser.add_argument(
        '-l', '--limit', type=int, required=False,
        help='Set the limit for top posts'
    )
    return posts_parser

def create_stats_parser(subparsers):
    stats_parser = subparsers.add_parser(
        'stats', help='Provides author stats for the last 100 posts'
    )
    return stats_parser

def _list(value):
    return [x.strip() for x in value.split(',')]

def main():
    parser, subparsers = create_main_parser()
    create_posts_parser(subparsers)
    create_stats_parser(subparsers)

    args = parser.parse_args()

    if args.command == 'stream':
        try:
            diaspora = Diaspora(requests)
            print Stream(diaspora.stream(args.limit))
        except KeyboardInterrupt:
            pass
    elif args.command == 'stats':
        try:
            diaspora = Diaspora(requests)
            print Stats(diaspora.stream(100))
        except KeyboardInterrupt:
            pass

if __name__ == '__main__':
    main()
