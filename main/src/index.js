var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	
    $scope.firstName = "John";
    $scope.lastName = "Doe"
    $scope.cards = ["baronriv.png", "deathwing.png", "ysera.jpg"];
    $scope.getImagePath = function(cardName) {
    	console.log(cardName);
    	return "../resources/images/cards/" + cardName;
    };
    $scope.getCard = function() {
    	return "../resources/images/cards/deathwing.png";
    }
    
});