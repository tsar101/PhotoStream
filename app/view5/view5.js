angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/roughWork', {
    templateUrl: 'view5/view5.html',
    controller: 'photoplayerController'
  });
}]).controller('photoplayerController',['$scope','$http' ,function($scope, $http ){
    
    $scope.cost=500;
    $scope.products = [{
        name:"Great Product",
        price:"500"
    },{
        name:"Greater Product",
        price:"5000"
    },{
        name:"Greatest Product",
        price:"500000"
    }];
    $scope.tabs=[
        {
            name:"Tab1",
            value:"Tab1's value"
        },
        {
            name:"Tab2",
            value:"Tab2's value"
        },
        {
            name:"Tab3",
            value:"Tab3's value"
        }
    ];
}]);