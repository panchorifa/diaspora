# Diaspora Stream

Python cli to retrieve diaspora stream for a given user

## CLI can be used to...

* Crawl stream posts
* Retrieve stats for the last 100 stream posts

### Examples

* python diaspora-cli.py stream
* python diaspora-cli.py stats


## Contents
1. [How it works](#how-it-works)
1. [Installation](#installation)
1. [Configuring Development Environment](#configuring-development-environment)
1. [FAQ](#faq)


## How it works

explanation

## Installation

explanation


## Configuring Development Environment

In order to use the python cli from your local machine, you need to have the scraper/api running locally and pointing to a remote chromeless browser.

### Remote Chromeless Browser Setup

1. Running Chrome on AWS Lambda and controlling it remotely
[Follow these instructions](https://github.com/graphcool/chromeless/tree/master/serverless#setup)

### Local Scraper Usage

The scraper can be run locally, it should be available
from http://localhost:8000 after running the following commands.

```sh
cd scraper
npm install
export DIASPORA_USERNAME=your-email
export DIASPORA_PASSWORD=your-password
export CHROMELESS_ENDPOINT_URL=your-chromeless-proxy-url
export CHROMELESS_ENDPOINT_API_KEY=your-chromeless-proxy-api-key
sls webpack serve
```

### Python CLI Usage

Setup your virtualenv, install dependencias and run integration tests.

```sh
cd cli
mkvirtualenv diaspora-cli
pip install -r requirements.txt;pip install -r requirements_dev.txt;
nosetests
```

We can then retrieve last stream posts. It only retrieves the last 15 posts by default but you can specify a limit to increase the total number of posts.

```sh
python diaspora-cli stream -l 100
```

We can also run stats to find out the most active author in the last 100 posts.

```sh
python diaspora-cli stats
```




## FAQ

Coming soon
