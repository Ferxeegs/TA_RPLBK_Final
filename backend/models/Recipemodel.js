import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Recipe = db.define('recipe',{
    strname : DataTypes.STRING,
    strcategory : DataTypes.STRING,
    strthumb : DataTypes.STRING,
    strtype : DataTypes.STRING,
    strsource : DataTypes.STRING,
    stringredient1 : DataTypes.STRING,
    stringredient2 : DataTypes.STRING,
    stringredient3 : DataTypes.STRING,
    stringredient4 : DataTypes.STRING,
    stringredient5 : DataTypes.STRING,
    stringredient6 : DataTypes.STRING,
    stringredient7 : DataTypes.STRING,
    stringredient8 : DataTypes.STRING,
    stringredient9 : DataTypes.STRING,
    stringredient10: DataTypes.STRING,
    strinstructions: DataTypes.TEXT,
},{
    freezeTableName:true
});

(async()=>{
    await db.sync();
})();
export default Recipe;



