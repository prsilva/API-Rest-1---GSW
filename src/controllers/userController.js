const {
  editaUser,
  deletarUser,
  leituraUser,
  criarUser,
} = require('../services/userService.js');

const leituraUser = async function leituraUser(req, res){

  const jogadorResponse = await lerJogador();

  res.status(200).json(jogadorResponse);
};

const criarUser = async function cadastrarUser(req, res){
  let user = await criarUser(req.body);
  user.save((err)) => {
    if (err) {
      res.send(`Erro no cadastro do jogador` Erro:${err.message}`);
    }
    else {
      res.status(201).send( msg: 'Usuario cadastrado com sucesso');
    }
  })
};

const editaUser = (req, res) => {
  const id = req.params.id;

    try {
      atualizaUser(id, req.body);
      res.status(201).send('Atualziado com sucesso!');
    } catch (error) {
      res
      res.send(`Houve um erro na hora de atualizar o jogador! Erro: ${error}`);
    }
  }


/* const leituraUser = (req, res) => {
  user.find({}, (error, usr) => {
    if (error) {
      res.status(500).json(error);
    } else {
      const usuarios = usr.map((u) => {
        const medals = Math.trunc(u.coins / 10);
        const trophies = Math.trunc(medals / 3);
        return { ...u._doc, medals, trophies };
      });
      res.status(200).json({ msg: 'Usuarios encontrados', data: usuarios });
    }
  });
}; */

const deletarUser = (req, res) => {
  const id = req.params.id;

  try {
        deletaUser(id);
        res.status(201).send('Deletado com sucesso!');
    } catch (error) {
        res.send(`Houve um erro na hora de deletar o jogador! Erro: ${error}`);
    }
}

module.exports = {
  editaUser,
  deletarUser,
  leituraUser,
  criarUser
} 