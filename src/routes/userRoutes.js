import { Router } from 'express';
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

export default router;
