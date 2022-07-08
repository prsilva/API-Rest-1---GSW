var crud = angular.module('crud', []);

crud.controller('controller', function ($scope) {
  $scope.novoCadastro = {};
  $scope.cadastroSelecionado = {};

  $scope.cadastros = [];

  $scope.salvar = function () {
    $scope.cadastros.push($scope.novoCadastro);
    $scope.novoCadastro = {};
  };

  $scope.selecionaCadastro = function (cadastro) {
    $scope.cadastroSelecionado = cadastro;
  };

  $scope.alterarCadastro = function () {};

  $scope.excluirCadastro = function () {
    $scope.cadastros.splice(
      $scope.cadastros.indexOf($scope.cadastroSelecionado),
      1,
    );
  };
});
