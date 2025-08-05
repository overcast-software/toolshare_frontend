# API reference

## User
### self
#### route
/api/v1/users/self
#### example 200 output
```json
{
  "item": {
    "email": "string",
    "groupId": "string",
    "groupName": "string",
    "id": "string",
    "isOwner": true,
    "isSuperuser": true,
    "name": "string"
  }
}
```
## Items
### Get by asset ID
#### route
/api/v1/assets/{id}
#### example response
```json
{
  "items": [
    {
      "archived": true,
      "assetId": "0",
      "createdAt": "string",
      "description": "string",
      "id": "string",
      "imageId": "string",
      "insured": true,
      "labels": [
        {
          "color": "string",
          "createdAt": "string",
          "description": "string",
          "id": "string",
          "name": "string",
          "updatedAt": "string"
        }
      ],
      "location": {
        "createdAt": "string",
        "description": "string",
        "id": "string",
        "name": "string",
        "updatedAt": "string"
      },
      "name": "string",
      "purchasePrice": 0,
      "quantity": 0,
      "soldTime": "string",
      "thumbnailId": "string",
      "updatedAt": "string"
    }
  ],
  "page": 0,
  "pageSize": 0,
  "total": 0
}
```
