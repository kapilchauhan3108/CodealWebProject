const express = require('express');
const router = express.Router();

const passport = require('passport');

console.log('router Loaded');

// Get the User controller from Controller folder ..
const usersController = require('../controllers/users_controller');
router.get('/profile' , usersController.profile );


// Get the POst controller from Controller folder ..
const postController = require('../controllers/post_controller');
router.get('/post' , postController.post );

router.post('/create' , usersController.create );
// Use passport as a middleware to Authentocate
router.post('/createSession' , passport.authenticate({

    'local' : {failureRedirect : 'users/sign-in'},
}), 
usersController.createSession );

module.exports = router ;
