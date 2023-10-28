// @ts-check
import express, {json} from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routes/index.js';
import {DBClass} from './config/class/dbdriver/index.js';
const app = express();
require('dotenv').config();

app.use(cors());
app.use(json());
app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  new DBClass();
  console.log(`App listening at port ${PORT}`);
});
