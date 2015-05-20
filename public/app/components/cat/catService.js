angular.module('CatService', []).factory('CatService', ['$http', function ($http) {
    var service = {};

    // find
    service.find = function () {
        return $http
            .get('/api/findCat')
            .then(function (response) {
                return response.data;
            });
    };

    // remove
    service.remove = function (id) {
        return $http
            .get('/api/removeCat/' + id)
            .then(function (response) {
                return response.data;
            });
    };

    // save
    service.save = function (obj) {
        return $http
            .post('/api/saveCat', obj)
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
     return $http.get('/api/findCat');
     },

     // create
     create : function(obj) {
     return $http.post('/api/saveCat', obj);
     },

     // remove
     delete : function(id) {
     return $http.delete('/api/removeCat/' + id);
     }
     }*/

}]);