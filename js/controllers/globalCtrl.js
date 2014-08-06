
/*****************************************************************
                      Global Controller 
 ****************************************************************/

angular.module('Sample')
  .controller('globalCtrl', function ($scope, $rootScope ) {

  	console.log("start global controller..."); 
  	$rootScope.loaded = true;



  });
