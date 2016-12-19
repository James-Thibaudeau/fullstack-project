var User = require('../models/User');

exports.getUsers = function (req, res) {
    User.find(function (err, users) {
        if (err)
            return res.send(err);

        res.json(users);
    });
};

exports.getUserById = function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err)
            return res.send(err);
        res.json(user);
    });
};

exports.getUserByUserName = function(req, res) {
    User.findOne({username: req.params.username}, function(err, user) {
        if(err)
            return res.send(err);
        res.json(user);
    });
};

exports.removeUser = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            return res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
};

    // .put(function (req, res) {


    //     User.findById(req.params.user_id, function (err, user) {

    //         if (err)
    //             res.send(err);

    //         user.name = req.body.name;  


    //         user.save(function (err) {
    //             if (err)
    //                 res.send(err);

    //             res.json({ message: 'User updated!' });
    //         });

    //     });
    // })
