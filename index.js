import express from "express";

import connectDB from "./src/config/db.js";
import recipeRouter from "./src/routes/recipeRoutes.js";

const app = express();

const PORT = 5080;
app.use(express.json());

app.use("/api/recipes", recipeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
