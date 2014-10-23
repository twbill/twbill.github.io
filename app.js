
var app = angular.module("app", [
  "ngRoute"
]);

//http://stackoverflow.com/questions/16310298/if-a-ngsrc-path-resolves-to-a-404-is-there-a-way-to-fallback-to-a-default
app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {

      scope.$watch(function() {
          return attrs['ngSrc'];
        }, function (value) {
          if (!value) {
            element.attr('src', attrs.errSrc);  
          }
      });

      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  }
});

app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider){
    $routeProvider.
      when('/politician',{
      templateUrl: 'partials/politician.html',
      controller: 'PoliticianCtrl'
    }).
      otherwise({
      redirectTo:'/',
      templateUrl: 'partials/index.html',
      controller: 'IndexCtrl'
    });

    //$locationProvider.html5Mode(true);

  }
]);

app.factory('DataService', function (){
  
  var DataService = {};
  DataService.getPreferences = function (){
    return 1;
  };


  return DataService;
})
app.controller('NavCtrl', ['$scope', '$location', function ($scope, $location){
   $scope.go = function(path){
      $location.path(path);
   };
}]);
app.controller('IndexCtrl', ['$scope', 'DataService', '$location', function ($scope, DataService, $location){
  $scope.politians = [
      {
        "name": "田秋堇",
        "party": "民主進步黨",
        "party_eng": "DPP",
        "position" : "against"
      },
      {
        "name": "尤美女",
        "party": "民主進步黨",
        "party_eng": "DPP",
        "position" : "against"
      },
      {
        "name": "費鴻泰",
        "party": "中國國民黨",
        "party_eng": "KMT",
        "position" : "for"
      },
      {
        "name": "王育敏",
        "party": "中國國民黨",
        "party_eng": "KMT",
        "position" : "for"
      },
      {
        "name": "行政院",
        "party": "政府部門",
        "party_eng": "GOV",
        "position" : "for"
      },
      {
        "name": "司法院",
        "party": "政府部門",
        "party_eng": "GOV",
        "position" : "against"
      },
      {
        "name": "法務部",
        "party": "政府部門",
        "party_eng": "GOV",
        "position" : "for"
      },
      {
        "name": "衛福部",
        "party": "政府部門",
        "party_eng": "GOV",
        "position" : "for"
      }
  ]
  
   $scope.go = function(path){
      $location.path(path);
   };
}]);
app.controller('PoliticianCtrl', ['$scope', 'DataService', function ($scope, DataService){
  $scope.politians = [
      {
        "name": "田秋堇",
        "party": "民主進步黨",
        "party_eng": "DPP",
        "position" : "against"
      },
      {
        "name": "尤美女",
        "party": "民主進步黨",
        "party_eng": "DPP",
        "position" : "against"
      },
      {
        "name": "費鴻泰",
        "party": "中國國民黨",
        "party_eng": "KMT",
        "position" : "for"
      },
      {
        "name": "王育敏",
        "party": "中國國民黨",
        "party_eng": "KMT",
        "position" : "for"
      },
      {
        "name": "行政院",
        "party": "政府部門",
        "party_eng": "GOV",
        "position" : "for"
      },
      {
        "name": "司法院",
        "party": "政府部門",
        "party_eng": "GOV",
        "position" : "against"
      },
      {
        "name": "法務部",
        "party": "政府部門",
        "party_eng": "GOV",
        "position" : "for"
      },
      {
        "name": "衛福部",
        "party": "政府部門",
        "party_eng": "GOV",
        "position" : "for"
      }
  ]
   $scope.n =
     {
        "name": "田秋堇",
        "party": "民主進步黨",
        "party_eng": "DPP",
        "position" : "against"
      };
   
}]);



