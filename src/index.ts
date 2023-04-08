import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv'

import mongoose from 'mongoose';
import router from './router';

const app = express();

dotenv.config();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


const server = http.createServer(app);

server.listen(9000, () => {
  console.log('Server running on http://localhost:9000/');
});





mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());

app.get('/', (req, res) => {
  res.send('Working')
})

