import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ReminderSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    },
    notes: {
        type: Array,
        required: false
    },
    id: {
        type: String,
        required: true
    }
});

export const Reminder = mongoose.model("reminder", ReminderSchema);