const listaUser = ['Lucia Maria', 'Andre', 'Renan', 'Bruno', 'João'];

const somaUser = (n1, n2) => n1 + n2;

const encontraUser = (nome) => {
  try {
    validacao(nome);
    const userEncontrado = listaUser.find((user) => user === nome);
    return userEncontrado ? userEncontrado : 'Usuario nao encontrado';
  } catch (erro) {
    return erro;
  }
};

const validacao = (nome) => {
  if (!nome) throw 'Campo nome esta vazio';
  if (typeof nome !== 'string') throw 'Tipo invalido';
};

module.exports = {
  somaUser,
  encontraUser,
};
