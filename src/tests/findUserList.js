const should = require('should');
const findUser = require('../findUser.js');

describe('find users', () => {
  it('soma users', () => {
    findUser.somaUser(2, 3).should.be.equal(5);
  });
  it('deve somar dois numeros e retornar 30', () => {
    findUser.somaUser(10, 20).should.be.equal(30);
  });
  it('Passar o nome e deve retornar mensagem de que pessoa não foi encontrada', () => {
    findUser.encontraUser('Priscila').should.be.equal('Usuario não encontrado');
  });
  it('informa que o campo está vazio', () => {
    findUser.encontraUser().should.be.equal('Campo nome está vazio');
  });
  it('informa que a mensagem é invalida', () => {
    findUser.encontraUser(12345).should.be.equal('Tipo invalido');
  });
  it('retornar o nome da lista', () => {
    findUser.encontraUser('Lucia Maria').should.be.equal('Lucia Maria');
  });
});
