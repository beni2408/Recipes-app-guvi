# 🍲 Recipes App (CRUD API)

A simple **CRUD (Create, Read, Update, Delete)** API built using **Node.js, Express.js, and MongoDB (Mongoose)**.  
This project follows the **MVC architecture** and demonstrates backend development with MongoDB Atlas cloud database integration.

🔗 GitHub Repo: [Recipes-app-guvi](https://github.com/beni2408/Recipes-app-guvi.git)

---

## 🚀 Features

- ✅ Create a new recipe
- ✅ Fetch all recipes
- ✅ Fetch a recipe by ID
- ✅ Update a recipe by ID
- ✅ Delete a recipe by ID
- ✅ MongoDB Atlas connection via Mongoose
- ✅ Middleware for ID validation
- ✅ Clean MVC project structure

---

## 🛠️ Tech Stack

- **Node.js** – Server runtime
- **Express.js** – Backend framework
- **Mongoose** – MongoDB ODM
- **MongoDB Atlas** – Cloud database
- **Postman** – API testing

---

## 📂 Project Structure

RECIPES-APP-GUVI/
│── src/
│ ├── config/
│ │ └── db.js # MongoDB connection
│ ├── controllers/
│ │ └── recipeController.js # Business logic
│ ├── middlewares/
│ │ └── recipeMiddleware.js # ID validation
│ ├── models/
│ │ └── recipeModel.js # Mongoose schema
│ ├── routes/
│ │ └── recipeRoutes.js # API routes
│ └── secret/
│ └── dbdetails.js # (Optional configs)
│
│── index.js # App entry point
│── package.json
│── README.md
