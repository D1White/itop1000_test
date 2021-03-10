import dotenv from 'dotenv';
dotenv.config();

require('./core/db');

import express from 'express';
import cors from 'cors';

import { UserCtrl } from './controllers/user.controller';

import { userValidation } from './validations/user.validation'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/users', UserCtrl.index);
app.get('/users/:id', UserCtrl.show);
app.post('/users', userValidation, UserCtrl.create);
app.patch('/users', userValidation, UserCtrl.update);
app.delete('/users/:id', UserCtrl.delete);

app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING at http://localhost:${process.env.PORT}`);
});
