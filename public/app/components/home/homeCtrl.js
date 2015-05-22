angular.module('HomeCtrl', [])
    .controller('HomeController', function ($scope, GlobalService, $modal) {
        $scope.tagline = 'Home, sweet home!';

        /*
         * Contact Form
         */
        $scope.contactStatus = "";
        $scope.user = {};
        $scope.userDefault = {};

        $scope.submitContact = function(form) {
            $scope.contactStatus = GlobalService //success, info, warning, danger (also error)
                .getMessageObject("Sending...", "info");
            var message = "<h3>Name</h3>" + $scope.user.name
                + "<h3>Email</h3>" + $scope.user.email
                + "<h3>Phone</h3>" + $scope.user.phone
                + "<h3>Message</h3>" + $scope.user.message
            GlobalService.sendEmail("Contact Request ✔", message)
                .then(function (data) {
                    // reset after processing
                    if (form) {
                        $scope.contactStatus = GlobalService //success, info, warning, danger (also error)
                            .getMessageObject("Successfully sent", "success");
                        $scope.user = angular.copy($scope.userDefault);
                        form.$setPristine();
                        form.$setUntouched();
                    }
                }, function (error) {
                    $scope.contactStatus = GlobalService //success, info, warning, danger (also error)
                        .getMessageObject("Error sending", "error");
                });

        };

        /*
         * Modals
         */
        $scope.thumbFind = function (p1) {
            var modalInstance = $modal.open({
                templateUrl: 'app/components/imageFactory/thumbFindView.html',
                controller: 'ThumbFindController',
                backdrop: false,
                size: 'lg',
                resolve: {
                    p1 : function () {
                        return p1;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.catFind = function (p1) {
            var modalInstance = $modal.open({
                templateUrl: 'app/components/cat/catFindView.html',
                controller: 'CatFindController',
                size: 'lg',
                //in_1: in_1,
                resolve: {
                    p1 : function () {
                        return p1;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.dogFind = function (p1) {
            var modalInstance = $modal.open({
                templateUrl: 'app/components/dog/dogFindView.html',
                controller: 'DogFindController',
                size: 'lg',
                //in_1: in_1,
                resolve: {
                    p1 : function () {
                        return p1;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };

    });