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
-   Create Credentials / Cards / Notes / Wifis/ Documents records.
-   View Credentials / Cards / Notes / Wifis / Documents records.
-   View specific Credential / Card / Note / Wifi / Documents record.
-   Delete specific Credential / Card / Safenote / Wifi / Documents record.

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

### Search credentials / Search credential by id

```GET /credentials``` or ```GET /credentials?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization |

####

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Optional**. credential id |

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

### Delete credential by id

```DELETE /credentials?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. credential id |


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

`Number length: 16` <br/>
`securityCode length: 3` <br/>
`expirationDate length: 5 format(MM/YY)` <br/>
`Valid types: [debit,credit,credit and debit]` <br/>

#### Response:

`Card title already in use!`

####

</br>

#

### Search cards / Search card by id

```GET /cards``` or ```GET /cards?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization |

####

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Optional**. card id       |

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

### Delete card by id

```DELETE /cards?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization |

####

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. credential id |


#### Response:

```json
  {
    "message": "Card deleted!"
  }
```
#

### Create a note record

```POST /notes```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Body              | Type      | Description                           |
| :---------------- | :-------- | :------------------------------------ |
| `title`           | `string`  | **Required**. record title            |
| `text       `     | `string`  | **Required**.  note text              |

`title max-length: 50` <br/>
`text max-length: 1000`

#### Response:

`Note title already in use!`

####

</br>

#

### Search notes / Search note by id

```GET /notes``` or ```GET /notes?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Optional**. credential id |

#### Response:

```json
[
  {
    "title": "...",
    "text": "..."
   },
  ...
]
```
#

### Delete note by id

```DELETE /notes?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. note id       |

#### Response:

```json
  {
    "message": "Note deleted!"
  }
```
#

### Create a wifi network record

```POST /wifis```

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

#

### Search wifi networks / Search wifi network by id

```GET /wifis``` or ```GET /wifis?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization |

####

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Optional**. wifi id       |

#### Response:

```json
[
  {
    "title": "...",
    "name": "...",
    "password": "..."
  },
  ...
]
```
#

### Delete wifi record by id

```DELETE /wifis?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization |

####

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. wifi id       |


#### Response:

```json
  {
    "message": "Wifi deleted!"
  }
```
#




### Create a document record

```POST /documents```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

####

| Body                 |   Type    | Description                                 |
| :------------------- | :-------- | :------------------------------------------ |
| `fullName`           | `string`  | **Required**. full name of the owner        |
| `registerNumber`     | `string`  | **Required**. document register number      |
| `issueDate`          | `string`  | **Required**. document issue date           |
| `expirationDate`     | `string`  | **Required**. document expiration date      |
| `issuingOrganization`| `string`  | **Required**. document issue organization   |
| `type`               | `string`  | **Required**. document type                 |

`expirationDate length: 10 format(DD/MM/YYYY)` <br/>
`issueDate length: 10 format(DD/MM/YYYY)` <br/>
`Valid types: [RG and CNH ]` <br/>

####

</br>

#

### Search documents record / Search document record by id

```GET /documents``` or ```GET /documents?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization | 

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Optional**. document id   |

#### Response:

```json
[
  {
    "fullName": "...",
    "registerNumber": "...",
    "issueDate": "...",
    "expirationDate": "...",
    "registerNumber": "...",
    "issuingOrganization": "...",
    "type": "..."
  },
  ...
]
```
#

### Delete documents record by id

```DELETE /documents?id```

#### Request:

| Headers          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Authorization`  | `string`| **Required**. Bearer Authorization |

####

| Query   | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `id`    | `integer`| **Required**. document id   |


#### Response:

```json
  {
    "message": "Document deleted!"
  }
```
#



## Environment Variables

This enviroment variables are required to run this project:

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:4000

`SECRET= string ` 


## Lessons Learned

In this project I could practice and improve my typescrypts skills and for the first time I was able to use prisma to make migration without using SQL Scripts. Other than that, I used Prisma automatic interfaces to create types which helped me to type functions and variables.

</br>

## Authors

-   João Félix is a student at Driven Education who is preparing himself to work in a big company.
<br/>

#
Footer
