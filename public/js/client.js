var app = angular.module('olympicApp', ['ngRoute']);
var importData = [];
var random5 = [];
var temp = undefined;

app.controller('OlympicController', function($scope, $http) {
  // var configObject = {
  //     method: 'GET',
  //     url: '/olympics'
  // };

  //  $scope.getTeams = function () {
  //   delete $scope.olympics;
  //   importData = [];
    // $http.get("/olympics/boxing").then(handleSuccess, handleFailure);
    // $http.get("/olympics/judo").then(handleSuccess, handleFailure);
    // $http.get("/olympics/archery").then(handleSuccess, handleFailure);
    // $http.get("/olympics/taekwondo").then(handleSuccess, handleFailure);
    // $http.get("/olympics/kayak").then(handleSuccess, handleFailure);

  // }

    $scope.getBoxing = function() {
        delete $scope.olympics;
        importData = [];
        $http.get("/olympics/boxing").then(handleSuccess, handleFailure);
    }
    $scope.getJudo = function() {
        delete $scope.olympics;
        importData = [];
        $http.get("/olympics/judo").then(handleSuccess, handleFailure);
    }
    $scope.getArchery = function() {
        delete $scope.olympics;
        importData = [];
        $http.get("/olympics/archery").then(handleSuccess, handleFailure);
    }
    $scope.getTaekwondo = function() {
        delete $scope.olympics;
        importData = [];
        $http.get("/olympics/taekwondo").then(handleSuccess, handleFailure);
    }
    $scope.getKayak = function() {
        delete $scope.olympics;
        importData = [];
        $http.get("/olympics/kayak").then(handleSuccess, handleFailure);
    }

  function handleSuccess(response) {
    // console.log(response);
    importData.push(response.data);
      console.log(importData);
    $scope.randomAthlete();
    // console.log(response.data);
    // $scope.olympics = response.data;

  }

  function handleFailure(response) {
    // console.log('Failure', response);
  }

$scope.randomAthlete = function() {
    // $scope.olympics = importData[randomIndex];
    $scope.olympics = importData;
}

});

angular.module('olympicApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/boxing', {
    templateUrl: 'views/boxing.html',
    controller: 'BoxingController'
  })
  .when('/judo', {
    templateUrl: 'views/judo.html',
    controller: 'JudoController'
  })
  .when('/kayak', {
    templateUrl: 'views/kayak.html',
    controller: 'KayakController'
  })
  .when('/taekwondo', {
    templateUrl: 'views/taekwondo.html',
    controller: 'TaekwondoController'
  })
  .when('/archery', {
    templateUrl: 'views/archery.html',
    controller: 'ArcheryController'
  })

  $locationProvider.html5Mode(true);
})

angular.module('olympicApp').controller('BoxingController', function($scope){

});
angular.module('olympicApp').controller('JudoController', function($scope){

});
angular.module('olympicApp').controller('KayakController', function($scope){

});
angular.module('olympicApp').controller('TaekwondoController', function($scope){

});
angular.module('olympicApp').controller('ArcheryController', function($scope){

});
