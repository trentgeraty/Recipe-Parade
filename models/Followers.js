
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Saved Recipes model
class Followers extends Model {}

// create fields/columns for Post model
Followers.init(
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
      modelName: 'followers'
    }
  );
  
  module.exports = Followers;