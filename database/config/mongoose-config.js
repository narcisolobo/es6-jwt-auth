import mongoose from 'mongoose';
import { brightYellow, brightMagenta } from '../../functions/chalk-functions.js';

import dotenv from 'dotenv';
dotenv.config();

const DB = 'usersDb';
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;


async function connectToDb() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB}`,
      {
        retryReads: true,
        retryWrites: true,
      }
    );

    brightYellow(`Connected to ${DB}.`);
  } catch (err) {
    brightMagenta(`Error connecting to ${DB}: ${err}`);
  }
}

export default connectToDb;
