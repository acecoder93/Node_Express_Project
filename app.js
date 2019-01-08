const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(require('./routes/index.js'))
app.use(require('./routes/cryptocurrency.js'))

app.listen(5000, ()=>{
    console.log('Listening on port 5000')
})