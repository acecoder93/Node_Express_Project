
const express = require('express');
const router = express.Router();
var data = require('../data/feedback.json');
const body_parser = require('body-parser');
var fs = require('fs');


// Need a body parser to access the POST header elements that are received from feedback submission
router.use(body_parser.urlencoded({extended: false}));

// Elements can be accesed through req.body, which needs to be written to the JSON file.

router.get('/api', (req, res)=>{
    res.json(data);
})

router.use(body_parser.json());
router.use(body_parser.urlencoded({ extended: false}));

router.post('/api', function(req,res){
    data.unshift(req.body);
    fs.writeFile('app/data/feedback.json', JSON.stringify(data), 'utf8', (err)=>{
        if (err){
            console.log(err);
        }
    });
    res.json(data);
})


// need to include router.delete 

module.exports = router;