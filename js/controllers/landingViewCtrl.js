
/*****************************************************************
 Landing View Controller
****************************************************************/

angular.module('Sample').controller('landingViewCtrl', function ($scope,  Constants) {

  var init = function () {
    console.log('init ...');
  };

  $scope.$on(Constants.readySignal, function () { 
		init(); 
  });
  $scope.$on('$routeChangeSuccess', function () { init(); });

});

