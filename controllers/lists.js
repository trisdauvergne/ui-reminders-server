import { List } from '../models/list.js';

export const test = (req, res) => {
    console.log('in lists test function');
    res.send({
        message: 'Lists test function!'
    });
};

export const addListItem = (req, res) => {
    console.log('in controller', req.body);
    const listObjToAdd = new List(req.body);
    listObjToAdd.save(err => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(listObjToAdd)
    })
    // res.send({
    //     message: 'Lists addListItem function!',
    //     itemAdded: listToAdd,
    // });
}

// export default test;