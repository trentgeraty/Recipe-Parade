const User = require('./User');
const Recipe = require('./Recipe');
const Tag = require('./Tags');
const RecipeTag = require('./RecipeTag');
const SavedRecipes = require('./SavedRecipes');
const Comment = require('./Comment');

//create associations
User.hasMany(Recipe, {
    foreignKey: 'user_id'
});


Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

// Recipes belongToMany Tags (through RecipeTag)
Recipe.belongsToMany(Tag, {
    through: RecipeTag,
    as: 'tagged_recipes',
    foreignKey: 'recipe_id'
});
  

// Tags belongToMany Recipes (through RecipeTag)
Tag.belongsToMany(Recipe, {
    through: RecipeTag,
    as: 'tagged_recipes',
    foreignKey: 'tag_id'
});


User.hasMany(Tag, {
    foreignKey: 'user_id'
});


Recipe.hasMany(Tag, {
    foreignKey: 'recipe_id'
});


SavedRecipes.belongsTo(User, {
    foreignKey: 'user_id'
});

SavedRecipes.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

User.hasMany(SavedRecipes, {
    foreignKey: 'user_id'
});

Recipe.hasMany(SavedRecipes, {
    foreignKey: 'recipe_id'
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



module.exports = { User, Recipe, Tag, SavedRecipes, RecipeTag, Comment };