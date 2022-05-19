const {
  editaUser,
  deletarUser,
  leituraUser,
  criarUser,
} = require('../services/userService.js');

const leituraUser = async function leituraUser(req, res) {
  const userResponse = await lerUsuario();

  res.status(200).json(userResponse);
};

const criarUser = async function userCadastro(req, res) {
  try {
    const dadoJogador = req.body
    await criarUser(dadoJogador);
    res.status(201).send('Usuario cadastrado com sucesso!');
  } catch (error) {
    res.send(`Usuario não cadastrado Erro:${error.message}`);
  }
};

const editaUser = (req, res) => {
  const id = req.params.id;
  const dadoJogador = req.body
  try {
    editaUser(id, dadoJogador);
    res.status(200).send('Atualizado!');
  } catch (error) {
    res.send(`Usuario não atualizado Erro: ${error}`);
  }
};

const deletarUser = (req, res) => {
  const id = req.params.id;

  try {
    deletarUser(id);
    res.status(200).send('Exclusão do usuario feita com sucesso');
  } catch (error) {
    res.send(`Não foi possivel excluir este usuario Erro: ${error}`);
  }
};

module.exports = {
  editaUser,
  deletarUser,
  leituraUser,
  criarUser,
};
