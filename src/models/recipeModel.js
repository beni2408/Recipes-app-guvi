import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trime: true,
  },

  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});
const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
      minlength: 3,
      trim: true,
    },
    description: {
      type: String,
    },
    ingredient: { type: [ingredientSchema], type: true },
    steps: {
      type: [String],
      required: true,
      trim: true,
    },
    preparationtime: {
      type: String,
      require: true,
    },
    cookingtime: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const recipeModel = mongoose.model("Recipe", recipeSchema);
export default recipeModel;
