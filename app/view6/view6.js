angular.module('myApp.view6', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/airtelProblem', {
    templateUrl: 'view6/view6.html',
    controller: 'photoPlayerController'
  });
}]).controller('photoPlayerController',['$scope','$http',function($scope,$http){
    var scopeProxy = $scope ;
    var slides = $scope.slides = [];
    $http.get('data/load.json').then(function(response) {
          scopeProxy.data = response.data;
          var data = response.data;
          for (var i = 0; i < 10 ; i++) {
                slides.push({
                        image: data[i].url,
                        text: data[i].title,
                        albumId: data[i].albumId,
                        id: i
                });        
          }
          });
    $scope.myInterval=500;
    $scope.play=function (){
      if(scopeProxy.myInterval!=500)
          {
              scopeProxy.myInterval=500;
          }
        else{
            scopeProxy.myInterval=0;
        }
    };
   
    
}]);