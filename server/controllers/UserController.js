var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.route('/')

    .post(function (req, res) {
        
        console.log(req.body);

        var user = new User();     
        user.username = req.body.username; 
        user.password = req.body.password;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;

        user.save(function (err) {
            if (err)
                return res.send(err);

            res.json({ message: 'User created!' });
        });

    })

    .get(function (req, res) {
        User.find(function (err, users) {
            if (err)
                return res.send(err);

            res.json(users);
        });
    });


router.route('/:user_id')


    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                return res.send(err);
            res.json(user);
        });
    })


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


    .delete(function (req, res) {
        User.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err)
                return res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;