const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Followers } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Followers.findAll({
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
        res.status(404).json({ message: 'There is no follower found with this id' });
        return;
    }
    res.json(dbFollowerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });

router.post('/', withAuth, (req, res) => {
    Followers.create({
        recipe_id: req.body.recipe_id,
        id: req.session.user_id
    })
    .then(dbFollowerData => res.json(dbFollowerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Followers.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbFollowerData => {
        if (!dbFollowerData) {
            res.status(404).json({ message: 'There is follower found with this id' });
            return;
        }
        res.json(dbFollowerData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
