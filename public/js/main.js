angular.module('crudFotos', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos']) //crudFotos depende de minhasDiretivas
.config(function($routeProvider, $locationProvider){ //LocationProvider = eliminar a " # "

    $locationProvider.html5Mode(true); // Ativar o módulo HTML5

    $routeProvider.when('/fotos',{
        templateUrl: 'partials/principal.html', //Qual template vai ser carregado.
        controller: 'FotosController' //Qual é o seu controlador que eu quero que seja associado com essa parcial(No caso é /fotos).

    });

    $routeProvider.when('/fotos/new',{
        templateUrl: 'partials/foto.html', //Qual template vai ser carregado.
        controller: 'FotoController'
    });

     $routeProvider.when('/fotos/edit/:fotoId',{ //O angular consegue identificar o Id do Objeto.
        templateUrl: 'partials/foto.html', //Qual template vai ser carregado.
        controller: 'FotoController'
    });

    $routeProvider.otherwise({ redirectTo : '/fotos'});
});