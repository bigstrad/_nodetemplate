// Angular routes

angular.module('Routes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'app/components/home/homeView.html',
            controller: 'HomeController'
        })

        // cat page
        .when('/cat', {
            templateUrl: 'app/components/cat/catView.html',
            controller: 'CatController'
        })

        /*// cat list page
        .when('/catFind', {
            templateUrl: 'app/components/cat/catFindView.html',
            controller: 'CatFindController'
        })*/

        // dog page
        .when('/dog', {
            templateUrl: 'app/components/dog/dogView.html',
            controller: 'DogController'
        })

        /*// dog list page
        .when('/dogFind', {
            templateUrl: 'app/components/dog/dogFindView.html',
            controller: 'DogFindController'
        })*/

//        // otherwise
//        .otherwise({
//			redirectTo: '/'
//            redirectTo: '/view/404'
//        });

    $locationProvider.html5Mode(true);

}]);
