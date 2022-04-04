import mongoose from 'mongoose';

export const ReminderSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
});

export const Reminder = mongoose.model("reminder", ReminderSchema);