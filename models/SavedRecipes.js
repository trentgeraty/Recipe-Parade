// module.exports = Post;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Saved Recipes model
class SavedRecipes extends Model {}

// create fields/columns for Post model
SavedRecipes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'recipe',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'savedrecipes'
    }
  );
  
  module.exports = SavedRecipes;