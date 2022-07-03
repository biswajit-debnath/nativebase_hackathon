## Gettting started
git clone https://gitlab.com/gilann/logistic-api-service.git
cd logistic-api-service
npm install
npm start

## API documents

## Bid APIs
```http
POST localhost:3000/bid/post
```
`body`
```javascript
{
    "load_id": ,
    "user_id": ,
    "carrier_id": ,
    "amount": ,
    "status": ,
}
```

```http
PATCH localhost:3000/bid/update/bidId
```
`body`
```javascript
{
    "load_id": ,
    "user_id": ,
    "carrier_id": ,
    "amount": ,
    "status": ,
}
```

```http
DELETE localhost:3000/bid/delete/bidId
```

```http
GET localhost:3000/bid/getOne/bidId
```

```http
GET localhost:3000/bid/getAll
```

```http
GET localhost:3000/bid/getAllBidsOfLoad/bidId
```
## Carrier APIs
```http
POST localhost:3000/carrier/post
```
`body`
```javascript
{
    "name": ,
    "number": ,
    "vehicles": array of vehicle ids
}
```

```http
PATCH localhost:3000/carrier/update/carrierId
```
`body`
```javascript
{
    "name": ,
    "number": ,
    "vehicles": array of vehicle ids
}
```

```http
DELETE localhost:3000/carrier/delete/carrierId
```

```http
GET localhost:3000/carrier/getOne/carrierId
```

```http
GET localhost:3000/carrier/getAll
```
## City APIs
```http
POST localhost:3000/city/post
```
`body`
```javascript
{
    "name": ,
}
```

```http
PATCH localhost:3000/city/update/cityId
```
`body`
```javascript
{
    "name": ,
}
```

```http
DELETE localhost:3000/city/delete/cityId
```

```http
GET localhost:3000/city/getOne/cityId
```

```http
GET localhost:3000/city/getAll
```
## Load APIs
```http
POST localhost:3000/load/post
```
`body`
```javascript
{
    "user_id": ,
    "from": ,
    "to": ,
    "prod_type": ,
    "weight": ,
    "date": ,
    "max_amount": ,
    "isActive": ,
}
```

```http
PATCH localhost:3000/load/update/loadId
```
`body`
```javascript
{
    "user_id": ,
    "from": ,
    "to": ,
    "prod_type": ,
    "weight": ,
    "date": ,
    "max_amount": ,
    "isActive": ,
}
```

```http
DELETE localhost:3000/load/delete/loadId
```

```http
GET localhost:3000/load/getOne/loadId
```

```http
GET localhost:3000/load/getAll
```

```http
GET localhost:3000/load/getAllLoads/userId
```
## Trip APIs
```http
POST localhost:3000/trip/post
```
`body`
```javascript
{
    "user_id": ,
    "carrier_id": ,
    "load_id": ,
    "status": ,
    "amount": ,
}
```

```http
PATCH localhost:3000/trip/update/tripId
```
`body`
```javascript
{
    "user_id": ,
    "carrier_id": ,
    "load_id": ,
    "status": ,
    "amount": ,
}
```

```http
DELETE localhost:3000/trip/delete/tripId
```

```http
GET localhost:3000/trip/getOne/tripId
```

```http
GET localhost:3000/trip/getAll
```

## User APIs
```http
POST localhost:3000/user/post
```
`body`
```javascript
{
    "name": ,
    "number": 
}
```

```http
PATCH localhost:3000/user/update/userId
```
`body`
```javascript
{
    "name": ,
    "number": 
}
```

```http
PATCH localhost:3000/user/login
```
`body`
```javascript
{
    "number": ,
    "userType" :
}
```

```http
PATCH localhost:3000/user/register
```
`body`
```javascript
{
    "number": ,
    "userType" :
}
```

```http
PATCH localhost:3000/user/validateAuthCode
```
`body`
```javascript
{
    "id": authId,
    "authCode":authCode,
    "type": ["login" or "register"],
    "name":,
    "number": ,
    "userType" :,
    "vehicleTypeId":,
    "vehicleNo"
}
```


```http
DELETE localhost:3000/user/delete/userId
```

```http
GET localhost:3000/user/getOne/userId
```

```http
GET localhost:3000/user/getAll
```
## Vehicle APIs
```http
POST localhost:3000/vehicle/post
```
`body`
```javascript
{
    "name": ,
    "capacity": ,
    "unit":
}
```

```http
PATCH localhost:3000/vehicle/update/vehicleId
```
`body`
```javascript
{
    "name": ,
    "capacity": ,
    "unit": 
}
```

```http
DELETE localhost:3000/vehicle/delete/vehicleId
```

```http
GET localhost:3000/vehicle/getOne/vehicleId
```

```http
GET localhost:3000/vehicle/getAll
```