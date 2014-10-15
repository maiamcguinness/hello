/**
 * Module: 'hello'
 * Description: Declaration of the 'hello' module, as well as its routes
 * Dependencies: ui.router
 *
 * @module hello
 */

var hello = angular
    .module('hello', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
    
    /* Begin ui.router */
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        // Home state 
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
            controller: 'MainCtrl'
        })
        
        // About state 
        .state('about', {
            url: '/about',
            templateUrl: 'feature-about/partial-about.html',
            controller: 'AboutCtrl'     
        })
            // About nested view 1 -- people
            .state('about.people', {
                url: '/people',
                templateUrl: 'feature-about/partial-about-people.html',
                controller: 'AboutCtrl'
            })
            // About nested view 2 -- things
            .state('about.things', {
                url: '/things',
                templateUrl: 'feature-about/partial-about-things.html',
                controller: 'AboutCtrl'
            });
        
}); // end 'hello' 

hello.controller('MainCtrl', function ($scope) {
    $scope.msg = 'This is in the MainCtrl controller!';
});
