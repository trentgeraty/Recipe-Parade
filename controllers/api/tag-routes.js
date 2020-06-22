const router = require('express').Router();
const { Tag } = require('../../models');
const withAuth = require('../../utils/auth');

//route to get all the tags
router.get('/', (req, res) => {
    Tag.findAll({})
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err); 
            res.status(500).json(err); 
        })
});

//route to get 1 tag
router.get('/:id', (req, res) => {
    Tag.findAll({
            where: { 
                id: req.params.id}
        })
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err); 
            res.status(500).json(err); 
        })
});


//route to create a tag
router.post('/', withAuth, (req, res) => {
    // check session
    if (req.session) {
    Tag.create({
        tag_name: req.body.tag_name, 
        recipe_id: req.body.recipe_id,
        // use the id from the session
        user_id: req.session.user_id,
    })
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
});


//route to update a tag
router.put('/:id', withAuth, (req, res) => {
    Tag.update({
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
    }).then(dbTagData => {
        if (!dbTagData) {
            res.status(404).json({ message: 'No tag found with this id' });
            return;
        }
        res.json(dbTagData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//route to delete a tag
router.delete('/:id', withAuth, (req, res) => {
    Tag.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbTagData => {
        if (!dbTagData) {
            res.status(404).json({ message: 'No tag found with this id' });
            return;
        }
        res.json(dbTagData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;