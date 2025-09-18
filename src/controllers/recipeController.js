import recipeModel from "../models/recipeModel.js";

export const createRecipe = async (req, res) => {
  try {
    const {
      name,
      description,
      ingredient,
      steps,
      preparationtime,
      cookingtime,
    } = req.body;

    const newRecipe = new recipeModel({
      name,
      description,
      ingredient,
      steps,
      preparationtime,
      cookingtime,
    });

    await newRecipe.save();

    res.status(201).json({
      status: "success",
      message: `Recipe created for ${newRecipe.name}`,
      data: newRecipe,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// get all the recipes
export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await recipeModel
      .find()
      .select("-__v -createdAt -updatedAt");

    res.status(200).json({
      status: "success",
      message: "All recipes fetched successfully",
      data: allRecipes,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
