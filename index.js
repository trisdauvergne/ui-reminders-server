import express from 'express';

const app = express();

const port = process.env.PORT || 3001;

app.get(`/`, (req, res) => {
    res.send({ message: 'Hello from my back end'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})