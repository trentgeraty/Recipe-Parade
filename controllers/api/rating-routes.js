const router = require('express').Router();
const { Rating } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/recipe/:post_id', (req, res) => {
//     Rating.findAll({
//         where: {
//             post_id: req.params.post_id
//         }
//     })
//     .then( dbRatingData => {
//         res.json(dbRatingData)
//     })
//     .catch( err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// })


router.get('/', (req, res) => {
    Rating.findAll({})
        .then(dbRatingData => res.json(dbRatingData))
        .catch(err => {
            console.log(err); 
            res.status(500).json(err); 
        })
});

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

router.post('/', withAuth, (req, res) => {
    if (req.session) {
    Rating.create({
        rating: req.body.rating, 
        recipe_id: req.body.recipe_id,
        user_id: req.session.user_id,
    })
        .then(dbRatingData => res.json(dbRatingData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
});

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
            res.status(404).json({ message: 'There is no rating found with this id' });
            return;
        }
        res.json(dbRatingData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Rating.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbRatingData => {
        if (!dbRatingData) {
            res.status(404).json({ message: 'There is no rating found with this id' });
            return;
        }
        res.json(dbRatingData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;