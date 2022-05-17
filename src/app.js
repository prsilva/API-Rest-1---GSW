/* import express from 'express';
import db from './config/dbConnect.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use('/', userRoutes);

const criacao = [
  { id: 1, nome: 'Renan' },
  { id: 2, coins: '2' },
];

function buscaUsuario(id) {
  return usuario.findIndex((cadastro) => cadastro.id == id);
}
export default app; */

const express = require('express');
const db = require('./dbConnect.js');
const jogadores = require('./models/user.js');
const routes = require('./routes/indexRouter.js');

db.on(
  'error',
  console.log.bind(console, 'Não foi possivel conectar com o banco'),
);
db.once('open', () => {
  console.log('Conectado!');
});

const app = express();
app.use(express.json());

routes(app);

module.exports = app;
