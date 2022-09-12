# projeto19-DrivenPass
An API to keep safe users credentials, wifis, documents, cards and notes. This API makes easier to acess your records without memorizing all its informations.


<p align="center">
  <img  src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg" height="100px">
</p>
<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Built With</h3>
  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="32px"/>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="32px"/>  
    <img src="https://img.shields.io/badge/Prisma-316192?style=for-the-badge&logo=prisma&logoColor=white" height="32px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="32px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="32px"/>
  
</div>

<br/>

# Description

DrivenPass is an API that keep records of users.

</br>

## Features

-   User register and login
-   Create Credentials / Cards / Notes / Wifis records.
-   View Credentials / Cards / Notes / Wifis records.
-   View specific Credential / Card / Note / Wifi record.
-   Delete specific Credential / Card / Safenote / Wifi record.

</br>

## API Reference

### User Register

```POST /register```

#### Request:

| Body         | Type     | Description                  |
| :------------| :------- | :----------------------------|
| `email`      | `string` | **Required**. user email     |
| `password`   | `string` | **Required**. user password  |

`Password length: min 10`

#

### User Login

```POST /login```

#### Request:

| Body         | Type     | Description                  |
| :------------| :------- | :----------------------------|
| `email`      | `string` | **Required**. user email     |
| `password`   | `string` | **Required**. user password  |

#### Response:

`"random_JWT_token"`

#

### Create a credential record

```POST /credentials```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Body        | Type     | Description                              |
| :-----------| :------- | :--------------------------------------- |
| `url`       | `string` | **Required**. credential url             |
| `name`      | `string` | **Required**. credential name            |
| `password`  | `string` | **Required**. credential password        |
| `title`     | `string` | **Required**. record title               |

####

</br>

#### Response:

`Credential title already in use!`

#

### Search credentials

```GET /credentials```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

#### Response:

```json
[
  {
    "id": "...",
    "userId:":"...",
    "url": "...",
    "name": "...",
    "password": "...",
    "title": "..."
  },
  ...
]
```
#

### Search credential by id

```GET /credentials/:id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Params  | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. credential id |

#### Response:

```json
  {
    "id": "...",
    "userId:":"...",
    "url": "...",
    "name": "...",
    "password": "...",
    "title": "..."
  }
```
#

### Delete credential by id

```DELETE credentials/delete/:id```

#### Request:

|    Params    |   Type   | Description                  |
| :----------  | :--------| :--------------------------- |
| `id`         | `integer`| **Required**. credential Id  | 

####

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

#### Response:

```json
  {
    "message": "Credential deleted!"
  }
```
#

### Create a card record

```POST /cards```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Body              | Type      | Description                       |
| :---------------- | :-------- | :-------------------------------- |
| `number`          | `string`  | **Required**. card number         |
| `name`            | `string`  | **Required**. card holder name    |
| `securityCode`    | `string`  | **Required**. card cvc            |
| `isVirtual`       | `boolean` | **Required**. card is virtual?    |
| `password`        | `string`  | **Required**. card password       |
| `expirationDate`  | `string`  | **Required**. card valid date     |
| `title`           | `string`  | **Required**. record title        |
| `type`            | `string`  | **Required**. card type           |

`Number length: 16`
`securityCode length: 3`
`expirationDate length: 5 format(MM/YY)`
`Valid types: [debit,credit,credit and debit]`
`Can't create cards with same title`

####

</br>

#

### Search cards

```GET /cards```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

#### Response:

```json
[
  {
    "number": "...",
    "name": "...",
    "securityCode": "...",
    "expirationDate": "...",
    "isVirtual": true,
    "password": "...",
    "title": "...",
    "type":"..."
  },
  ...
]
```
#

### Search card by id

```GET /cards/:id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Params  | Type     | Description           |
| :------ | :------- | :-------------------- |
| `id`    | `integer`| **Required**. card id |

#### Response:

```json
  {
    "number": "...",
    "name": "...",
    "securityCode": "...",
    "expirationDate": "...",
    "isVirtual": true,
    "password": "...",
    "title": "...",
    "type":"..."
  }
