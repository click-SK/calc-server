import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as MainController from './controllers/MainController.js';

dotenv.config();
const app = express();

const db = 'mongodb+srv://roskichuk:qwerty12345@cluster0.qsctyoj.mongodb.net/?retryWrites=true&w=majority';

mongoose
.connect(db)
.then(() => {
    console.log('DB Start');
})

app.use(cors());
app.use(express.json());

app.post('/create',MainController.create);
app.get('/getall',MainController.getAll);

app.listen(process.env.PORT,() => {
    console.log('Server start', process.env.PORT);
})