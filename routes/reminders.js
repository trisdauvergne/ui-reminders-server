import express from 'express';
import {
    addReminder
} from '../controllers/reminders.js';

const reminderRouter = express.Router();

reminderRouter.post('/:id', addReminder);

export default reminderRouter;