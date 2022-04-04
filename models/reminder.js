import mongoose from 'mongoose';

export const ReminderSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    // id: {
    //     type: String,
    //     required: true
    // }
});

export const Reminder = mongoose.model("reminder", ReminderSchema);