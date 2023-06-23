const express = require('express');
const app = express();
const cors = require('cors'); 
let users = [];
let chatHistory = [];

app.use(cors());

const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, {cors: true});

io.on('connection', (socket) => {

  const connectionTimestamp = new Date().toLocaleTimeString();
  console.log(`⚡: ${socket.id} user just connected! Timestamp: ${connectionTimestamp}`);
  
  // chat history all users 
  socket.emit('chatHistory', chatHistory);
  
  // event of sending a message 
  socket.on('message', (data) => {
    // send that message onto the stack of old chat history
    chatHistory.push(data);
    io.emit('messageResponse', data);
  });

  // when a new user connects, push that user onto the stack of users 
  socket.on('newUser', (data) => {
    users.push(data);
    socket.emit('chatHistory', chatHistory);
    io.emit('newUserResponse', users);
  });

  socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data));
  
  socket.on('disconnect', () => {
    const disconnectionTimestamp = new Date().toLocaleTimeString();
    console.log(`🔥: A user disconnected. Timestamp: ${disconnectionTimestamp}`);
    users = users.filter((user) => user.socketID !== socket.id);
    io.emit('newUserResponse', users);

    socket.disconnect();
  });
});
