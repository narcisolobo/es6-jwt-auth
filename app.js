import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import logger from 'morgan';
import cors from 'cors';

app.use(logger('dev'), express.json(), cors());

import connectToDb from './database/config/mongoose-config.js';
connectToDb();

app.get("/", function (req, res) {
  res.send("<h1>Up and running.</h1>");
});

import userRouter from './routes/user-routes.js'
app.use('/api/users', userRouter);

/** catch 404 and forward to error handler */
app.use((req, res, next) => {
  next(createError(404));
});

export default app;
