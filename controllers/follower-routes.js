const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Followers } = require('../models');
const withAuth = require('../utils/auth');

// GET all followers
router.get('/', (req, res) => {
    console.log('======================');
    Followers.findAll({
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
                model: Recipe,
                attributes: ['id', 'title', 'ingredients', 'directions']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbFollowerData => res.json(dbFollowerData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  
});

// GET a single follower
router.get('/:id', (req, res) => {
    Followers.findOne({
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
            model: Recipe,
            attributes: ['id', 'title', 'ingredients', 'directions']
        },
        {
            model: User,
            attributes: ['username']
        }
      ]
    })
      .then(dbFollowerData => {
        if (!dbFollowerData) {
          res.status(404).json({ message: 'No follower found with this id' });
          return;
        }
        res.json(dbFollowerData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



// creating a follower
router.post('/', withAuth, (req, res) => {
    // create 1 follower
    Followers.create({ 
        recipe_id: req.body.recipe_id,
        user_id: req.session.user_id
    })
        .then(dbFollowerData => res.json(dbFollowerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err); 
        });
});







// delete a follower 
router.delete('/:id', withAuth, (req, res) => {
    Followers.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbFollowerData => {
        if (!dbFollowerData) {
            res.status(404).json({ message: 'No follower found with this id' });
            return;
        }
        res.json(dbFollowerData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;