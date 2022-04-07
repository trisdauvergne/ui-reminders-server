import express from 'express';
import {
    addReminder,
    deleteReminder
} from '../controllers/reminders.js';

const reminderRouter = express.Router();

reminderRouter.post('/:id', addReminder);
reminderRouter.post('/delete/:id', deleteReminder);

export default reminderRouter;