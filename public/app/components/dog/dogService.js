angular.module('DogService', []).factory('DogService', ['$http', function ($http) {
    var service = {};

    // find
    service.find = function () {
        return $http
            .get('/api/findDog')
            .then(function (response) {
                return response.data;
            });
    };

    // remove
    service.remove = function (id) {
        return $http
            .get('/api/removeDog/' + id)
            .then(function (response) {
                return response.data;
            });
    };

    // save
    service.save = function (obj) {
        return $http
            .post('/api/saveDog', obj)
            .then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
    };

    return service;

    /*return {
     // find
     get : function() {
     return $http.get('/api/findDog');
     },

     // create
     create : function(obj) {
     return $http.post('/api/saveDog', obj);
     },

     // remove
     delete : function(id) {
     return $http.delete('/api/removeDog/' + id);
     }
     }*/

}]);