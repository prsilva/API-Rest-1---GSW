const user = require('../models/user.js');

const lerJogador = async () => {
  return user.find().lean();
};

const deletaJogador = async (id) => {
  return user.findByIdAndDelete(id);
};

const editaJogador = async (id, content) => {
  return user.findByIdAndUpdate(id, { $set: content });
};

const criarJogador = async (body) => {
  const usuario = new user(body);
  return usuario.save();
};

module.exports = {
  editaJogador,
  deletaJogador,
  lerJogador,
  criarJogador,
};
