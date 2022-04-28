import db from '../models/index.js';
import getDatabase from '../utils/getDatabase.js';

const Game = db.Game;
const dbo = getDatabase();
dbo.getDb();

export const getGames = async (_req, res) => {
  console.log('game service called');
  try {
    Game.find().exec((_err, games) => {
      res.status(200).send(games);
    });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
