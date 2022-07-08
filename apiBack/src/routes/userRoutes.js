const express = require('express');
const {
  atualizaUser,
  deletaUser,
  lerUser,
  criaUser,
} = require('../controllers/userController.js');

const router = express.Router();

router
  .get('/visualizar', lerUser)
  .post('/criar', criaUser)
  .put('/:id', atualizaUser)
  .delete('/:id', deletaUser);

module.exports = router;
