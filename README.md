# Event Management

A simple REST API that **regsiters user** provides **user authentication with JWT for login** and **CRUD for Events managment**. Event IDs are **UUIDv4**, and user must be logged in and authorized for **creating/updating/deleting** events.

---

## Functions

* **Auth/User**: Register, Login, Logout (JWT + in‑memory blacklist)
* **JWT middleware**: Validates tokens and user
* **Events**: Create (UUID id), Read (all list & by id), Update, Delete
* **Validation**: Ensures values are ideal for creating user and events
* **Sequelize + MySQL**: Auto syncs schema
* **Env config**: Database credentials via `.env`

---

## Tech stack

* Node.js, Express
* Sequelize ORM
* MySQL (driver: `mysql2`)
* JWT (`jsonwebtoken`)
* Password hashing (`bcryptjs`)
* Env handling (`dotenv`)

---

## Prerequisites

* **Node.js** 
* **MySQL** running locally 
* A database named and added to env

---

## Installation

```bash
npm install express sequelize mysql2 bcryptjs jsonwebtoken dotenv
```

---

## Environment variables

This project reads DB credentials from environment variables. It includes:

```
DB_NAME=your_db_name
DB_USER=your_db_username
DB_PASS=your_db_password
```


## Running the app (CLI)

```bash
node app.js
```


---

## User endpoints

**Base path**: `/api/auth`

### Register

`POST /api/auth/register`

### Login

`POST /api/auth/login`


### Logout

`POST /api/auth/logout` — requires the same `token` from login session. Blacklists the token until server restarts.

## Event endpoints

**Base path**: `/api/events`

### Create Event

`POST /api/events`
Headers:

```
Authorization: Bearer <paste-token-from-login-output>
```

### List all Events 

`GET /api/events`

### Get Event by ID 

`GET /api/events/:id`

### Update Event 

`PUT /api/events/:id`


### Delete Event (protected)

`DELETE /api/events/:id`

---
