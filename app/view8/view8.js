angular.module('myApp.view8', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/inifinity-scroller', {
            templateUrl: 'view8/view8.html',
            controller: 'scrollerController'
        });
}]).controller('scrollerController', ['$scope', '$http', function ($scope, $http) {
        var images = $scope.images = [];
        var data = $scope.data = [];
        $http.get('data/load.json').then(function (response) {
                data = response.data;

                for (var i = 0; i < 10; i++) {
                    images.push({
                        url: data[i].url,
                        id: i,
                        text: data[i].title,
                        albumid: data[i].albumId
                    });
                }
                
            }

        );
        $scope.loadMore = function () {
            var last = images.length - 1;
            for (var i = 1; i <= 8; i++) {
                images.push({
                    url: data[last + i].url,
                    id: last + i,
                    text: data[last + i].title,
                    albumid: data[last + i].albumId
                });
                
            }
        };
}]);