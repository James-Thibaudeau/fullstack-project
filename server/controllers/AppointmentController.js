var express = require('express');
var router = express.Router();
var Appointment = require('../models/Appointment');

router.route('/')

    .post(function (req, res) {

        var appointment = new Appointment();
        appointment.name = req.body.name;
        appointment.creatorId = req.body.creatorId; 
        appointment.date = req.body.date;
        appointment.guests = req.body.guests;
        

        appointment.save(function (err) {
            if (err)
                return res.send(err);

            res.json({ message: 'Appointment created!' });
        });

    })

    .get(function (req, res) {
        Appointment.find(function (err, appointments) {
            if (err)
                return res.send(err);

            res.json(appointments);
        });
    });


router.route('/:appointment_id')


    .get(function(req, res) {
        Appointment.findById(req.params.appointment_id, function(err, appointment) {
            if (err)
                return res.send(err);
            res.json(appointment);
        });
    })


    // .put(function (req, res) {


    //     Appointment.findById(req.params.appointment_id, function (err, appointment) {

    //         if (err)
    //            return res.send(err);

    //         appointment.name = req.body.name;  


    //         appointment.save(function (err) {
    //             if (err)
    //                 return res.send(err);

    //             res.json({ message: 'Appointment updated!' });
    //         });

    //     });
    // })


    .delete(function (req, res) {
        Appointment.remove({
            _id: req.params.appointment_id
        }, function (err, appointment) {
            if (err)
                return res.send(err);

            res.json({ message: 'Appointment deleted' });
        });
    });

module.exports = router;