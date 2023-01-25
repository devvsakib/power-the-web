const router = require('express').Router();

router.use('**',(req,res)=>{
    res.status(404).send({status:'404', message:'Invalid Api Request'});
})

module.exports = router;