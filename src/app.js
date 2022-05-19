const express = require('express');
const db = require('./config/dbConnect.js');
const routes = require('./routes/indexRouter.js');

db.on(
  'error',
  console.log('Não foi possivel conectar com o banco')
);
db.once('open', () => {
  console.log('Conectado!');
});

const app = express();
app.use(express.json());

routes(app);

module.exports = app;
