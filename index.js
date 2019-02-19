const express = require('express');
const socket = require('socket.io');


//App setup

const app = express();

var server = app.listen(5500, () => {
    console.log('listening to requests in port 5500')
});

app.use(express.static('public'));

//socket setup 

var io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection');

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    })
})