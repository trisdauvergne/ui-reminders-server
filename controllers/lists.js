import { List } from '../models/list.js';

export const getLists = (req, res) => {
    List.find((err, list) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(list);
    })
};

export const getListItem = (req, res) => {
    const listId = req.params.id;
    List.find({ id: listId }, (err, list) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(list);
    })
};

export const addListItem = (req, res) => {
    const listObjToAdd = new List(req.body);
    listObjToAdd.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(listObjToAdd)
    })
};

export const deleteListItem = (req, res) => {
    const id = req.params.id;
    List.findOneAndDelete({ id }, (err) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.sendStatus(200);
        }
    })
};

// export const addReminder = (req, res) => {
//     const id = req.params.id;
//     const reminderToAdd = req.body;
//     List.findOneAndUpdate(
//         { id },
//         { $push: { reminders: reminderToAdd } },
//         (err) => {
//             if (err) return res.status(500).send(err);
//             return res.status(200).send(reminderToAdd);
//         }
//     )
// }