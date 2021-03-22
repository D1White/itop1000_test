import dotenv from 'dotenv';
dotenv.config();

require('./core/db');

import express from 'express';
import cors from 'cors';
import path from 'path'

import { passport } from './core/passport'

import { authRouter } from './routers/auth.router'
import { usersRouter } from './routers/users.router'
import { profilesRouter } from './routers/profiles.router'

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api/users', usersRouter)

app.use('/api/auth', authRouter)

app.use('/api/profiles', profilesRouter)

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING at http://localhost:${process.env.PORT}`);
});
