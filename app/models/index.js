import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserModel from './user.model.js';
import * as autoIncrement from 'mongoose-auto-increment';
import GameModel from './game.model.js';

mongoose.Promise = global.Promise;
autoIncrement.initialize(mongoose.connection);

const db = {
  mongoose: mongoose,
  url: dotenv.MONGO_URI,
  User: new UserModel(mongoose),
  Game: new GameModel(mongoose),
};

export default db;
