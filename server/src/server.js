import dotenv from 'dotenv';
dotenv.config();

require('./core/db');

import express from 'express';
import cors from 'cors';
import path from 'path'

import { UserCtrl } from './controllers/user.controller';
import { ProfileCtrl } from './controllers/profile.controller';

import { createUserValidation, updateUserValidation } from './validations/user.validation'
import { profileValidation } from './validations/profile.validation';
import { passport } from './core/passport'

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/users', passport.authenticate('jwt', { session: false }), UserCtrl.index);
app.get('/api/users/me', passport.authenticate('jwt', { session: false }), UserCtrl.me);
app.get('/api/users/:id', passport.authenticate('jwt', { session: false }), UserCtrl.show);
app.patch('/api/users/:id', updateUserValidation, passport.authenticate('jwt', { session: false }), UserCtrl.update);
app.delete('/api/users/:id', passport.authenticate('jwt', { session: false }), UserCtrl.delete);

app.post('/api/auth/register', createUserValidation, UserCtrl.create);
app.post('/api/auth/login', passport.authenticate('local'), UserCtrl.afterLogin);

app.get('/api/profiles', ProfileCtrl.index); // remove
app.get('/api/profiles/statistic', passport.authenticate('jwt', { session: false }), ProfileCtrl.statistic);
app.get('/api/profiles/:id', passport.authenticate('jwt', { session: false }), ProfileCtrl.show);
app.post('/api/profiles', passport.authenticate('jwt', { session: false }), profileValidation, ProfileCtrl.create);
app.patch('/api/profiles/:id', passport.authenticate('jwt', { session: false }), profileValidation, ProfileCtrl.update);
app.delete('/api/profiles/:id', passport.authenticate('jwt', { session: false }), ProfileCtrl.delete);

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING at http://localhost:${process.env.PORT}`);
});
