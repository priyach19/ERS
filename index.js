const express = require('express');
require('dotenv').config();
// parse cookie header and populate req.cookies
const cookieParser = require('cookie-parser'); 
// parses incoming request bodies
const bodyParser = require('body-parser'); 
const app = express();
const PORT=8000;
const expressLayouts = require('express-ejs-layouts');
const db = require("./config/mongoose");
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const customMware = require('./config/middleware');
const path = require('path')

app.use(cookieParser());

app.use(expressLayouts);

//connecting assets folder/static files
app.use(express.static(path.join(__dirname,'assets')));
// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the session cookie in the db
app.use(
    session({
      name: "EmployeeReviewSystem",
      secret: "reviewapp",
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 100,
      },
      store: MongoStore.create(
        {
          mongoUrl:
          process.env.MONGO_URI,
          autoRemove: "disabled",
        },
        function (err) {
          console.log(err || "connect-mongodb setup");
        }
      ),
    })
  );
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// sets the authenticated user in the response
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

// use express router
app.use('/', require('./routes'));

app.listen(PORT,(err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${PORT}`)
});