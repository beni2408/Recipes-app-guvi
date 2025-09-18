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

// Get recipe by ID
export const getRecipeByID = async (req, res) => {
  try {
    const { id } = req.params;

    const recipeByID = await recipeModel
      .findById(id)
      .select("-__v -createdAt -updatedAt");

    if (!recipeByID) {
      return res.status(404).json({
        status: "error",
        message: "Recipe not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Recipe fetched successfully",
      data: recipeByID,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// update recipe by ID
export const updateRecipeByID = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;

    const updatedRecipe = await recipeModel.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      message: "Recipe updated successfully",
      data: updatedRecipe,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "User not found",
    });
  }
};

// delete recipe by ID
export const deleteRecipeById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await recipeModel
      .findByIdAndDelete(id)
      .select("-__v -createdAt -updatedAt");

    res.status(200).json({
      status: "success",
      message: "Recipe deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "User not found",
    });
  }
};
