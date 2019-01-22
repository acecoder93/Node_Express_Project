const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/cryptocurrency/:cryptoID', (req, res)=>{
    var cryptID = data.cryptocurrency[req.params('cryptoID')];

    res.render('cryptocurrency',{
        name : cryptID.name,
        abbreviation : cryptID.abbreviation,
        logo : cryptID.logo,
        summary : cryptID.summary,
        cons : cryptID.cons,
        website: cryptID.website
    });

})

module.exports = router;