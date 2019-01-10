const express = require('express');
const router = express.Router();
const body_parser = require('body-parser');

// in GET, i am sending you information and this is what I want you to do

router.get('/feedback', (req, res)=>{
    res.render('feedback');
})


// Need a body parser for the information to be captured in "req.body"
// router.use(body_parser.urlencoded({extended: false}));

// Need to add an event listener and prevent default and push information to api route


// in Post, this is what I am doing once the user submits the information
// router.post('/api', (req, res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var phoneNumber = req.body.number;
//     var comments = req.body.comments;


//  res.send(`${name} ${email} ${phoneNumber} ${comments}`);

// Commenteted out below as this information will be posted to API route
 // res.send(`${name} ${email} ${phoneNumber} ${comments}`);

// })


module.exports = router;