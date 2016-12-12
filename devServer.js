var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.IP + ':27017/fullstack');

var hash = require('bcrypt-nodejs');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('./server/models/User');

var app = express();
var compiler = webpack(config);

//middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// configure passport
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/api/auth', require('./server/controllers/LoginController'));
app.use('/api/users', require('./server/controllers/UserController'));
app.use('/api/appointments', require('./server/controllers/AppointmentController'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT, process.env.IP, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at: ' + process.env.IP + ':' + process.env.PORT);
});

