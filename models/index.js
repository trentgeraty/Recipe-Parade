const User = require('./User');
const Recipe = require('./Recipe');
const Tag = require('./Tags');
const SavedRecipes = require('./SavedRecipes');
const Comment = require('./Comment');
const Rating = require('./Rating');
const Followers = require('./Followers')


//create associations
User.hasMany(Recipe, {
    foreignKey: 'user_id'
});


Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    // onDelete: "cascade"
});


SavedRecipes.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

SavedRecipes.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
});


User.hasMany(SavedRecipes, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Recipe.hasMany(SavedRecipes, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
})

Tag.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Tag.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
});

User.hasMany(Tag, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Recipe.hasMany(Tag, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
})

Rating.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Rating.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
});

User.hasMany(Rating, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Recipe.hasMany(Rating, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
})

Followers.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Followers.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
});



User.hasMany(Followers, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Recipe.hasMany(Followers, {
    foreignKey: 'recipe_id',
    onDelete: "cascade"
});


module.exports = { User, Recipe, Tag, SavedRecipes, Comment, Rating, Followers };