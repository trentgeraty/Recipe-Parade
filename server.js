const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const passportsetup = require('./config/passport')
const User = require('./models/User');

// helper function
const helpers = require('./utils/helpers');

// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});

// session connection to sequelize database
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  // cookie: {maxAge: 180000},
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(passportsetup);

// set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

// passport.use(new LocalStrategy(function(username, password, done) {
//   // { usernameField: "username" },
//   console.log(username, password)
// }))

// passport.serializeUser(function(user, done) {
//   console.log(user);
//   done(null, user.id);
// });


// passport.deserializeUser(function(id, done) {
//   return done({username: "iptest"});
// })
// Add the line below, which you're missing:
// require('./path/to/passport/config/file')(passport);

// turn on routes
app.use(routes);

// POST to identify users 
// app.post('/login', passport.authenticate('local'), (req, res) => {
//   // expects {username: 'lernantino', password: 'password1234'}
//   console.log('made it to the route');
//   // console.log(req);

//     User.findOne({
//         where: {
//             username: req.body.username
//         }
//     })
//   .then(dbUserData => {
//       if (!dbUserData) {
//           res.status(400).json({ message: 'No user with that username!'});
//           return;
//       }
//       // res.json({ user: dbUserData});
//       // verify user
//       // const validPassword = dbUserData.checkPassword(req.body.password);
      
//       // if (!validPassword) {
//       //     res.status(400).json({ message: 'Incorrect password!' });
//       //     return;
//       // }
//       req.session.save(() => {
//           // declare session variables
//           req.session.user_id = dbUserData.id;
//           req.session.username = dbUserData.username;
//           req.session.loggedIn = true;
    
//           res.json({ user: dbUserData, message: 'You are now logged in!' });
//       });
//   })
//   .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});