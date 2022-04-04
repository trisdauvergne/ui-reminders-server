import { List } from '../models/list.js';

export const getLists = (req, res) => {
    List.find((err, list) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(list);
    })
};

export const addListItem = (req, res) => {
    console.log('in controller', req.body);
    const listObjToAdd = new List(req.body);
    listObjToAdd.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(listObjToAdd)
    })
};