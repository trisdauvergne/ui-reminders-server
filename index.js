import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import listsRoutes from './routes/lists.js';
import reminderRoutes from './routes/reminders.js'
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

connectDB();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/lists', listsRoutes);
app.use('/reminders', reminderRoutes);

app.get(`/`, (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})