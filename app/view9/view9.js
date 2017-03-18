angular.module('myApp.view9', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/activ-photo-player', {
            templateUrl: 'view9/view9.html',
            controller: 'photoPlayerController'
        });
}]).controller('photoPlayerController', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
        var images = $scope.images = [];
        var data = $scope.data = [];
        var displayImage = $scope.displayImage = {};
        var imgIndex = $scope.imgIndex = 0;
        var play = $scope.play = false;
        var intervalRef = $scope.intervalRef;
        var speed = $scope.speed = 1500;
        var timeOutCallback = function () {
            imgIndex++;
            if (play == false) {
                return false;
            } else {

                displayImage.imgUrl = data[imgIndex].url;
                displayImage.albumid = data[imgIndex].albumId;
                displayImage.text = data[imgIndex].title;
                console.log(displayImage.imgUrl);
            }
        };
        $http.get('data/load.json').then(function (response) {
                data = response.data;

                for (var i = 0; i < data.length; i++) {
                    images.push({
                        url: data[i].url,
                        id: i,
                        text: data[i].title,
                        albumid: data[i].albumId
                    });
                }

                intervalRef = $interval(timeOutCallback, speed);

            }

        );
        $scope.faster = function () {
            if (angular.isDefined(intervalRef)) {
                $interval.cancel(intervalRef);
            }
            console.log(speed);
            intervalRef = $interval(timeOutCallback, speed -= 100);

        }
        $scope.slower = function () {
            console.log(speed);
            if (angular.isDefined(intervalRef)) {
                $interval.cancel(intervalRef);
            }
            intervalRef = $interval(timeOutCallback, speed += 100);
        }
        $scope.playFunc = function () {
            if (play) {
                play = false;
            } else {
                play = true;
            }
            console.log(play);
        }
}]);