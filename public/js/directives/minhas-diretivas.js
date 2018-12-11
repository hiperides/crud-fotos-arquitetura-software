angular.module('minhasDiretivas', [])
.directive('meuPainel',function() {
    var ddo = {};

    ddo.restric = "AE"; // AE = Atributo e Elemento, respectivamente.

    ddo.scope = { //Escopo isolado da diretiva
        titulo: '@' // O @ representa que o dado "Cambachirra"vai ser passado para o @, uma cópia, como uma string.
    };

    ddo.transclude = true; //Pra minha diretiva manter os elementos filho dela na hora que o angular processar o meu html.

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
})
.directive('minhaFoto', function(){
    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;
})
.directive('meuBotaoPerigo', function() {

    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        acao: '&'
    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    return ddo;
})
.directive('meuFocus', function(){

    var ddo = {}

    ddo.restrict = "A";

    ddo.link = function(scope, element) {
        scope.$on('fotoCadastrada', function(){
            element[0].focus();
        });
    }

    return ddo;
})
