import express from 'express';
import {
    addReminder,
    deleteReminder,
    changeReminderCompleted
} from '../controllers/reminders.js';

const reminderRouter = express.Router();

reminderRouter.post('/:id', addReminder);
reminderRouter.post('/delete/:id', deleteReminder);
reminderRouter.post('/completed/:id', changeReminderCompleted);

export default reminderRouter;