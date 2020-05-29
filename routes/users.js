const express = require('express');
const router = express.Router();

console.log('router Loaded');

// Get the User controller from Controller folder ..
const usersController = require('../controllers/users_controller');
router.get('/profile' , usersController.profile );


// Get the POst controller from Controller folder ..
const postController = require('../controllers/post_controller');
router.get('/post' , postController.post );


module.exports = router ;
