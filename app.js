require('dotenv').config();
const { PORT } = process.env;
const express = require('express');
const path = require('path');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('*** 서버 실행 중 ***');
});

app.get('/', (req, res) => {
  res.json({ '현재 시간 : ': new Date().toLocaleString() });
});

app.get('/api/now', cors(corsOptions), (req, res) => {
  res.json({ now: new Date().toLocaleString() });
});
