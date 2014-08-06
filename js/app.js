

/** Define App, Bootstrap, configuration and Constants **/
var Sample = angular.module('Sample', ['ngResource','ngRoute','ngAnimate','mgcrea.ngStrap', 'ngSanitize']);


/** Config */
Sample.config(function($modalProvider, $popoverProvider, $dropdownProvider, $alertProvider, $tabProvider, $routeProvider) {
    /* Routes */
    
    $routeProvider
         .when('/landing', {
            title: 'Landing',
            controller: 'landingViewCtrl',
            templateUrl: 'views/landingView.html'
        })
        /*
         * Default
         */        
         .otherwise({
            redirectTo: '/landing'
        });
});

