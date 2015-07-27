var resourceservice = angular.module('resourceservice', [])
  .factory('resourceService', ['$http', function ($http) {  
    var randomColorObject = {randomColor: 'green'};
    return {
      getResources: function(callbackFn) {
        $http.get('/resources')
          .success(function(data){
            callbackFn(data);
          })
          .error(function(error) {
            console.log(error);
          });     
      },

      getResource: function(arg, cbf) {
        $http.get('/resources/' + arg)
          .success(function(data) {
            cbf(data);
          })
          .error(function(err) {
            console.log('Error getting resources.');
          })
      },

      updateSchedule: function(resourceId, param) {
        $http.put('resources/' + resourceId, param)
          .then(function(){
            return true;
          });
      },

      shuffleBGcolor: function() {
        var randomVal = Math.ceil(Math.random() * 6);
        var colors = ['green', 'blue', 'red', 'orange', 'purple', 'navy_blue'];
        randomColorObject.randomColor = colors[randomVal - 1];
        return randomColorObject;
      },

      randomColorStore: function() {
        return randomColorObject;
      }
    }
}]);