var crud = angular.module('crud', []);

crud.controller('controller', function ($scope, $http) {
  $scope.novoCadastro = {};
  $scope.cadastroSelecionado = '';
  $scope.cadastros = [];

  function carregaJogador() {
    $http({
      url: 'http://localhost:3000/visualizar',
      method: 'GET',
    }).then((res) => {
      $scope.cadastros = res.data;
    });
  }

  $scope.salvar = function (jogadorNovo) {
    $http.post('http://localhost:3000/criar', jogadorNovo).then(() => {
      delete $scope.novoCadastro;
      $scope.message = 'concluido';
      carregaJogador();
    });
  };

  $scope.selecionaCadastro = function (cadastro) {
    $scope.cadastroSelecionado = cadastro;
  };

  $scope.alterarCadastro = function (atualizado) {
    $http
      .put(
        'http://localhost:3000/' + $scope.cadastroSelecionado._id,
        atualizado,
      )
      .then(() => {
        delete $scope.cadastros;
        document.location.reload(true);
      });
  };

  $scope.excluirCadastro = function () {
    var deletingUser = $scope.cadastroSelecionado._id;
    $http
      .delete('http://localhost:3000/' + $scope.cadastroSelecionado._id)
      .then(() => {
        $scope.cadastros = $scope.cadastros.filter(function (cadastro) {
          if (cadastro._id !== deletingUser) return cadastro;
        });
      });
  };

  carregaJogador();
});
