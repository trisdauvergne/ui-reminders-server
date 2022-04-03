import express from 'express';
import { test, addListItem } from '../controllers/lists.js';

const listRouter = express.Router();

listRouter.get('/', test);
listRouter.post('/', addListItem);

export default listRouter;