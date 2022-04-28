import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserModel from './user.model.js';

mongoose.Promise = global.Promise;

const db = {
  mongoose: mongoose,
  url: dotenv.MONGO_URI,
  User: new UserModel(mongoose),
};

export default db;
