const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 8080;
const ip = process.env.IP;
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

//   socket.emit('newMessage', {
//     from: 'John',
//     text: 'See you then',
//     createdAt: 123123
//   });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
        from: message.from,
        text: message.text,
        createAt: new Date().getTime()
    })
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});



server.listen(port, ip, ()=>{
    console.log(`Started on port ${port} `);
})
