import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresume')

def lambda_handler(event, context):
    response = table.get_item(Key = {
        'id': '0'
    })
    views = response['Item']['views']
    views += 1  # Increment by one each time there's a GET API call
    # Update views value in the table where id = 0
    response = table.put_item(Item = {
        'id' : '0',
        'views' : views
    })
    # Return the count of views
    return views




# def lambda_cloudresume_views(event, context):
#     response = table.get_item(Key = {
#         'id': '0'
#     })
#     # Get existing item attributes, or create empty attributes if the item does not exist
#     item = response.get('Item', {} )

#      # Increment views by 1
#     item['views'] = item.get('views', 0) + 1
#     print (item['views'])

#     # Update views value in the table where id = 0 and messageId = 0
#     response = table.put_item(Item = item)

#     # Return the count of views
#     return item['views']