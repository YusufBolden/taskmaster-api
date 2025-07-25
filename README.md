# 📦 TaskMaster API

TaskMaster API is the secure, RESTful backend service for managing productivity workflows. It handles user registration and login, project creation, and nested task management using JWT-based authentication and ownership-based authorization. Built with Express, MongoDB, and Mongoose, it features clean modular architecture, pre-save password hashing, and fully protected endpoints.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-darkred?logo=mongoose)
![JWT](https://img.shields.io/badge/JWT-Auth-blue?logo=jsonwebtokens)
![Bcrypt](https://img.shields.io/badge/Bcrypt-Hashing-yellow?logo=security)
![REST](https://img.shields.io/badge/API-Type--REST-blue)

---

## 🚢 Live Deployment
[View live on Render](https://taskmaster-backend-api-yf49.onrender.com)

---

## 🚀 Local Setup

To set up and run this project locally:

### 1. Clone the repository

```bash
git clone https://github.com/YusufBolden/taskmaster-api.git
cd taskmaster-api/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```bash
cp .env.example .env
```

Edit `.env` with your own values:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmaster
JWT_SECRET=your_secure_jwt_secret
```

### 4. Start the development server

```bash
npm run dev
```

---

## 🗄️ File Structure

```
taskmaster-api/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── taskController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   ├── routes/
│   │   └── api/
│   │       ├── userRoutes.js
│   │       ├── projectRoutes.js
│   │       └── taskRoutes.js
│   ├── utils/
│   │   └── authMiddleware.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
```

---

## 🔐 Features

- **User Authentication**
  - Register and login with hashed passwords
  - JWT-based secure sessions

- **Protected Routes**
  - Users can only access their own projects and tasks

- **Project Management**
  - Create, read, update, delete your own projects

- **Nested Task Management**
  - Add tasks to a specific project
  - Fully authorized CRUD operations on tasks

- **Modular Codebase**
  - Organized by `controllers/`, `models/`, `routes/`, and `utils/`
  - Clean separation of concerns

---
## 📮 API Reference

### 👤 User Routes

| Method | Endpoint              | Description              | Auth |
|--------|-----------------------|--------------------------|:----:|
| `POST` | `/api/users/register` | Register new user        | 🔓   |
| `POST` | `/api/users/login`    | Login and return JWT     | 🔓   |

---

### 📁 Project Routes

| Method  | Endpoint              | Description                 | Auth |
|---------|-----------------------|-----------------------------|:----:|
| `POST`  | `/api/projects`       | Create a new project        | 🔒   |
| `GET`   | `/api/projects`       | Get all projects            | 🔒   |
| `GET`   | `/api/projects/:id`   | Get a single project by ID  | 🔒   |
| `PUT`   | `/api/projects/:id`   | Update a project            | 🔒   |
| `DELETE`| `/api/projects/:id`   | Delete a project            | 🔒   |

---

### ✅ Task Routes

| Method  | Endpoint                                | Description                  | Auth |
|---------|-----------------------------------------|------------------------------|:----:|
| `POST`  | `/api/projects/:projectId/tasks`        | Create a task under project  | 🔒   |
| `GET`   | `/api/projects/:projectId/tasks`        | Get tasks for a project      | 🔒   |
| `PUT`   | `/api/tasks/:taskId`                    | Update a task by ID          | 🔒   |
| `DELETE`| `/api/tasks/:taskId`                    | Delete a task by ID          | 🔒   |

---

### 🔐 Legend

- 🔓 = Public (no token required)
- 🔒 = Protected (JWT token required)

---

## 📫 Testing with Postman

1. Import this API manually in Postman or create a new collection.
2. Register a new user:  
   `POST /api/users/register` with JSON body:
   ```json
   {
     "username": "yusuf",
     "email": "yusuf@example.com",
     "password": "123456"
   }
   ```
3. Login:  
   `POST /api/users/login` → Save the returned token
4. Set `Authorization: Bearer <your_token>` for protected routes
5. Test project and task endpoints as needed

---

## 🧪 How to Test All Routes

### 🔐 Step 1: Register & Login

1. Register
    ```http
    POST /api/users/register
    Content-Type: application/json
    ```
    ```json
    {
      "username": "testuser",
      "email": "test@example.com",
      "password": "123456"
    }
    ```

2. Login
    ```http
    POST /api/users/login
    ```
    → Save the returned token.

---

### 📁 Step 2: Test Project Routes

Add the following header to all requests:
```
Authorization: Bearer <your_token>
```

- Create Project:
  ```http
  POST /api/projects
  ```
  ```json
  {
    "name": "My Project",
    "description": "Test project"
  }
  ```

- Get All Projects:
  ```http
  GET /api/projects
  ```

- Update Project:
  ```http
  PUT /api/projects/:id
  ```

- Delete Project:
  ```http
  DELETE /api/projects/:id
  ```

---

### ✅ Step 3: Test Task Routes

- Create Task:
  ```http
  POST /api/projects/:projectId/tasks
  ```
  ```json
  {
    "title": "First Task",
    "description": "Write docs",
    "status": "To Do"
  }
  ```

- Get Tasks:
  ```http
  GET /api/projects/:projectId/tasks
  ```

- Update Task:
  ```http
  PUT /api/tasks/:taskId
  ```

- Delete Task:
  ```http
  DELETE /api/tasks/:taskId
  ```

---

## 🧑🏿‍💻 Author

Created by **Yusuf Bolden**. Feedback and collaboration welcome!

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).