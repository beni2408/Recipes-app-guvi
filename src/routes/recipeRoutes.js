import { Router } from "express";
import {
  createRecipe,
  deleteRecipeById,
  getAllRecipes,
  getRecipeByID,
  updateRecipeByID,
} from "../controllers/recipeController.js";

import { verifyMongooseID } from "../middlewares/recipeMiddleware.js";

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

// get Recipe by ID
recipeRouter.get("/:id", verifyMongooseID, getRecipeByID);

//update recipe by ID
recipeRouter.put("/:id", verifyMongooseID, updateRecipeByID);

//delete Recipe by ID
recipeRouter.delete("/:id", verifyMongooseID, deleteRecipeById);

export default recipeRouter;
