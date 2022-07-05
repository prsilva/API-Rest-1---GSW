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
