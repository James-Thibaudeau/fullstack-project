var express = require('express');
var router = express.Router();
var LoginController = require('./controllers/LoginController');
var UserController = require('./controllers/UserController');
var AppointmentController = require('./controllers/AppointmentController');
//Auth check middleware function
var checkAuth = LoginController.checkAuth;

//Login routes
router.route('/auth/register')
    .post(LoginController.register);
    
router.route('/auth/login')
    .post(LoginController.login);
    
router.route('/auth/logout')
    .get(LoginController.logout);
    
router.route('/auth/status')
    .get(LoginController.status);

//User routes
router.route('/users')
    .get(UserController.getUsers);

// router.route('/users/:user_id')
//     .get(UserController.getUserById)
//     .delete(checkAuth, UserController.removeUser);

router.route('/user/:username')
    .get(UserController.getUserByUserName);
    
//Appointment routes
router.route('/appointments')
    .post(checkAuth, AppointmentController.newAppointment)
    .get(checkAuth, AppointmentController.getAppointments);

router.route('/appointments/:appointment_id')
    .get(checkAuth, AppointmentController.getAppointmentById)
    .delete(checkAuth, AppointmentController.removeAppointment);

module.exports = router;