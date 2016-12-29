var User = require('../models/User');

exports.getUsers = function (req, res) {
    User.find((err, users) => {
        if (err) {
            return res.send(err);
        }
        res.json(users);
    });
};

exports.getUserById = function(req, res) {
    User.findById(req.params.user_id, (err, user) => {
        if (err) {
            return res.send(err);
        }
        res.json(user);
    });
};

exports.getUserByUserName = function(req, res) {
    var username = {username: req.params.username};
    User.findOne(username, (err, user) => {
        if(err) {
            return res.send(err);
        }
        res.json(user);
    });
};

exports.removeUser = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, (err, user) => {
        if (err) {
            return res.send(err);
        }

        res.json({ message: 'Successfully deleted' });
    });
};

exports.updateUser = function (req, res) {
    
    var reqUser = req.body;
    //this update adds null values to the document
    //maybe this will be changed later
    var update = {
        firstName: reqUser.firstName,
        lastName: reqUser.lastName,
        email: reqUser.email,
    }
    //username is used here as a variable name for id as this is the same route
    //as the lookup user by username
    User.findByIdAndUpdate(req.params.username, update, (err, user) => {
        if (err) {
          return res.send(err);
        }
        res.json({ message: 'Updated user successfully'});
        
    });
    
    
};
