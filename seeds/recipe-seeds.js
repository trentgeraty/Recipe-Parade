const { Recipe } = require('../models');

const recipeData = [
  {
    title: 'Tiramisu',
    ingredients: 'coffee, biscuits',
    directions: 'Adding all the directions here.',
    user_id: 1
    
  },
  {
    title: 'Carrot Cake',
    ingredients: 'carrots, flour',
    directions: 'Adding all the directions here.',
    user_id: 1
    
  },
  {
    title: 'Spinach Lasagna',
    ingredients: 'cottage cheese, lasagna noodles',
    directions: 'Adding all the directions here.',
    user_id: 1
    
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;