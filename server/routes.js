var express = require('express');
var router = express.Router();
var passport = require('passport');
var LoginController = require('./controllers/LoginController');
var UserController = require('./controllers/UserController');
var AppointmentController = require('./controllers/AppointmentController');

//Login routes
router.route('/auth/register')
    .post(LoginController.register);
    
router.route('/auth/login')
    .get(LoginController.login);
    
router.route('/auth/logout')
    .get(LoginController.logout);
    
router.route('/auth/status')
    .get(LoginController.status);

//User routes
router.route('/users')
    .get(UserController.getUsers);

router.route('/users/:user_id')
    .get(UserController.getUserById)
    .delete(UserController.removeUser);
    
//Appointment routes
router.route('/appointments')
    .post(AppointmentController.newAppointment)
    .get(AppointmentController.getAppointments);

router.route('/appointments/:appointment_id')
    .get(AppointmentController.getAppointmentById)
    .delete(AppointmentController.removeAppointment);

module.exports = router;