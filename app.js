import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import db from './app/models/index.js';
import * as getResponse from './app/utils/getResponse.js';
import applyDotenv from './app/utils/applyDotenv.js';
import applyPassport from './app/utils/applyPassport.js';
import apiRouter from './app/routes/api.route.js';
import userRouter from './app/routes/user.route.js';

async function startServer() {
  const app = express();
  const { mongoUri, port, jwtSecret } = applyDotenv(dotenv);
  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  const _passport = applyPassport(passport, jwtSecret);
  app.use(_passport.initialize());

  app.use(function (_req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.use('/api', apiRouter);
  app.use('/user', userRouter);

  app.use(morgan('dev'));
  db.mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to MongoDB');
    })
    .catch((err) => {
      console.log('Failed to connect to MongoDB', err);
      process.exit();
    });

  app.all('*', function (_req, res) {
    return getResponse.notFoundResponse(res, 'Page not found');
  });

  app.use((err, _req, res) => {
    if (err.name == 'UnauthorizedError') {
      return getResponse.unauthorizedResponse(res, err.message);
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
