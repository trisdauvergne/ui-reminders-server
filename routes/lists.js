import express from 'express';
import { test, addListItem } from '../controllers/lists.js';

const listRouter = express.Router();

listRouter.get('/', test);
listRouter.post('/', addListItem);
listRouter.put('/:id');
listRouter.delete('/:id');

export default listRouter;