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
} = require('../controllers/userController.js');

const router = express.Router();

router
  .get('/', leituraUser)
  .post('/', criarUser)
  .put('/:id', editaUser)
  .delete('/:id', deletarUser);

module.exports = router;
