const express = require('express');
const router = express.Router();
const body_parser = require('body-parser');


router.get('/feedback', (req, res)=>{
    res.render('feedback');
})


module.exports = router;