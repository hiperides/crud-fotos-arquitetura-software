angular.module('crudFotos').controller('FotosController', function($scope, recursoFoto) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });

   /* $http.get('v1/fotos') 
    .success(function(fotos) { //Se tiver sucesso, ele pula pra outra linha/Quando é usado o success, ja vem pra "fotos" os dados do servidor
            $scope.fotos = fotos;
        })
        .error(function(erro) {
            console.log(erro); //Se a promessa não for cumprida, se der algum tipo de erro, ele dá a causa do pq a promessa não foi cumprida.
        }); */

        $scope.remover = function(foto) { //Especifica a foto que vai remover.
            
            recursoFoto.delete({fotoId : foto._id}, function() {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';

            }, function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
            });

        };
    /*$http.get('v1/fotos'); // Se ele conseguir cumprir sua promessa de jogar o resultado pra promise, então ele vai pro caso de baixo.
    promise.then(function (retorno) { //Função de callback pro promise.then / Daí se ele conseguir cumprir sua promessa, ele dá acesso aos dados que vieram.
        $scope.fotos = retorno.data;
    }).catch(function (error) {
        console.log(error);
    }); //Se a promessa não for cumprida, se der algum tipo de erro, ele dá a causa do pq a promessa não foi cumprida.
    */
}); 