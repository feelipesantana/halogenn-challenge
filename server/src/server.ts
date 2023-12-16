import express from 'express'
import {appRoutes} from "./http/routes";
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser';


const app = express()

app.use(cors({
  origin: 'https://halogenn-challenge.vercel.app',
  methods: ['GET', 'PUT', 'POST', 'DELETE'] 
}))

app.use(bodyParser.json());
app.use('/', appRoutes);
app.use('/images', express.static(__dirname + '/'));
app.listen(3333, () =>{
  console.log('Servidor rodando na porta 3333');

})  