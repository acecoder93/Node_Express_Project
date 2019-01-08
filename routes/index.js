const express = require('express');
const router = express.Router();


var html = "";
router.get('/', (req, res)=>{
    html = `

    <a href = "/cryptocurrency"> Click here </a>


    `
    res.send (html);
})

module.exports = router;