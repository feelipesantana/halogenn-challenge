import express from 'express'
import {appRoutes} from "./http/routes";
import cors from 'cors'
import path from 'path'


const app = express()

app.use(cors({
  origin: 'http://127.0.0.1:3000',
  methods: ['GET', 'PUT', 'POST', 'DELETE'] 
}))
app.use('/', appRoutes);
app.use('/images', express.static(__dirname + '/images'));


app.listen(3333, () =>{
  console.log('Servidor rodando na porta 3333');

})