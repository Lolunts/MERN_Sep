const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const server = app.listen(8000, () => console.log("Connection established."));

// How you establish your sockets
const io = require('socket.io')(server)


io.on('connection', socket => {
    console.log(`A new user has joined! Their id is ${socket.id}`)
    socket.emit('toeshimmy')

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} has disconnected`);
    });

    socket.on('message', data => {
        socket.to(data.room).emit('message', data.message);
    })

    socket.on('typing', data => {
        socket.to(data.room).emit('typing', data.message);
    })

    socket.on('joinroom', data => {
        socket.join(data);
    })
});
