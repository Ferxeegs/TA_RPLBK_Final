import express from "express";
import { getRecipes, getRecipesbyId } from "../controllers/RecipeController.js";

const router = express.Router();

router.get('/recipe', getRecipes);
router.get('/recipe/:id', getRecipesbyId);

export default router;