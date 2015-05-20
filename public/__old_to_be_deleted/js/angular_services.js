app.factory('$global_service', function($http) {
	var service = {};
	/*service.message_success = "";
	service.message_error = "";
	
	// Set message clear
	service.set_message_clear = function(){ 
		service.message_success = "";
		service.message_error = "";
	};
	
	// Set message success
	service.set_message_success = function(data){ 
		service.set_message_clear();
		service.message_success = data;
	};
		
	// Set message error
	service.set_message_error = function(data){ 
		service.set_message_clear();
		service.message_error = data;
	};*/
		
	// Get partners 
	service.get_partner_list = function(){
		return $http
			.get('/static/partner_list.json')
			.then(function(response) {
				return response.data;
		});
	};
		
	// Get user 
	service.get_user = function(data){
		return $http
			//.get('/static/user.json', data)
			.get('/data/user/'+data._id)
			.then(function(response) {
				return response.data;
			}, function(error) {
                return $q.reject(error);
		});
	};
	
	// Add user
	service.add_user = function(data){
		return $http
			.post('/data/user/add', data)
			.then(function(response) {
				return response.data;
			}, function(error) {
                return $q.reject(error);
		});
	};
	
	// Update user
	service.update_user = function(data){
		return $http
			.post('/data/user/update', data)
			.then(function(response) {
				return response.data;
			}, function(error) {
                return $q.reject(error);
		});
	};
		
	return service;
});
