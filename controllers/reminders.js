import { List } from '../models/list.js';

export const addReminder = (req, res) => {
    const reminderToAdd = req.body;
    const id = req.params.id;
    List.findOneAndUpdate(
        { id },
        { $push: { reminders: reminderToAdd } },
        (err) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(reminderToAdd);
        }
    )
};

export const deleteReminder = (req, res) => {
    const listId = req.body.listId;
    const reminderId = req.params.id;
    List.findOneAndUpdate(
        { id: listId },
        { $pull: { reminders : { id: reminderId } } },
        (err) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(reminderId);
        }
    )
};