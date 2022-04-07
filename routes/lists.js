import express from 'express';
import {
    getLists,
    addListItem,
    deleteListItem,
    getListItem,
    // addReminder
} from '../controllers/lists.js';

const listRouter = express.Router();

listRouter.get('/', getLists);
listRouter.post('/', addListItem);
listRouter.get('/:id', getListItem);
listRouter.delete('/:id', deleteListItem);

export default listRouter;