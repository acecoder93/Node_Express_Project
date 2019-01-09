
// Setting up Express Module
const express = require('express');
const app = express();

// Setting up body-parser for form
const body_parser = require('body-parser');


// Setting up View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');




// Setting up Routers
app.use(express.static('public'));
app.use(require('./routes/index.js'))
app.use(require('./routes/cryptocurrency.js'))
app.use(require('./routes/feedback.js'))

app.listen(5000, ()=>{
    console.log('Listening on port 5000')
})