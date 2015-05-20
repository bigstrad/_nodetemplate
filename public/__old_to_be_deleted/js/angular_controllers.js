
//
// GlobalCtrl
//
app.controller('GlobalCtrl', function ($scope, $route, $routeParams, $location, $global_service) {
	$scope.global_service = $global_service;
});

//
// NavCtrl
//
app.controller('NavCtrl', function ($scope, $route, $routeParams, $location, $global_service) {
});


//
// HomeCtrl
//
app.controller('HomeCtrl', function ($scope, $route, $routeParams, $location, $global_service) {
});

//
// 404Ctrl
//
app.controller('404Ctrl', function ($scope, $route, $routeParams, $location, $global_service) {
});

//
// LoginCtrl
//
app.controller('LoginCtrl', function ($scope, $route, $routeParams, $location, $global_service) {
    // test !!!!!!!
  $scope.changeLocation = function(path, reload) {
        $location.path(path, reload);
    };
});

//
// ProfileCtrl
//
app.controller('ProfileCtrl', function ($scope, $route, $routeParams, $location, $global_service) {
});
 
//
// OrderSaveCtrl
//
app.controller('OrderSaveCtrl', function ($scope, $route, $routeParams, $location, $global_service) {
	$scope.user = {};
	$scope.partner_list = [];
	$scope.tmp_order = {};
	
	// Initialize tmp_order
	$scope.init_tmp_order = function() {
		// Initialize tmp_orde
		$scope.tmp_order = {
			"uuid": "",
			"receipt_id": "",
			"name": "",
			"status": "",
			"expiration": "",
			"partner": {},
			"data": ""
        };
		
		// If only one partner, use it as dropdown default
		if($scope.partner_list.length==1){
			$scope.tmp_order.partner = $scope.partner_list[0];
		};
	};
	
	// New date
	$scope.get_new_date = function(){
		var date = new Date();
		return date;
	};
	
	// Save
	$scope.save = function(){
		// Default property values
		$scope.tmp_order.uuid = uuid.v1();
		$scope.tmp_order.status = "pending";
		$scope.tmp_order.expiration = $scope.get_new_date();
		
		// Push
		$scope.user.past_orders.push(angular.copy($scope.tmp_order));
		
		// Persist
		$global_service.update_user($scope.user)
			.then(function(data) {
				// Set message
				//$global_service.set_message_success("Order successfully saved.");
				
				// Initialize tmp_order
				$scope.init_tmp_order();
			}, function(error) {
				console.log(error);
                //$global_service.set_message_error("Error saving order.");
		});
	};
	
	// Initialize
	$scope.init = function(){
		// Clear message
		//$global_service.set_message_clear();
		
		// Load user
		$global_service.get_user({"_id":"5252438a8e18f64592000002"})
			.then(function(data) {
				$scope.user = data;
		});
			
		// Initialize partner list
		$global_service.get_partner_list()
			.then(function(data) {
				$scope.partner_list = data;
				
				// Initialize tmp_order
				$scope.init_tmp_order();
		}, function(error) {
				console.log(error);
                //$global_service.set_message_error("Error saving order.");
		});
		
	};
	
	// Call Initialize
	$scope.init();
});

//
// OrderListCtrl
//
app.controller('OrderListCtrl', function ($scope, $route, $routeParams, $location, $global_service) {
	$scope.user = {};
	
	$scope.placeOrder = function(order) {
		if(order.status=="active"){
			console.log("id=>"+order.uuid+", name=>"+order.name);
		}
	};
	
	// Initialize
	$scope.init = function(){
		// Clear message
		//$global_service.set_message_clear();
		
		// Load user
		$global_service.get_user({"_id":"5252438a8e18f64592000002"})
			.then(function(data) {
				$scope.user = data;
		}, function(error) {
				console.log(error);
                //$global_service.set_message_error("Error saving order.");
		});
		
	};
	
	// Call Initialize
	$scope.init();

});

//
// OrderDetailCtrl
//
app.controller('OrderDetailCtrl', function ($scope, $route, $routeParams, $location, $global_service) {
	$scope.order_id = $routeParams.order_id;
	$scope.model = {
		"order_id": $scope.order_id,
		"message": "HomeCtrl"
	};
	//console.log($scope.model);
}); 


