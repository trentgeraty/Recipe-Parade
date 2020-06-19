// will contain all of the user-facing routes, such as the homepage and login page
const sequelize = require('../config/connection');
const { Recipe, User, Comment, Tag, Rating, Followers } = require('../models');
const router = require('express').Router();


router.get('/', (req, res) => {
    Recipe.findAll({
      attributes: [
        'id',
        'title',
        'ingredients',
        'directions',
        'created_at'
      ],
      include: [
        {
            model: Tag,
            attributes: ['id', 'recipe_id', 'tag_id', 'created_at'],
            // include: {
            //   model: User,
            //   attributes: ['username']
            // }
        },
        {
            model: Rating,
            attributes: ['id', 'created_at'],
            // include: {
            //   model: User,
            //   attributes: ['username']
            // }
        },
        {
            model: Followers,
            attributes: ['id', 'created_at'],
            // include: {
            //   model: User,
            //   attributes: ['username']
            // }
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
      ]
    })
      .then(dbRecipeData => {
        // pass a single recipe object into the homepage template
        const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
        res.render('homepage', { recipes, loggedIn: req.session.loggedIn });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});



// redirecting users to homepage once they log in
router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return; 
    }
    res.render('login');
});



// redirecting users to sign in page once they sign up
router.get('/signup', (req, res) => {
    res.render('signup');
});


//rendering one recipe to the single-recipe page
router.get('/recipe/:id', (req, res) => {
    Recipe.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'ingredients',
        'directions',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbRecipeData => {
        if (!dbRecipeData) {
          res.status(404).json({ message: 'No recipe found with this id' });
          return;
        }
  
        // serialize the data
        const recipe = dbRecipeData.get({ plain: true });
  
        // pass data to template
        console.log(recipe);
        res.render('single-recipe', { recipe, loggedIn: req.session.loggedIn});


      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router; 