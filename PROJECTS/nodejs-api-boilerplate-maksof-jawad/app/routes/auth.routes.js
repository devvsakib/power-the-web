const router = require('express').Router();
const { auth } = require('../controller/');
const errorHandler = require('../middleware/errorHandler');

router.post('/sign-up',errorHandler(auth.signUp))
router.post('/sign-in',errorHandler(auth.signIn))
router.post('/sign-out',errorHandler(auth.signOut))

module.exports = router;