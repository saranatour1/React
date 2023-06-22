// server.js
const express = require('express');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

// io.on('connection' , (socket) =>{
//   console.log('this is the connection id' , socket.id);
//   console.log('hello , very nice to meet you! (hand shake)');
//   socket.emit('ev1' , 'welcome');
// })

io.on('connection' , (socket) =>{
  console.log('this is the connection id' , socket.id);
    socket.emit('ev1' , 'welcome');

    // socket.emit('ev2', 'another message');
    socket.on('message', (data) => {
      socket.emit('ev2' , data);
    });

  // console.log(socket);
})



