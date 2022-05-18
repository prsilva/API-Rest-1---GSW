const {
  editaUser,
  deletarUser,
  leituraUser,
  criarUser,
} = require('../services/userService.js');

const leituraUser = async function leituraUser(req, res) {
  const userResponse = await lerUsuario();

  res.status(200).json(userResponse);

  /*/ const userResponse = await userFind();
    // const userResponseCloned = JSON.parse(JSON.stringify(userResponse));
    // userResponseCloned.forEach(user => {
    //     const moedas = user.coins;
    //     let medalhas = parseInt(moedas / 10);
    //     let trofeus = parseInt(medalhas / 3);

    //     user.medals = medalhas;
    //     user.trophies = trofeus;
    // })
    // res.status(200).json(userResponseCloned);*/
};

const criarUser = async function userCadastro(req, res) {
  let user = await criarUser(req.body);
  user.save((err) => {
    if (err) {
      res.send(`Usuario não cadastrado Erro:${err.message}`);
    } else {
      res.status(201).send('Usuario cadastrado com sucesso!');
    }
  });
};

const editaUser = (req, res) => {
  const id = req.params.id;

  try {
    editaUser(id, req.body);
    res.status(201).send('Atualizado!');
  } catch (error) {
    res.send(`Usuario não atualizado Erro: ${error}`);
  }
};

const deletarUser = (req, res) => {
  const id = req.params.id;

  try {
    deletarUser(id);
    res.status(201).send('Exclusão do usuario feita com sucesso');
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
