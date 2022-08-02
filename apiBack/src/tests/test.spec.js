const repository = require('../repositories/userRepository.js');
const services = require('../services/userService');

var chai = require('chai');

const expect = chai.expect;
sinon = require('sinon');

describe('User teste services e repositories', async () => {
  const sandbox = sinon.createSandbox({});

  console.log('sandbox');

  afterEach(() => {
    sandbox.restore();
  });

  it('should return an empty array if the I dont have any data saved on database', async () => {
    //ARRANGE
    sandbox.stub(repository, 'userFind').resolves([]);

    //ACT
    const response = await services.leituraUser();

    //ASSERT
    expect(response).to.be.deep.equal([]);
  });

  it('should calculate the right quantity of medals and trophies when the userFind is called', async () => {
    //ARRANGE
    const findUserStub = sandbox.stub(repository, 'userFind').resolves([
      {
        _id: '1',
        name: 'Bruno',
        coins: 60,
      },
    ]);

    //ACT
    const response = await services.leituraUser();

    //ASSERT
    expect(response).to.be.deep.equal([
      {
        _id: '1',
        name: 'Bruno',
        coins: 60,
        medals: 6,
        trophies: 2,
      },
    ]);
  });

  it('should have 2 values when userFind is called', async () => {
    //ARRANGE
    const findUserStub = sandbox.stub(repository, 'userFind').resolves([
      {
        _id: '1',
        name: 'Bruno',
        coins: 60,
      },
      {
        _id: '2',
        name: 'Renan',
        coins: 35,
      },
    ]);

    //ACT
    const response = await services.leituraUser();

    //ASSERT
    expect(response).to.be.deep.equal([
      {
        _id: '1',
        name: 'Bruno',
        coins: 60,
        medals: 6,
        trophies: 2,
      },
      {
        _id: '2',
        name: 'Renan',
        coins: 35,
        medals: 3,
        trophies: 1,
      },
    ]);
  });

  it('should confirm if the method jogadorCreate is called', async () => {
    //ARRANGE
    const stubCreate = sandbox.stub(repository, 'criarUser').resolves([
      {
        _id: '3',
        name: 'Priscila',
        coins: 30,
      },
    ]);

    //ACT
    const response = await services.criarUser();

    //ASSERT
    sinon.assert.calledOnce(stubCreate);
    expect(response).to.be.deep.equal([
      {
        _id: '3',
        name: 'Priscila',
        coins: 30,
      },
    ]);
  });

  it('should confirm if the method editaUser is called', async () => {
    //ARRANGE
    const stubUpdate = sandbox.stub(repository, 'editaUser');

    //ACT
    await services.editaUser();

    //ASSERT
    sinon.assert.calledOnce(stubUpdate);
  });

  it('should confirm if the method deletarUser is called', async () => {
    //ARRANGE
    const stubDelete = sandbox.stub(repository, 'deletarUser');

    //ACT
    await services.deletarUser();

    //ASSERT
    sinon.assert.calledOnce(stubDelete);
  });
});