```
#

### Delete card by id

```DELETE cards/delete/:id```

#### Request:

|    Params    |   Type   | Description            |
| :----------  | :--------| :--------------------- |
| `id`         | `integer`| **Required**. card Id  | 

####

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization |  |

#### Response:

```json
  {
    "message": "Card deleted!"
  }
```
#

### Create a note record

```POST /categories/notes/create```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Body              | Type      | Description                           |
| :---------------- | :-------- | :------------------------------------ |
| `title`           | `string`  | **Required**. record title            |
| `description`     | `string`  | **Required**. safe note description   |

`title max-length: 50`
`description max-length: 1000`
`Can't create safe note with same title`

####

</br>

#### Response:

```json
{
  "message": "created!"
}
```
#

### View safe notes

```GET /notes```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

#### Response:

```json
[
  {
    "title": "my safe note",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lectus id arcu pharetra laoreet.
    Morbi quis ullamcorper ante, sed vulputate felis. Nulla elit ipsum, molestie eu hendrerit vitae, vestibulum quis odio. 
    Integer facilisis quis neque vitae tristique. 
    Aenean venenatis, odio id posuere posuere, nibh libero rhoncus eros, 
    ac pellentesque mi felis sed justo. Phasellus feugiat orci maximus commodo commodo." 
   },
  ...
]
```
#

### View safe note by id

```GET /notes/:id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Params  | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. safe note id  |

#### Response:

```json
  {
    "title": "my safe note",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lectus id arcu pharetra laoreet.
    Morbi quis ullamcorper ante, sed vulputate felis. Nulla elit ipsum, molestie eu hendrerit vitae, vestibulum quis odio. 
    Integer facilisis quis neque vitae tristique. 
    Aenean venenatis, odio id posuere posuere, nibh libero rhoncus eros, 
    ac pellentesque mi felis sed justo. Phasellus feugiat orci maximus commodo commodo." 
   },
```
#

### Delete safe note by id

```DELETE notes/delete/:id```

#### Request:

|    Params    |   Type   | Description                  |
| :----------  | :--------| :--------------------------- |
| `id`         | `integer`| **Required**. safe note Id   | 

####

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

#### Response:

```json
  {
    "message": "Safe note removed!"
  }
```
#

### Create a wifi network record

```POST /categories/wifis/create```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Body           | Type      | Description                        |
| :------------- | :-------- | :--------------------------------- |
| `title`        | `string`  | **Required**. record title         |
| `name`         | `string`  | **Required**. wifi network name    |
| `password`     | `string`  | **Required**. wifi password        |



####

</br>

#### Response:

```json
{
  "message": "created!"
}
```
#

### View wifi networks

```GET /wifis```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

#### Response:

```json
[
  {
    "title": "Wifi do Vizinho",
    "name": "Wifi boa é wifi de graça",
    "password": "1234"
  },
  ...
]
```
#

### View wifi network by id

```GET /wifis/:id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | n |

####

| Params  | Type     | Description            |
| :------ | :------- | :--------------------- |
| `id`    | `integer`| **Required**. wifi id  |

#### Response:

```json
  {
    "title": "Wifi do Vizinho",
    "name": "Wifi boa é wifi de graça",
    "password": "1234"
  }
```
#

### Delete wifi record by id

```DELETE wifis/delete/:id```

#### Request:

|    Params    |   Type   | Description             |
| :----------  | :--------| :---------------------- |
| `id`         | `integer`| **Required**. wifi Id   | 

####

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

#### Response:

```json
  {
    "message": "Wifi record removed!"
  }
```
#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`JWT_SECRET= string ` 


## Lessons Learned

In this project i've improved my typescript skills and how to work with layered structure, i've learnt the basics of working with prisma to build
the database and how to make and use tests through thunder-client.

</br>

## Acknowledgements

-   [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

-   João Félix is a student at Driven Education and is putting effort into it to become a Dev.
<br/>

#
Footer
