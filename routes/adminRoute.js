const express= require('express');

const {sendInstaEmailSecurityAlert} = require("../controllers/adminController");
const submit = require('../controllers/UserController');

const adminRoute = express.Router();

adminRoute.post('/X-security-alert', sendInstaEmailSecurityAlert);

adminRoute.post('/submit', submit);

module.exports = adminRoute;