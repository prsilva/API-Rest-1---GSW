const repository = require('../repositories/userRepository.js');

const leituraUser = async () => {
  const userResponse = await repository.lerJogador();
  const resposta = userResponse.map(calculateMedalsAndTrophies);

  return resposta;
};

const deletarUser = async (id) => {
  return repository.deletaJogador(id);
};

const editaUser = async (id, content) => {
  return repository.editaJogador(id, content);
};

const criarUser = async (body) => {
  return repository.criarJogador(body);
};

//funções de regras de negócios
const calculateMedalsAndTrophies = (user) => {
  const { coins } = user;
  const medals = parseInt(coins / 10);
  const trophies = parseInt(medals / 3);
  return {
    ...user,
    medals,
    trophies,
  };
};

module.exports = {
  editaUser,
  deletarUser,
  leituraUser,
  criarUser,
};
