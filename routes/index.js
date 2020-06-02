const express = require('express');
const router = express.Router();

// Get the home controller from Controller folder ..
const homeController = require('../controllers/home_controller');
router.get('/' , homeController.home ); // Get used to single request and use used for multiple requests

router.use('/users' , require('./users')); // when ever any request comes in with users , it require  "Users" route
// router.use is used like useing generic url say any url with users will be redirected to "Users" router ,unlike router.get() which wil be used to hardcode URL


module.exports = router ;
