const express = require('express');
const router = express.Router();
const body_parser = require('body-parser');


router.get('/feedback', (req, res)=>{
    res.render('feedback');
})


router.use(body_parser.urlencoded({extended: false}));

router.post('/feedback', (req, res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phoneNumber = req.body.number;
    var comments = req.body.comments;

    res.send(`${name} ${email} ${phoneNumber} ${comments}`);

})

module.exports = router;