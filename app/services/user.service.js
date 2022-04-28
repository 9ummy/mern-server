import db from '../models/index.js';
import getDatabase from '../utils/getDatabase.js';

const User = db.User;
const dbo = getDatabase();
dbo.getDb();

export const signup = async (req, res) => {
  try {
    new User(req.body).save();
    console.log('Successfully created new user');
    return res.status(201);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
