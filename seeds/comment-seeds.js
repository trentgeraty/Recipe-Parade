const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I love it",
    user_id: 1,
    recipe_id: 1
  },
  {
    comment_text: "Great recipe",
    user_id: 2,
    recipe_id: 2
  },
  {
    comment_text: "I have tried this but did not work out for me.",
    user_id: 3,
    recipe_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;