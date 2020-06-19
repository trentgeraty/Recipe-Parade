// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection');

// class RecipeTag extends Model {}

// RecipeTag.init(
//   {
//     // define columns
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     recipe_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'recipe',
//         key: 'id'
//       }
//     },
//     tag_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'tag',
//         key: 'id'
//       }
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'recipe_tag',
//   }
// );

// module.exports = RecipeTag;