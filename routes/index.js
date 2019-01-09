const express = require('express');
const router = express.Router();
var data = require('../data/data.json')



var html = "";
router.get('/', (req, res)=>{

    var cryptData = data.cryptocurrency;

    res.render('index', {
        data: cryptData
    })
})

module.exports = router;