# To-Do List Application

## Overview

A simple to-do list application that allows users to register, login, and manage their to-do items. The backend is built with Node.js and MongoDB, and is deployed on Render. The frontend is built with React and is deployed on Vercel.

## Features

- User registration and login
- Create, read, update, and delete to-do itemsf
- Secure password storage with bcrypt
- JSON Web Token (JWT) for authentication

## API Endpoints

### User Authentication

#### POST api/users/register
Registers a new user.

- **Request Body:**
  {
    "username" : "username"
    "email": "username@gmail.com",
    "password": "123456"
  }


- **Response:**
{
    message:"User registered successfully"
}




#### POST api/users/login

- **Request Body:**
  {
    "email": "username@gmail.com",
    "password": "123456"
  }


- **Response:**
  {
    "token": "jwt_token"
  }








### To-Do Operations
#### GET api/todos/

- **Response:**

"todos": [
  {
    "_id": "todo_id",
    "userId": "user_id",
    "title": "Todo",
    "completed": false,
    "createdAt": "timestamp"
    "updatedAt": "timestamp",
}
]





#### POST api/todos

- **Request Body:**
{
  "title": "New Todo"
}

- **Response:**

"newTodo": [
  {
    "_id": "todo_id",
    "userId": "user_id",
    "title": "New Todo",
    "completed": false,
    "createdAt": "timestamp"
    "updatedAt": "timestamp",
  }
]






#### PUT api/todos/id

- **Request Body:**
{
  "title": "Updated Todo",
  "completed: "true"
}

- **Response:**

"updateTodo": [
  {
    "_id": "todo_id",
    "userId": "user_id",
    "title": "Updated Todo",
    "completed": true,
    "createdAt": "timestamp"
    "updatedAt": "timestamp",
  }
]









#### DELETE api/todos/id


- **Response:**

{
  "message": "Todo deleted"
}


