const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/cryptocurrency/:cryptoID', (req, res)=>{
    var cryptID = data.cryptocurrency[req.param('cryptoID')];

    res.render('cryptocurrency',{
        name : cryptID.name,
        logo : cryptID.logo,
        summary : cryptID.summary,
        cons : cryptID.cons,
    });

})

module.exports = router;