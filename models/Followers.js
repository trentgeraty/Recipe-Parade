const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Followers extends Model {}

Followers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'recipe',
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