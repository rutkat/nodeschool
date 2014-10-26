var app = angular.module('myApp', [])

app.controller('MainCtrl', function($scope, Messenger){
  
  $scope.appTitle = "My Angular App"

  $scope.messages = []

    $scope.postMessage = function() {
      if (!$scope.myName || !$scope.myMsg) return
        // Save to array (memory)
        //$scope.messages.push({ name: $scope.myName, message: $scope.myMsg });
        Messenger.saveMessage({ name: $scope.myName, message: $scope.myMsg })
        // clear input field
        $scope.myMsg = ''
    }

    $scope.getMessages = function() {
    
      Messenger.loadList().then(function(response) {
          console.log(response.data)
          $scope.messages = response.data
      })
    }

})

app.factory('Messenger', function($http) {
  
    // console.log('inside Messenger')
    var Messenger = {}

    Messenger.loadList = function() {
      // console.log('getting messages...')

      return $http({
        method: 'GET', 
        url: 'http://127.0.0.1:5000/messages/list.json'
      })
    }


    Messenger.saveMessage = function(jsonObj) {
      console.log('saving to db')
      $http.post('http://127.0.0.1:5000/messages/create.json', jsonObj)
    }

    return Messenger
})
