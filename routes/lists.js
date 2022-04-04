import express from 'express';
import { getLists, addListItem } from '../controllers/lists.js';

const listRouter = express.Router();

listRouter.get('/', getLists);
listRouter.post('/', addListItem);
// listRouter.put('/:id');
// listRouter.delete('/:id');

export default listRouter;