import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js';
import dotenv from 'dotenv';
import userRouter from "./routes/user.js";
const app = express();  
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRouter);
app.use('/user', userRouter);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: https://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


