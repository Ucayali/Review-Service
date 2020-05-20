# Project
> Big Brother Retail - Reviews Component

## Requirements
- Node 12.0.0
- db too be determined

## Development
### Installing Dependencies
From within the root directory:
```sh
npm install -g webpack
npm install
```
### Starting Up
Create and Seed the database:
```sh
npm run seed
```
Start WebPack for Development
```sh
npm run watch
```
Start Express Server on with Nodemon localhost:3003
```sh
npm start
```

## Production
### Starting Up
Create and Seed the database:
```sh
npm run seed
```
Render Bundle
```sh
npm run build
```
Start Express Server
```sh
npm start
```

## CRUD Operations

|    Verb   |           Endpoint          |            Action            |
|-----------| --------------------------- | ---------------------------- |
| **POST**  |       /api/allreviews/      |  CREATE a new item into DB   |
| **GET**   |       /api/allreviews/      |  READ data and return it     |
| **PATCH** |       /api/allreviews/      |  UPDATE item with new review |
| **DELETE**|       /api/allreviews/      |  DELETE item based on URL ID |
