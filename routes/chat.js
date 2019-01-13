const express = require('express');
const router = express.Router();
var data = require('../data/data.json')


router.get('/chat',(req,res) => {
    
    res.render('chat',{
        dataTest : data,
    })
})

router.get('/chat', (req, res)=>{
    res.sendFile('./views/chat.ejs');
});

module.exports = router;