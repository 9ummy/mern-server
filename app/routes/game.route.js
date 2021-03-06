import express from 'express';
import cors from 'cors';
import * as GameController from '../controllers/game.controller.js';

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
};

const gameRouter = express.Router();
gameRouter.use(cors());
gameRouter.post('/new', cors(corsOptions), GameController.createGame);
gameRouter.get('/all', cors(corsOptions), GameController.getGames);
gameRouter.get('/:id', cors(corsOptions), GameController.getGame);
gameRouter.put('/:id', cors(corsOptions), GameController.updateGame);
gameRouter.delete('/:id', cors(corsOptions), GameController.deleteGame);

export default gameRouter;
