/*import { Router } from 'express';
import {
  criarUser,
  deletarUser,
  editaUser,
  leituraUser,
} from '../controllers/userController.js';

const router = Router();
router.post('/', criarUser);
router.get('/', leituraUser);
router.put('/:id', editaUser);
router.delete('/:id', deletarUser);

export default router;*/

const express = require('express');
const {
  editaUser,
  deletarUser,
  leituraUser,
  criarUser,
} = require('../controllers/jogadorController.js');

const router = express.Router();

router
  .get('/jogadores', leituraUser)
  .post('/jogadores', criarUser)
  .put('/jogadores/:id', editaUser)
  .delete('/jogadores/:id', deletarUser);

module.exports = router;
