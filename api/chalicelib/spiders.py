import boto3


class Spiders(object):
    def __init__(self):
        dynamodb = boto3.resource('dynamodb')
        self.table = dynamodb.Table('spiders')

    def _links(self, spider_id):
        link = "https://api.cspiders.com/spiders/{}".format(spider_id)
        accounts_link = "{}/accounts".format(link)
        return {
            "update": {
                "desc": "Update spider",
                "method": "PUT",
                "url": link
            },
            "delete": {
                "desc": "Delete spider",
                "method": "DELETE",
                "url": link
            },
            "accounts": {
                "create": {
                    "desc": "Add account to this spider",
                    "method": "POST",
                    "url": accounts_link
                },
                "read": {
                    "desc": "Get accounts for this spider",
                    "method": "GET",
                    "url": accounts_link
                }
            }
        }

    def create(self):
        return {"simona": "simon"}

    def list(self):
        items = self.table.scan()['Items']
        for r in items:
            r['links'] = self._links(r['id'])
        return {'spiders': items}
