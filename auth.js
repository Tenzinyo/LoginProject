const { application } = require('express');
const express= require('express');
const router= express.Router();
const authController= require('../controller/auth');  //get the controller folder

router.post('/register', authController.register)


module.exports= router;
