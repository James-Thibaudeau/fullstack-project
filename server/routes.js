var express = require('express');
var router = express.Router();
var passport = require('passport');
var LoginController = require('./controllers/LoginController');
var UserController = require('./controllers/UserController');
var AppointmentController = require('./controllers/AppointmentController');

//Auth check middleware function
var checkAuth = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).json({
          error: 'Not logged in'
    });
    }
    next();

};

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
    .get(checkAuth, UserController.getUsers);

router.route('/users/:user_id')
    .get(checkAuth, UserController.getUserById)
    .delete(checkAuth, UserController.removeUser);
    
//Appointment routes
router.route('/appointments')
    .post(checkAuth, AppointmentController.newAppointment)
    .get(checkAuth, AppointmentController.getAppointments);

router.route('/appointments/:appointment_id')
    .get(checkAuth, AppointmentController.getAppointmentById)
    .delete(checkAuth, AppointmentController.removeAppointment);

module.exports = router;