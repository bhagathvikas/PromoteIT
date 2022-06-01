import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit:"30mb",extend:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extend:"true"}));
app.use(cors());

const CONNECTION_URL = 'MONGO URL';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT,()=> console.log("server running")))
.catch((error)=> console.log("error"));

mongoose.set('useFindAndModify',false);




