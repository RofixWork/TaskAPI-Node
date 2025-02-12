# Task Manager API 📝

_A Powerful API to Manage Your Tasks Efficiently_

---

## 🚀 Project Overview

Welcome to **Task Manager API**!  
This robust and simple API allows you to **create**, **read**, **update**, and **delete** tasks effortlessly. Built using **Node.js**, **Express**, and **MongoDB**, it offers all the basic CRUD functionalities required for a task management system.

---

## 🛠️ Technologies

- **Node.js**: Fast, scalable JavaScript runtime.
- **Express**: Lightweight web framework for handling routes and middleware.
- **MongoDB**: Reliable NoSQL database.
- **Mongoose**: Elegant MongoDB object modeling.
- **Swagger UI**: Interactive API documentation.
- **dotenv**: Simple environment variable management.

---

## 📜 Endpoints Overview

### **1. Get All Tasks**
- **Method**: `GET`
- **Endpoint**: `/api/v1/tasks`
- **Description**: Retrieve a list of all tasks.
- **Response**: 
  - `200 OK`: List of tasks.

### **2. Get Task by ID**
- **Method**: `GET`
- **Endpoint**: `/api/v1/tasks/:id`
- **Description**: Fetch a specific task using its ID.
- **Response**: 
  - `200 OK`: The task details.
  - `404 Not Found`: If the task does not exist.

### **3. Create a Task**
- **Method**: `POST`
- **Endpoint**: `/api/v1/tasks`
- **Description**: Create a new task.
- **Request Body**: 
  - `name`: Task name (required).
  - `completed`: Whether the task is completed (default: false).
- **Response**: 
  - `201 Created`: Task created successfully.

### **4. Update a Task**
- **Method**: `PATCH`
- **Endpoint**: `/api/v1/tasks/:id`
- **Description**: Update a task by ID.
- **Request Body**: 
  - `name`: Task name (optional).
  - `completed`: Whether the task is completed (optional).
- **Response**: 
  - `200 OK`: Task updated.
  - `404 Not Found`: If the task does not exist.

### **5. Delete a Task**
- **Method**: `DELETE`
- **Endpoint**: `/api/v1/tasks/:id`
- **Description**: Delete a task by ID.
- **Response**: 
  - `200 OK`: Task deleted.
  - `404 Not Found`: If the task does not exist.

---

## 🌍 API Documentation

- **Swagger UI**: Access the full API documentation at [Live Demo](https://task-api-node-e6ac1igo9-rofixworks-projects.vercel.app/).

---

## 🔧 Installation & Setup

### **1. Clone the repository**
```bash
    git clone https://github.com/RofixWork/TaskAPI-Node

### **2. Define .env File**
```bash
    touch .env

### **3. Define Connection String**
```bash
    MONGO_UR=connection_string_here

### **4. Run Server**
```bash
    npm start (node app)
    npm run dev (nodemon app)