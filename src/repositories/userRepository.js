const user = require('../models/user.js');

const leituraUser = async () => {
  return user.find().lean();
};

const deletarUser = async (id) => {
  return user.findByIdAndDelete(id);
};

const editaUser = async (id, content) => {
  return user.findByIdAndUpdate(id, { $set: content });
};

const criarUser = async (body) => {
  const usuario = new user(body);
  return usuario.save()
};

module.exports = {
  editaUser,
  deletarUser,
  leituraUser,
  criarUser,
};
