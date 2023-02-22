const router = require('express').Router();
const Invalid = require('./invalid.routes')
const auth = require('./auth.routes')

router.use('/auth',auth);
router.use('**',Invalid);

module.exports = router;