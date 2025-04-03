# 🎬 Movie Rating API

## 🌟 Overview
This project is a **RESTful API** designed to support two types of accounts: **Admin** and **User**. The API provides functionality for managing user authentication and authorization, with specific permissions for each role:
- **Admins** can **add, delete, and manage movies**.
- **Users** can **rate movies and leave reviews**.

The API is built using **Express.js** and follows best practices for authentication, validation, and database management.

## 🚀 Features
- **User Authentication:** Secure login and signup using JWT authentication.
- **Role-Based Access Control:** Different permissions for Admin and User roles.
- **Movie Management:** Admins can add and delete movies.
- **Movie Ratings & Reviews:** Users can rate and review movies.
- **Validation:** Input validation using **Express Validator**.
- **Logging & Debugging:** Request logging with **Morgan**.

## 🛠️ Tech Stack
- **Backend Framework:** Express.js
- **Database:** SQLite with Sequelize ORM
- **Authentication:** JWT & bcrypt
- **Validation:** Express Validator
- **Logging:** Morgan

## 📂 Project Structure
```
📦 backend
 ┣ 📂 src
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 models
 ┃ ┣ 📂 middlewares
 ┃ ┣ 📂 validation
 ┃ ┣ 📂 utils
 ┃ ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 .env
 ┗ 📜 .gitignore
```

## 🎯 How to Run Locally
```sh
# Clone the repository
git clone https://github.com/yourusername/movie-rating-api.git

# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm run dev
```
The API will be running at `http://localhost:5000/`.

## 📌 API Endpoints
| Method | Endpoint         | Access  | Description |
|--------|-----------------|---------|-------------|
| POST   | /auth/register  | Public  | Register a new user |
| POST   | /auth/login     | Public  | Login and get a token |
| POST   | /movies         | Admin   | Add a new movie |
| DELETE | /movies/:id     | Admin   | Delete a movie |
| GET    | /movies         | Public  | Get all movies |
| POST   | /movies/:id/rate | User   | Rate a movie |

## 📌 Upcoming Features
- **Movie Search & Filtering**
- **User Profile & Favorites List**
- **Enhanced Rating System**

## 🤝 Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

📩 Contact
For inquiries or collaboration, reach me via:
GitHub: [https://github.com/mandouro-22]
LinkedIn: [https://www.linkedin.com/in/omar-mandour-61253625b/]

---
**©2026 Omar Mandour | All Rights Reserved**
