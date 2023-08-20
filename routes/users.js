const express = require('express');
const passport = require('passport');
const router = express.Router();

const usersController = require('../controllers/users_controller');
const dashboardsController = require('../controllers/dashboard_controller');
//path for login
router.get('/', usersController.login);
//path for register
router.get('/register', usersController.register);
//path for signout
router.get('/sign-out', usersController.destroySession);
//path for admin dashboard
router.get('/admin-dashboard', dashboardsController.adminDashboard);
//path for employee dashboard
router.get('/employee-dashboard/:id', dashboardsController.employeeDashboard);
//path for adding employee
router.get('/add-employee', usersController.addEmployee);
//path for edit employee details
router.get('/edit-employee/:id', usersController.editEmployee);
router.post('/update-employee/:id', usersController.updateEmployee);
//path for creating user
router.post('/create', usersController.create);
//path for creating employee
router.post('/create-employee', usersController.createEmployee);

// use passport as middleware to authenticate
router.post(
  '/create-session',
  passport.authenticate('local', { failureRedirect: '/' }),
  usersController.createSession
);

//to change password
router.get('/forgetPassword',usersController.forgetPass);
router.post('/changePass',usersController.changePass);

//to destroy session
router.get('/destroy/:id', usersController.destroy)

module.exports = router;