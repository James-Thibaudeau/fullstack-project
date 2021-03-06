var passport = require('passport');
var User = require('../models/User');

exports.checkAuth = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).json({
          error: 'Not logged in'
        });
    }
    next();
};

exports.register = function(req, res) {
  var user = { 
      username: req.body.username, 
      firstName: req.body.firstName, 
      lastName: req.body.lastName 
  };
  
  User.register(new User(user),
    req.body.password, function(err, account) {
    if (err) {
      return res.status(403).json({
        err: err
      });
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({
        status: 'Registration successful!'
      });
    });
  });
};

exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        status: 'Login successful!'
      });
    });
  })(req, res, next);
};

exports.logout = function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
};

exports.status = function(req, res) {
  if (!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    });
  }
  return res.status(200).json({
    status: true
  });
};
