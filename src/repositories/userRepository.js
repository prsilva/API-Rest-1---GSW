const jogadores = require('../models/user.js');

const userFind = async () => {
  return jogadores.find().lean();
};

const userDelete = async (id) => {
  return jogadores.findByIdAndDelete(id);
};

const userUpdate = async (id, content) => {
  return jogadores.findByIdAndUpdate(id, { $set: content });
};

const userCreate = async (body) => {
  return new jogadores(body);
};

module.exports = {
  editaUser,
  deletarUser,
  leituraUser,
  criarUser,
};
