var User = require('../models/User');

exports.getUsers = function (req, res) {
    User.find((err, users) => {
        if (err)
            return res.send(err);

        res.json(users);
    });
};

exports.getUserById = function(req, res) {
    User.findById(req.params.user_id, (err, user) => {
        if (err)
            return res.send(err);
        res.json(user);
    });
};

exports.getUserByUserName = function(req, res) {
    var username = {username: req.params.username};
    User.findOne(username, (err, user) => {
        if(err)
            return res.send(err);
        res.json(user);
    });
};

exports.removeUser = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, (err, user) => {
        if (err)
            return res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
};

exports.updateUser = function (req, res) {

    User.findById(req.params.user_id, (err, user) => {

        if (err) {
            return res.send(err);
        }
        
        var reqUser = req.body;

        user.firstName = reqUser.firstName;
        user.lastName = reqUser.lastName;  
        user.email = reqUser.email;
        
        user.save(err => {
            if (err) {
                return res.send(err);
            }

            return res.json({ message: 'User updated!' });
        });

    });
};
