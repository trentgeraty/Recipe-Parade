const router = require('express').Router();
const sequelize = require('../config/connection');
const {Recipe, User, Comment, Tag, Rating, Followers} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    Recipe.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
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
          model: User,
          attributes: ['username']
          },
          {
          model: Comment,
          attributes: ['id', 'comment_text', 'recipe_id', 'user_id'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          },
          {
          model: Tag,
          attributes: ['id', 'tag_name', 'recipe_id'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          },
          {
            model: Rating,
            attributes: ['id', 'rating', 'recipe_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
              model: Followers,
              attributes: ['id', 'user_id', 'recipe_id'],
                  include: {
                      model: User,
                      attributes: ['username']
                  }
            }
        
      ]
    })
      .then(dbRecipeData => {
        // serialize data before passing to template
        const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
        res.render('dashboard', { recipes, loggedIn: true });
        
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


router.get('/edit/:id', withAuth, (req, res) => {
    Recipe.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['id', 
                     'title',
                     'ingredients',
                     'directions',
                     'created_at'
                  ],
        include: [
          {
            model: User,
            attributes: ['username']
            },
            {
            model: Comment,
            attributes: ['id', 'comment_text', 'recipe_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
            model: Tag,
            attributes: ['id', 'tag_name', 'recipe_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
              model: Rating,
              attributes: ['id', 'rating', 'recipe_id'],
                  include: {
                      model: User,
                      attributes: ['username']
                  }
              },
              {
                model: Followers,
                attributes: ['id', 'user_id', 'recipe_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
              }
        ]
      })
        .then(dbRecipeData => {
          if (!dbRecipeData) {
            res.status(404).json({ message: 'No recipe found with this id' });
            return;
          }
            // serialize data before passing to template
            const recipe = dbRecipeData.get({ plain: true });
            res.render('edit-recipe', {recipe, loggedIn: true});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
})


// redirecting users to sign in page once they sign up
router.get('/new', (req, res) => {
    res.render('new-recipe');
});



module.exports = router;