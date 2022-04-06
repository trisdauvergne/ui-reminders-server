import express from 'express';
import {
    getLists,
    addListItem,
    deleteListItem,
    // addReminder
} from '../controllers/lists.js';

const listRouter = express.Router();

listRouter.get('/', getLists);
listRouter.post('/', addListItem);
// listRouter.post('/:id', addReminder);
listRouter.delete('/:id', deleteListItem);
// listRouter.put('/:id');

export default listRouter;