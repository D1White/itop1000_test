import dotenv from 'dotenv';
dotenv.config();

require('./core/db');

import express from 'express';
import cors from 'cors';

import { UserCtrl } from './controllers/user.controller';

import { userValidation } from './validations/user.validation'
import { passport } from './core/passport'

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.get('/users', passport.authenticate('jwt', { session: false }), UserCtrl.index); //+
app.get('/users/me', passport.authenticate('jwt', { session: false }), UserCtrl.me); // delete
app.get('/users/:id', UserCtrl.show); //+
app.post('/auth/register', userValidation, UserCtrl.create);
app.post('/auth/login', passport.authenticate('local'), UserCtrl.afterLogin)
app.patch('/users', userValidation, UserCtrl.update); //+
app.delete('/users/:id', UserCtrl.delete); //+

app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING at http://localhost:${process.env.PORT}`);
});
