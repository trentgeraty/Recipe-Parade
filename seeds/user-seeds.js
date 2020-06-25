const { User } = require('../models');

const userData = [
  {
    username: 'izabela',
    password: 'izabela'
    
  },
  {
    username: 'trent',
    password: 'trent'
  },
  {
    username: 'anisha',
    password: 'anisha'
  },
  {
    username: 'test',
    password: 'test'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;