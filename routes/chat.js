const express = require('express');
const router = express.Router();
var data = require('../data/data.json')



router.get('/chat', (req, res)=>{
    res.render('/Users/anujsaheba/DigitalCrafts/Node_Express_Project/views/chat.ejs');
});

module.exports = router;