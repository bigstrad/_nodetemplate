angular.module('DogFindCtrl', [])
    .controller('DogFindController',
    function ($scope, GlobalService, DogService, $modalInstance, p1) {
        $scope.msg = GlobalService.getMessageObject();
        $scope.dataList = [];
        $scope.p1 = p1;

        // modal logic
        $scope.ok = function () {
            //$modalInstance.close($scope.p1);
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        // remove
        $scope.remove = function (id) {
            DogService.remove(id)
                .then(function (data) {
                    $scope.msg = GlobalService
                        .getMessageObject("Success", "success");
                    // re-initialize grid
                    $scope.init();
                }, function (error) {
                    $scope.msg = GlobalService
                        .getMessageObject(error.data.text, error.data.type);
                });
        };

        // init
        $scope.init = function () {
            // find
            DogService.find()
                .then(function (data) {
                    $scope.dataList = data;
                }, function (error) {
                    $scope.msg = GlobalService
                        .getMessageObject(error.data.text, error.data.type);
                });
        };

        // call init
        $scope.init();
    });