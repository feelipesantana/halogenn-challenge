import express from 'express'
import {appRoutes} from "./http/routes";
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser';

type Origin = string | undefined;

const app = express()

const allowedOrigins = ['http://127.0.0.1:3000', 'https://halogenn-challenge.vercel.app/'];
app.use(cors({
  origin: function (origin:string | undefined , callback) {
    if(origin){
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
    
  },
  methods: ['GET'] 
}))

app.use(bodyParser.json());
app.use('/', appRoutes);
app.use('/images', express.static(__dirname + '/'));
app.listen(3333, () =>{
  console.log('Servidor rodando na porta 3333');

})  