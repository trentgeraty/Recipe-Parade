const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Rating extends Model {}

Rating.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 5
      }
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rating',
  }
);

module.exports = Rating;