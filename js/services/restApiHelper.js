
/*****************************************************************
 *                     Rest API Helper Fectory
 ****************************************************************/

angular.module('Sample')
  .factory('RestApiHelper', function(RestApi,  Constants) {
  		console.log("Rest API Helper Fectory");
  		return {	
  			getSomeService1All: function(success ) {	
				RestApi.someService1.query(function(data) {
					success(data);	
				});		
			},   
  			removeSomeService1: function(success ) {	
				RestApi.someServie1.remove(function(data) {
					success(data);	
				});		
			}, 
			 			 
  			getSomeService1: function(success ) {	
				RestApi.someService1.get(function(data)
				{
					success(data);	
				});		
			}
			
	  	};
});