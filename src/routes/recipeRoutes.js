import { Router } from "express";
import {
  createRecipe,
  getAllRecipes,
} from "../controllers/recipeController.js";

const recipeRouter = Router();
recipeRouter.use((req, res, next) => {
  console.log("recipeRouter Middleware");
  console.log(req.method, req.url, new Date().toLocaleString());
  next();
});

// createRecipe
recipeRouter.post("/", createRecipe);

//getallRecipes
recipeRouter.get("/", getAllRecipes);
export default recipeRouter;
