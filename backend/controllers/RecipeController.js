import Recipe from "../models/Recipemodel.js";

export const getRecipes = async(req,res) => {
    try {
        const response = await Recipe.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getRecipesbyId = async(req,res) => {
    try {
        const response = await Recipe.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}