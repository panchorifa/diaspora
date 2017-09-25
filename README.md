# Diaspora Stream Crawler

Python CLI to crawl diaspora main stream for a given user with the help of a headless browser

## CLI can be used to...

* Crawl diaspora stream for any user
* Provide diaspora stats for the last 100 posts

### Examples

* python diaspora-cli.py stream
* python diaspora-cli.py stats


## Contents
1. [How it works](#how-it-works)
1. [Installation](#installation)
1. [Configuring Development Environment](#configuring-development-environment)
1. [FAQ](#faq)
1. [TODO](#todo)
1. [Crawling System](#crawling-system)


## How it works

With Chromeless proxy on AWS Lambda, you can crawl or test multiple sites in parallel. The scraper/api is also on AWS Lambda and provides all the advantages
of serverless architectures with resource cost reduction, etc.


## Installation

1. Run Chrome on AWS Lambda and control it remotely.
[Follow these instructions](https://github.com/graphcool/chromeless/tree/master/serverless#setup)

1. Run scraper/api on AWS Lambda
```sh
cd scraper
npm install
sls deploy
```

1. Setup python cli to provide services/tools/analysis on diaspora data.

## Configuring Development Environment

In order to use the python cli from your local machine, you need to have the scraper/api running locally and pointing to a remote chromeless browser.

### Remote Chromeless Browser Setup

1. Run Chrome on AWS Lambda and control it remotely.
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

CLI to crawl last 15 stream posts. It supports a limit argument to crawl any number of posts.

```sh
python diaspora-cli stream -l 100
```

![](https://github.com/panchorifa/diaspora/blob/master/docs/stream.png)

```sh
python diaspora-cli stats
```

CLI to find out the most active author in the last 100 posts.

![](https://github.com/panchorifa/diaspora/blob/master/docs/stats.png)



## FAQ

Coming soon


## TODO

* Configure chromeless server to use SOCKS5 proxy
* Support different user credentials by expecting basic authentication from api
* Add more tests to cover all types of posts, including images, etc


### Crawling System

System to support crawling of different sites with configurable accounts, concurrency
and verification processes.



__Components Diagram__

![](https://github.com/panchorifa/diaspora/blob/master/docs/components.png)

---------------------------------------



Sequence of Events for the different components.

__Sequence of Events__

![](https://github.com/panchorifa/diaspora/blob/master/docs/sequence.png)

---------------------------------------



Types of spiders to extract or verify data.

__Spider Types__

![](https://github.com/panchorifa/diaspora/blob/master/docs/spiders.png)

---------------------------------------
