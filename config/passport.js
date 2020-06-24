const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.serializeUser(function(user, done) {
    // console.log(user);
    done(null, user.id);
  });


   
passport.deserializeUser(function(id, done) {
    // console.log(id);
    User.findOne({
        where: {
            id: id
        }
    })
    .then(
        function (user) {
            // console.log("user will go here =================")    
            // console.log(user);
            // console.log("user ends here =================")    
    
    
        done(null, user);
    })
    .catch((err) => {
        if (err) { 
            return done(err); }
        }
    );;
});

// console.log('IM HEREEEEEEEEEEEE')

passport.use(new LocalStrategy(
    // { usernameField: "id" },

    function(username, password, done) {
        // console.log("id and password come here" + username, password);
      User.findOne(

        {
            where: {
                username: username
            }
        

        })
        .then(
            function (user) {
            
                if (!user) { return done(null, false); }
                // console.log("=======================")
                // console.log(user)
                // console.log("++++++++++++++++++++++++")
                if (!user.checkPassword(password)) { return done(null, false); }
                return done(null, user);
              }
        )
        .catch((err) => {
            if (err) { 
                return done(err); }
            }
        );
    }
));



