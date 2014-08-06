
/*****************************************************************
 *                     Rest API Fectory
 ****************************************************************/

angular.module('Sample')
  .factory('RestApi', function($resource, Constants) {
  		console.log("Constants.restApiUrlRoot", Constants.restApiUrlRoot);
  		var urlRoot = Constants.restApiUrlRoot;
  		return {

  			someRestService1: $resource(urlRoot + 'someService1'),  
  			someRestService2: $resource(urlRoot + 'someService2')
  			
	  	};
});
