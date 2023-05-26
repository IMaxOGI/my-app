const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

let activeSessions = 0;

io.on('connection', (socket) => {
    activeSessions++;
    io.emit('activeSessions', activeSessions);

    socket.on('disconnect', () => {
        activeSessions--;
        io.emit('activeSessions', activeSessions);
    });
});

server.listen(3001, '0.0.0.0', () => {
    console.log('Server listening on port 3001');
});
