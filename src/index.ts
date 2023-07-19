import express from 'express';

const app = express();
app.use(express.json());

// app.METHOD(PATH, HANDLER)

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3001, () => {
    console.log("Server ready at localhost:3001");
});