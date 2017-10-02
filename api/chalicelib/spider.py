import boto3

class Spider(object):
    def __init__(self, id):
        dynamodb = boto3.resource('dynamodb')
        self.accounts = dynamodb.Table('accounts')
        self.id = id

    def accounts(self):
        accounts = self.accounts.get_items(Key={spider_id: self.id})
        return {'accounts': accounts }
