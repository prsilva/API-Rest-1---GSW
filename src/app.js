import express from 'express';
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
export default app;
