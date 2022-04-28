import express from 'express';
import cors from 'cors';

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
};

const userRouter = express.Router();
userRouter.get('/now', cors(corsOptions), (_req, res) => {
  res.json({ now: new Date().toLocaleString() });
});

export default userRouter;
