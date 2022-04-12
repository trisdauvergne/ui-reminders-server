import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import listsRoutes from './routes/lists.js';
import reminderRoutes from './routes/reminders.js'
import { connectDB } from './config/db.js';

// socket io
import * as http from 'http'; // socket io
import { Server } from 'socket.io'; // socket io

dotenv.config();

const app = express();

connectDB();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/lists', listsRoutes);
app.use('/reminders', reminderRoutes);

// socket io
const server = http.createServer(app); // socket io

export const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    },
}); // socket io

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    console.log(process.NODE_ENV);
}); // socket io

io.on('connection', (socket) => {
    console.log(`Socket ID: ${socket.id}`);

    socket.on('send_reminder', (data) => {
        console.log('new reminder message', data);
        socket.broadcast.emit('receive_reminder', data);
    })

    socket.on('send_newlist', (data) => {
        console.log('new list message', data);
        socket.broadcast.emit('receive_newlist', data);
    })

    socket.on('send_deletelist', (data) => {
        console.log('delete list message', data);
        socket.broadcast.emit('receive_deletelist', data);
    })

    socket.on('send_completed', (data) => {
        console.log('completed reminder message', data);
        socket.broadcast.emit('receive_completed', data);
    })
}) // socket io

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// })