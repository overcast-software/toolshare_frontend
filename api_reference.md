# API reference

## hardware

| Field Name       | Description                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| id               | Asset ids                                                                                                       |
| name             | Asset names                                                                                                     |
| asset_tag        | Asset unique asset tag                                                                                          |
| serial           | Asset serial numbers                                                                                            |
| model            | Name of the associated asset model                                                                              |
| model_number     | Model number of the associated asset model                                                                      |
| last_checkout    | Date the asset was last checked out                                                                             |
| category         | Name of the asset model's associated category                                                                   |
| manufacturer     | Name of the asset's manufacturer                                                                                |
| notes            | Asset notes                                                                                                     |
| expected_checkin | Expected checkin date                                                                                           |
| order_number     | Order number associated with the asset                                                                          |
| companyName      | Company name associated with the asset, if applicable                                                           |
| location         | Name of the location of the asset, either the default Ready to Deploy location, or the assigned user's location |
| image            | Name of the optional image file associated with the asset                                                       |
| status_label     | Name of the status label associated with the asset                                                              |
| assigned_to      | Name of the person the asset is assigned to                                                                     |
| created_at       | Date the asset was created                                                                                      |
| purchase_date    | Date the asset was purchased                                                                                    |
| purchase_cost    | Purchase cost of the asset                                                                                      |

### route

/api/v1/hardware

### example 200 output

```json
{
  "total": 2547,
  "rows": [
    {
      "id": 2596,
      "name": "",
      "asset_tag": "118086895",
      "serial": "514feaac-0b0e-3d95-8930-b0d3d24867a6",
      "model": {
        "id": 18,
        "name": "Ultrasharp U2415"
      },
      "byod": false,
      "requestable": false,
      "model_number": "6011425921534031",
      "eol": "12 months",
      "asset_eol_date": {
        "date": "2026-04-26",
        "formatted": "Sun Apr 26, 2026"
      },
      "status_label": {
        "id": 1,
        "name": "Ready to Deploy",
        "status_type": "deployable",
        "status_meta": "deployable"
      },
      "category": {
        "id": 5,
        "name": "Displays"
      },
      "manufacturer": {
        "id": 3,
        "name": "Dell"
      },
      "supplier": {
        "id": 5,
        "name": "Kreiger, Simonis and Bauch"
      },
      "notes": "Created by DB seeder",
      "order_number": "8301956",
      "company": null,
      "location": {
        "id": 3,
        "name": "West Alize"
      },
      "rtd_location": {
        "id": 3,
        "name": "West Alize"
      },
      "image": "https://develop.snipeitapp.com/uploads/models/ultrasharp.jpg",
      "qr": null,
      "alt_barcode": null,
      "assigned_to": null,
      "warranty_months": null,
      "warranty_expires": null,
      "created_by": {
        "id": 1,
        "name": "Admin User"
      },
      "created_at": {
        "datetime": "2025-08-02 14:43:03",
        "formatted": "Sat Aug 02, 2025 2:43PM"
      },
      "updated_at": {
        "datetime": "2025-08-02 14:43:30",
        "formatted": "Sat Aug 02, 2025 2:43PM"
      },
      "last_audit_date": null,
      "next_audit_date": null,
      "deleted_at": null,
      "purchase_date": {
        "date": "2025-04-26",
        "formatted": "Sat Apr 26, 2025"
      },
      "age": "3 months ago",
      "last_checkout": null,
      "last_checkin": null,
      "expected_checkin": null,
      "purchase_cost": "1,243.96",
      "checkin_counter": 0,
      "checkout_counter": 0,
      "requests_counter": 0,
      "user_can_checkout": true,
      "book_value": "932.97",
      "custom_fields": {},
      "available_actions": {
        "checkout": true,
        "checkin": true,
        "clone": true,
        "restore": false,
        "update": true,
        "audit": true,
        "delete": true
      }
    },
    {
      "id": 2597,
      "name": "",
      "asset_tag": "84043242",
      "serial": "89ea8289-f598-37cd-ab35-4c8cd56d3a5b",
      "model": {
        "id": 18,
        "name": "Ultrasharp U2415"
      },
      "byod": false,
      "requestable": false,
      "model_number": "6011425921534031",
      "eol": "12 months",
      "asset_eol_date": {
        "date": "2026-02-10",
        "formatted": "Tue Feb 10, 2026"
      },
      "status_label": {
        "id": 1,
        "name": "Ready to Deploy",
        "status_type": "deployable",
        "status_meta": "deployed"
      },
      "category": {
        "id": 5,
        "name": "Displays"
      },
      "manufacturer": {
        "id": 3,
        "name": "Dell"
      },
      "supplier": {
        "id": 5,
        "name": "Kreiger, Simonis and Bauch"
      },
      "notes": "Created by DB seeder",
      "order_number": "16806077",
      "company": null,
      "location": {
        "id": 3,
        "name": "West Alize"
      },
      "rtd_location": {
        "id": 3,
        "name": "West Alize"
      },
      "image": "https://develop.snipeitapp.com/uploads/models/ultrasharp.jpg",
      "qr": null,
      "alt_barcode": null,
      "assigned_to": {
        "id": 41,
        "username": "gwendolyn65",
        "name": "Priscilla Erdman",
        "first_name": "Priscilla",
        "last_name": "Erdman",
        "email": "lizeth.padberg@example.org",
        "employee_number": "14892",
        "jobtitle": "Craft Artist",
        "type": "user"
      },
      "warranty_months": null,
      "warranty_expires": null,
      "created_by": {
        "id": 1,
        "name": "Admin User"
      },
      "created_at": {
        "datetime": "2025-08-02 14:43:03",
        "formatted": "Sat Aug 02, 2025 2:43PM"
      },
      "updated_at": {
        "datetime": "2025-08-02 14:43:31",
        "formatted": "Sat Aug 02, 2025 2:43PM"
      },
      "last_audit_date": null,
      "next_audit_date": null,
      "deleted_at": null,
      "purchase_date": {
        "date": "2025-02-10",
        "formatted": "Mon Feb 10, 2025"
      },
      "age": "5 months ago",
      "last_checkout": null,
      "last_checkin": null,
      "expected_checkin": null,
      "purchase_cost": "2,192.31",
      "checkin_counter": 0,
      "checkout_counter": 0,
      "requests_counter": 0,
      "user_can_checkout": false,
      "book_value": "1,278.85",
      "custom_fields": {},
      "available_actions": {
        "checkout": true,
        "checkin": true,
        "clone": true,
        "restore": false,
        "update": true,
        "audit": true,
        "delete": false
      }
    }
  ]
}
```
