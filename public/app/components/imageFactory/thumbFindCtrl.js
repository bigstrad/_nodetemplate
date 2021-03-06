angular.module('ThumbFindCtrl', [])
    .controller('ThumbFindController',
    function ($scope, GlobalService, $modalInstance, p1) {
        $scope.msg = GlobalService.getMessageObject();
        $scope.p1 = p1;

        // modal logic
        $scope.ok = function () {
            $modalInstance.close($scope.p1);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        // init
        $scope.init = function () {
        };

        // call init
        $scope.init();
    });