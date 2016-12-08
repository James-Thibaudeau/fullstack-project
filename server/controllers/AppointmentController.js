var express = require('express');
var router = express.Router();
var User = require('../models/Appointment');

router.route('/')

    .post(function (req, res) {

        var appointment = new Appointment();     
        appointment.username = req.body.username; 
        appointment.password = req.body.password;

        appointment.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Appointment created!' });
        });

    })

    .get(function (req, res) {
        User.find(function (err, appointments) {
            if (err)
                res.send(err);

            res.json(appointments);
        });
    });


router.route('/:appointment_id')


    .get(function(req, res) {
        User.findById(req.params.appointment_id, function(err, appointment) {
            if (err)
                res.send(err);
            res.json(appointment);
        });
    })


    .put(function (req, res) {


        User.findById(req.params.appointment_id, function (err, appointment) {

            if (err)
                res.send(err);

            appointment.name = req.body.name;  


            appointment.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Appointment updated!' });
            });

        });
    })


    .delete(function (req, res) {
        User.remove({
            _id: req.params.appointment_id
        }, function (err, appointment) {
            if (err)
                res.send(err);

            res.json({ message: 'Appointment deleted' });
        });
    });

module.exports = router;