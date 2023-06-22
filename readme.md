## API Task 1 Todolist

### Installation:

- clone project ini
- jalankan `yarn install`
- buat file .env untuk menyimpan PORT

```bash
DATABASE_URL="postgresql://root:root@localhost:5432/task-todo"
PORT= 4000

```

- buat migrasi prisma dengan cara
  `npx prisma migrate dev`
- start server dengan menjalankan `yarn dev`

## API

### Method: GET: ` /api/todos`

```Json
{
    "statusCode": 200,
    "message": "success get all todo",
    "data": [
        {
            "id": 18,
            "title": "ngoding ga bang",
            "desc": "belajar html dasar",
            "done": false,
            "date": "2023-05-29",
            "time": "16:33",
            "createdAt": "2023-06-22T05:29:34.300Z",
            "updatedAt": "2023-06-22T08:29:19.236Z"
        },
      ]
}
```

### Method: GET By Id: ` /api/todos/:id`

```Json
{
    "statusCode": 200,
    "message": "success get todo by id",
    "data": {
        "id": 18,
        "title": "done ga bang",
        "desc": "done",
        "done": false,
        "date": "2023-05-29",
        "time": "16:33",
        "createdAt": "2023-06-22T05:29:34.300Z",
        "updatedAt": "2023-06-22T08:29:19.236Z"
    }
}
```

### Method: POST: ` /api/todos`

#### Req Body

```Json
{
        "title": "belajar html",
        "desc": "saya sedang html, css, dan js",
        "done": false,
        "date": "22-06-2023"
        "time": "16:33"
}
```

#### Response

```Json
{
    "statusCode": 201,
    "message": "Succes post data",
    "data": {
        "id": 32,
        "title": "belajar html",
        "desc": "saya sedang html, css, dan js",
        "done": false,
        "date": "22-06-2023"
        "time": "16:33"
        "createdAt": "2023-06-22T09:24:20.307Z",
        "updatedAt": "2023-06-22T09:24:20.307Z"
    }
}
```

### Method: PATCH: ` /api/todos/:Id`

#### Req Body

```Json
{
        "title": "belajar html updated",
        "desc": "saya sedang html, css, ts",
        "done": true,
        "date": "22-06-2023"
        "time": "17:33"
}
```

#### Response

```Json
{
    "statusCode": 201,
    "message": "Succes update your data",
    "data": {
        "id": 32,
        "title": "belajar html updated",
        "desc": "saya sedang html, css, ts",
        "done": true,
        "date": "22-06-2023"
        "time": "17:33"
        "createdAt": "2023-06-22T09:24:20.307Z",
        "updatedAt": "2023-06-22T09:27:20.305Z"
    }
}
```

### Method: DELETE: ` /api/todos`

```Json
{
    "statusCode": 200,
    "message": "Succes Detele Data"
}
```

## Tech Stack

**Server:** Node, Express

**ORM:** Prisma ORM

## Authors

- [@egagofur](https://www.github.com/egagofur)
