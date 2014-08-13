angular.module('starter.controllers',[])

.controller('DashCtrl', function($scope){
})

.controller('FriendsCtrl', function($scope, Friends){
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends){
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('MoreCtrl',function($scope){

})

.controller('ChatsCtrl',function($scope, Friends){
    $scope.friends = Friends.all();
})