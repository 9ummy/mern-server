import express from 'express';
import cors from 'cors';
import * as GameController from '../controllers/game.controller.js';

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
};

const gameRouter = express.Router();
gameRouter.use(cors());
gameRouter.get('/all', cors(corsOptions), GameController.getGames);

export default gameRouter;
