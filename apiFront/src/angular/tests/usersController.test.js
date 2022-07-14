require('angular');
require('angular-mocks');
require('../app.js');

describe('Users Controller', function () {
  beforeEach(function () {
    angular.mock.module('crud');
  });

  const fakePromise = () => new Promise((resolve) => resolve);

  const _usersAPI = {
    carregaJogador: fakePromise,
    createPlayer: fakePromise,
  };

  let controller;
  let rootScope;
  let httpBackend;

  beforeEach(inject(($controller, $rootScope, $httpBackend) => {
    rootScope = $rootScope;
    controller = $controller;
    httpBackend = $httpBackend;
  }));

  describe('Controller', function () {
    it('se esta passando ou nao', function () {
      const vm = newControllerInstance();

      expect(vm.cadastros).toEqual([]);
    });
    it('se esta diferente', async function () {
      const vm = newControllerInstance();
      httpBackend.whenGET('http://localhost:3000/visualizar').respond(200, [
        {
          name: 'Priscila',
          coins: 10,
        },
      ]);
      httpBackend.flush();
      expect(vm.cadastros).toEqual([
        {
          name: 'Priscila',
          coins: 10,
        },
      ]);
    });
    it('se esta criando', function () {
      const vm = newControllerInstance();
      vm.selecionaCadastro({ name: 'lucas', coins: 4 });
      expect(vm.cadastroSelecionado).toEqual({ name: 'lucas', coins: 4 });
    });
  });

  function newControllerInstance() {
    const scope = rootScope.$new();
    controller('controller', {
      $scope: scope,
    });

    return scope;
  }
});
