const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

// authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback:true
    },
    async function (req, email, password, done) {
      try {
        // find the user and stablish the identity
        const user = await User.findOne({ email: email });
        console.log(user);

        if (!user || user.password != password) {
          console.log("Invalid username or password");
          return done(null, false);
        }

        return done(null, user);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);

// serializing user to decide what is in the cookie
passport.serializeUser(function (user, done) {
  console.log("serializing");
  done(null, user.id);
});



passport.deserializeUser(async function (id, done) {
    try {
      const user = await User.findById(id);
      return done(null, user);
    } catch (err) {
      console.log("Error in finding user --> passport");
      return done(err);
    }
  });

// check if user authenticated then pass the request to next
passport.checkAuthentication =  function (req, res, next) {
  // if user is sign in then pass on the req to next(controller action)
  if (req.isAuthenticated()) {
    return next();
  }
  // if user is not sign in
  return res.redirect("/login");
};

passport.setAuthenticatedUser = async function (req, res, next) {
  if (await req.isAuthenticated()) {
    // user is authenticated then req.user is contains the curr login user from the session cookie
    // and we are just sending this to locals for views
    res.locals.user = req.user;
  }
  next();
};

module.exports = passport;
