const express = require('express');
const router = express.Router();
var data = require('../data/data.json')


// router.get('/cryptocurrency', (req, res)=>{
//     var cryptData = data.cryptocurrency;

//     res.render('cryptocurrency', {
//         data: cryptData
//     })

// });


// router.get('/cryptocurrency/:cryptoID', (req, res)=>{
router.get('/cryptocurrency/:cryptoID', (req, res)=>{
    var cryptID = data.cryptocurrency[req.param('cryptoID')];
    var cryptJSON = JSON.stringify(cryptID);


    // html = `
    // ${cryptocurrency.name}
    // ${cryptocurrency.logo}
    // ${cryptocurrency.summary}
    // ${cryptocurrency.cons}
    // `
    res.render('cryptocurrency',{
        name : cryptID.name,
        logo : cryptID.logo,
        summary : cryptID.summary,
        cons : cryptID.cons,
        
        
        
    

    });

})


module.exports = router;