
// Setting up Express Module & Socket.IO
const express = require('express');
const app = express();
const http = require('http').Server(app);
var io = require('socket.io')(http);


// Setting up View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');


// Setting up Routers
app.use(express.static('public'));
app.use(require('./routes/index.js'))
app.use(require('./routes/cryptocurrency.js'))
app.use(require('./routes/feedback.js'))
app.use(require('./routes/api.js'))
app.use(require('./routes/chat.js'))


// Socket Setup (Chat Engine);
io.on('connection', (socket)=>{
    socket.on('chat message', (msg)=>{
        io.emit('chat', msg);
    })
});

http.listen(5000, ()=>{
    console.log('Listening on port 5000')
});