const router = require('express').Router();
const { Rating } = require('../../models');
const withAuth = require('../../utils/auth');

//route to get all the ratings
router.get('/', (req, res) => {
    Rating.findAll({})
        .then(dbRatingData => res.json(dbRatingData))
        .catch(err => {
            console.log(err); 
            res.status(500).json(err); 
        })
});

//route to get 1 rating
router.get('/:id', (req, res) => {
    Rating.findAll({
            where: { 
                id: req.params.id}
        })
        .then(dbRatingData => res.json(dbRatingData))
        .catch(err => {
            console.log(err); 
            res.status(500).json(err); 
        })
});


//route to create a rating
router.post('/', withAuth, (req, res) => {
    // check session
    if (req.session) {
    Rating.create({
        rating: req.body.rating, 
        recipe_id: req.body.recipe_id,
        // use the id from the session
        user_id: req.session.user_id,
    })
        .then(dbRatingData => res.json(dbRatingData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
});


//route to update a rating
router.put('/:id', withAuth, (req, res) => {
    Rating.update({
        rating: req.body.rating
      },
      {
        where: {
          id: req.params.id
        }
    }).then(dbRatingData => {
        if (!dbRatingData) {
            res.status(404).json({ message: 'No rating found with this id' });
            return;
        }
        res.json(dbRatingData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//route to delete a rating
router.delete('/:id', withAuth, (req, res) => {
    Rating.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbRatingData => {
        if (!dbRatingData) {
            res.status(404).json({ message: 'No rating found with this id' });
            return;
        }
        res.json(dbRatingData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;