const express = require('express');
const router = express.Router();
const passport = require('passport');

console.log('router Loaded');

// Get the User controller from Controller folder ..
const usersController = require('../controllers/users_controller');
router.get('/profile' , passport.checkAuthentication  ,usersController.profile );


router.get('/sign-up' , usersController.signup );
router.get('/log-in' , usersController.login );

router.post('/create', usersController.create);
//router.post('/createSession', usersController.createSession);

// USe Passport as a middleware to authenticate...

router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect: '/'},
), usersController.createSession);

//---------------

router.get('/sign-out', usersController.signout);


router.get('/sign-up' , usersController.signup );
router.get('/log-in' , usersController.login );

router.post('/create', usersController.create);
router.post('/createSession', usersController.createSession);

router.get('/signout', usersController.signout);


// Get the POst controller from Controller folder ..
const postController = require('../controllers/post_controller');
router.get('/post' , postController.post );


<<<<<<< HEAD
module.exports = router ;
=======



module.exports = router ;
>>>>>>> Passport-Authentication
