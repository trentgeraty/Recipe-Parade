const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Comment, Tag, Rating, Followers, SavedRecipes } = require('../models');
const withAuth = require('../utils/auth');

// GET all saved
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    // console.log(req.session.user_id);
    
    SavedRecipes.findAll({
  
     
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },

      // Query configuration
        attributes: [
                    'id', 
                    'recipe_id',
                    'user_id',
                    'created_at'
        ],
        order: [['created_at', 'DESC']],          
        include: [
            {
            model: User,
            attributes: ['username']
            },
            {
            model: Recipe,
            attributes: ['id', 'title', 'ingredients', 'directions']
            }
        ]


    })
    .then(dbSavedRecipeData => {

      // serialize data before passing to template
      const recipes = dbSavedRecipeData.map(recipe => recipe.get({ plain: true }));
      // console.log(recipes);
      res.render('savedrecipes', { recipes, loggedIn: true });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  
});

// GET a single saved recipe 
router.get('/:id', (req, res) => {
    SavedRecipes.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
            'id', 
            'recipe_id',
            'user_id',
            'created_at'
        ],
      include: [
        {
            model: User,
            attributes: ['username']
        },
        {
            model: Recipe,
            attributes: ['id', 'title', 'ingredients', 'directions']
        }
      ]
    })
    .then(dbSavedRecipeData => {
      if (!dbSavedRecipeData) {
        res.status(404).json({ message: 'No saved recipe found with this id' });
        return;
      }
        // serialize data before passing to template
        const recipe = dbSavedRecipeData.get({ plain: true });
        res.render('single--saved-recipe', {recipe, loggedIn: true});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// creating a recipe
router.post('/', withAuth, (req, res) => {
    // create 1 recipe
    SavedRecipes.create({ 
        recipe_id: req.body.recipe_id,
        user_id: req.session.user_id
    })
        .then(dbSavedRecipeData => {
          console.log("here will be the dbsavedrecipedata", dbSavedRecipeData)
          res.json(dbSavedRecipeData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err); 
        });
});







// delete a recipe 
router.delete('/:id', withAuth, (req, res) => {
    SavedRecipes.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbSavedRecipeData => {
        if (!dbSavedRecipeData) {
            res.status(404).json({ message: 'No saved recipe found with this id' });
            return;
        }
        res.json(dbSavedRecipeData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;