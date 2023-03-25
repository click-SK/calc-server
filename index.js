import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as MainController from './controllers/MainController.js';

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

app.listen(4444,() => {
    console.log('Server start');
})