const express = require('express');
const router = express.Router();

console.log('router Loaded');

// Get the User controller from Controller folder ..
const usersController = require('../controllers/users_controller');
router.get('/profile' , usersController.profile );


router.get('/sign-up' , usersController.signup );
router.get('/log-in' , usersController.login );

router.post('/create', usersController.create);
router.post('/createSession', usersController.createSession);

router.get('/signout', usersController.signout);


// Get the POst controller from Controller folder ..
const postController = require('../controllers/post_controller');
router.get('/post' , postController.post );


module.exports = router ;
