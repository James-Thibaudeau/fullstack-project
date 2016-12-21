var Appointment = require('../models/Appointment');

exports.getAppointments = function (req, res) {
    Appointment.find(function (err, appointments) {
        if (err)
            return res.send(err);

        res.json(appointments);
    });
};

exports.newAppointment = function (req, res) {
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

};

exports.getAppointmentById =  function(req, res) {
    Appointment.find({creatorId: req.params.creatorId}, function(err, appointment) {
        if (err)
            return res.send(err);
        res.json(appointment);
    });
};

exports.removeAppointment = function (req, res) {
    Appointment.remove({
        _id: req.params.appointment_id
    }, function (err, appointment) {
        if (err)
            return res.send(err);

        res.json({ message: 'Appointment deleted' });
    });
};

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
