import mongoose from 'mongoose';
import { ReminderSchema } from './reminder.js';

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    reminders: {
        type: [ReminderSchema],
        required: false
    },
});

export const List = mongoose.model("list", ListSchema);