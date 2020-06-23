const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const recipeRoutes = require('./recipe-routes');
const commentRoutes = require('./comment-routes');
const tagRoutes = require('./tag-routes');
const ratingRoutes = require('./rating-routes');


router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/comments', commentRoutes);
router.use('/tags', tagRoutes);
router.use('/ratings', ratingRoutes);


module.exports = router;