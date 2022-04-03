import express from 'express';
import cors from 'cors';
import listsRoutes from './routes/lists.js';

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/lists', listsRoutes);

app.get(`/test`, (req, res) => {
    res.send({ message: 'Fart'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})