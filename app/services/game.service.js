import db from '../models/index.js';
import getDatabase from '../utils/getDatabase.js';

const Game = db.Game;
const dbo = getDatabase();
dbo.getDb();

export const getGames = async (_req, res) => {
  console.log('getGames called in GameService');
  try {
    Game.find().exec((_err, games) => {
      res.status(200).send(games);
    });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const getGame = async (req, res) => {
  console.log('getGame called in GameService');
  try {
    Game.find({ id: req.params.id }).exec((_err, game) =>
      res.status(200).send(game)
    );
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const updateGame = async (req, res) => {
  console.log('updateGame called in GameService');
  try {
    Game.findOneAndUpdate(
      { id: req.params.id },
      {
        rank: req.body.rank,
        name: req.body.name,
        allTimePeak: req.body.allTimePeak,
      }
    ).exec((_err, game) => res.status(200).send(game));
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
