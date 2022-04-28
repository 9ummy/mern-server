import * as GameService from '../services/game.service.js';

export const getGames = async (req, res) => {
  console.log('game controller called');
  try {
    return GameService.getGames(req, res);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
