# 📦 TaskMaster API

TaskMaster API is the secure, RESTful backend service for managing productivity workflows. It handles user registration and login, project creation, and nested task management using JWT-based authentication and ownership-based authorization. Built with Express, MongoDB, and Mongoose, it features clean modular architecture, pre-save password hashing, and fully protected endpoints.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-darkred?logo=mongoose)
![JWT](https://img.shields.io/badge/JWT-Auth-blue?logo=jsonwebtokens)
![Bcrypt](https://img.shields.io/badge/Bcrypt-Hashing-yellow?logo=security)
![REST](https://img.shields.io/badge/API-Type--REST-blue)
![ESM](https://img.shields.io/badge/Modules-Type--ESM-orange)



**Node.js** • **Express** • **MongoDB** • **Mongoose** • **JWT** • **Bcrypt** • **REST API**

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

## 🧑🏿‍💻 Author

Created by **Yusuf Bolden**. Feedback and collaboration welcome!

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).