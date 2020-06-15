const express = require('express');
const router = express.Router();
// Require the controllers WHICH WE DID NOT CREATE YET!!
const user = require('./user');


// a simple test url to check that all of our files are communicating correctly.
router.post('/user/signUp', user.userRegister);
router.post('/user/signIn', user.userLogin);

module.exports = router;
