import * as GameService from '../services/game.service.js';

export const getGames = async (req, res) => {
  console.log('getGames called in GameController');
  try {
    return GameService.getGames(req, res);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

export const getGame = async (req, res) => {
  console.log('getGame called in GameController');
  try {
    return GameService.getGame(req, res);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

export const updateGame = async (req, res) => {
  console.log('updateGame called in GameController');
  try {
    return GameService.updateGame(req, res);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
