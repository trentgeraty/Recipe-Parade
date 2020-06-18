const User = require('./User');
const Recipe = require('./Recipe');
const Tags = require('./Tags');
const SavedRecipes = require('./SavedRecipes');
// const Comment = require('./Comment');

//create associations
// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });


// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });

// Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });

// Post.hasMany(Comment, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// })



module.exports = { User, Recipe, Tags, SavedRecipes };