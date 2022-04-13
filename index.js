import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import listsRoutes from './routes/lists.js';
import reminderRoutes from './routes/reminders.js'
import { connectDB } from './config/db.js';
import * as http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();

connectDB();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/lists', listsRoutes);
app.use('/reminders', reminderRoutes);

const server = http.createServer(app);

export const io = new Server(server, {
    cors: {
        // origin: 'http://localhost:3000',
        allowedHeaders: ['Access-Control-Allow-Origin', '*'],
        credentials: true,
    },
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

io.sockets.on('connect', (socket) => {
    console.log(`Socket ID: ${socket.id}`);
    // console.log('Number of connected users: ', io.engine.clientsCount);

    socket.on('send_reminder', (data) => {
        console.log('new reminder message', data, 'connected users: ', io.engine.clientsCount);
        socket.broadcast.emit('receive_alert', data);
    })

    socket.on('send_newlist', (data) => {
        console.log('in send new list socket: ', data, 'connected users: ', io.engine.clientsCount);
        socket.broadcast.emit('receive_alert', data);
    })

    socket.on('send_deletelist', (data) => {
        console.log('in delete list socket: ', data, 'connected users: ', io.engine.clientsCount);
        socket.broadcast.emit('receive_alert', data);
    })

    socket.on('send_completed', (data) => {
        console.log('in completed reminder socket: ', data, 'connected users: ', io.engine.clientsCount);
        socket.broadcast.emit('receive_alert', data);
    })

    socket.on('send_incomplete', (data) => {
        console.log('in incomplete reminder socket: ', data, 'connected users: ', io.engine.clientsCount);
        socket.broadcast.emit('receive_alert', data);
    })

    socket.on('send_deletereminder', (data) => {
        console.log('in deleted reminder socket: ', data, 'connected users: ', io.engine.clientsCount);
        socket.broadcast.emit('receive_alert', data);
    })
});

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// })