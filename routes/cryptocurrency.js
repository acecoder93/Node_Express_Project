const express = require('express');
const router = express.Router();
var data = require('../data/data.json')


router.get('/cryptocurrency', (req, res)=>{
    var cryptData = data.cryptocurrency;
    var html1 = "";
    var html2 = "";
    var count = 0;

    cryptData.forEach((item)=>{
        html1 = `<h1> Cryptocurrency </h1>`
        html2 += `
    
        <li style = "border-bottom: solid black 1px; background-color: rgba(219, 214, 214, .5); padding-left: 20px; padding-top: 15px;">
            <h3>${item.name}
            <a href = ${item.website}> <img src = '${item.logo}' style = "height: 20px; width: 20px"> </a>
            </h3>
            <p> <a href = "https://www.reddit.com/r/${item.name}"> Reddit </a> </p>
            <p> <a href = "https://www.coinmarketcap.com/currencies/${item.name}"> CoinMarketCap </a> </p>
            <h5> Summary </h5>
            <p> ${item.summary}</p>
            <h5> Cons </h5>
            <p> ${item.cons} </p>
            
        </li>
        `
        count++;
    })

    res.send(`<ul style = "list-style-type: none">${html1} ${html2}</ul>`);    

})

router.get('/cryptocurrency/:cryptoID', (req, res)=>{
    var html;
    var cryptocurrency = data.cryptocurrency[req.param('cryptoID')];

    html = `
    <h3> ${cryptocurrency.name} </h3>
    <img src = '${cryptocurrency.logo}' style = "height: 35px; width: 35px">
    <h5> Summary </h5>
    <p> ${cryptocurrency.summary}</p>
    <h5> Cons </h5>
    <p> ${cryptocurrency.cons} </p>
    `

    res.send(html);

})


module.exports = router;