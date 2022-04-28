import express from 'express';
import cors from 'cors';
import * as UserController from '../controllers/user.controller.js';

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
};

const userRouter = express.Router();
userRouter.use(cors());
userRouter.post('/signup', cors(corsOptions), UserController.signup);

export default userRouter;
