import express from 'express';
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';

const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);

// app.METHOD(PATH, HANDLER)
app.get('/', (req, res) => {
    res.send('Hello world');
});



app.listen(3001, () => {
    console.log("Server ready at localhost:3001");
});