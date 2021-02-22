const http = require('http');
const express = require('express');
const socketio = require('socket.io');
// const cors = require('cors');

// const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');


const router = require('./router');


const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
const io = socketio(server);


//socket.io runs when we get a client connection or disconnection
io.on('connection', (socket) => {
    console.log('We have a new connection!');

    //specific connection
    socket.on('disconnect', () => {
        console.log('User has left!');
    })
});


// app.use(cors({origin:"http://localhost:3000"}))
app.use(router);



server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));