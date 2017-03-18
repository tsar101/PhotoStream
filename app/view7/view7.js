angular.module('myApp.view7', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/albumViewer', {
            templateUrl: 'view7/view7.html',
            controller: 'albumController'
        });
}]).controller('albumController', ['$scope', '$http', function ($scope, $http) {
        var scopeProxy = $scope;
        var slides = $scope.slides = [];
        $http.get('data/load.json').then(function (response) {
            scopeProxy.data = response.data;
            var data = response.data;
            for (var i = 0; i < 10; i++) {
                slides.push({
                    image: data[i].url,
                    text: data[i].title,
                    albumid: data[i].albumId,
                    id: i,
                    additionalField: 'New Text'
                });

            }
            //console.log(slides);
        });
        $scope.myInterval = 500;
        $scope.play = function () {
            if (scopeProxy.myInterval != 500) {
                scopeProxy.myInterval = 500;
            } else {
                scopeProxy.myInterval = 0;
            }
        };
        var input = scopeProxy.input = {};
        $scope.changeAlbum = function () {
            //console.log(scopeProxy.input.albumNumber);
            var data = scopeProxy.data;
            //console.log(slides);
            slides.length = 0;
            //console.log(slides);
            for (var i = 0, count = 0; i < data.length; i++) {
                if (data[i].albumId == scopeProxy.input.albumNumber) {
                    console.log(scopeProxy.data[i].albumId);
                    slides.push({
                        image: data[i].url,
                        text: data[i].title,
                        albumid: data[i].albumId,
                        id: count++
                    });
                }
            }

            //console.log(slides);
        };

}]);