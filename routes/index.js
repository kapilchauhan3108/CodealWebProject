const express = require('express');
const router = express.Router();

console.log('router Loaded');

// Get the home controller from Controller folder ..
const homeController = require('../controllers/home_controller');
router.get('/' , homeController.home );


module.exports = router ;
