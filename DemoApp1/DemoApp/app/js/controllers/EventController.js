'use strict';

eventsApp.controller("EventController", function EventController($scope,eventData) {
    $scope.snippet = '<span style="color:red">Hi I am In Snippet for ng-bind-html</span>';
    $scope.boolVal = true;
    $scope.ngStyleC = { color: 'blue' };
    $scope.myClass = 'blue';
    $scope.disableMe = true;
    $scope.sortorder = 'name';
    $scope.event= eventData.event;
    //$scope.sortorder = 'upVoteCount';
    //$scope.sortorder = '-upVoteCount'; //descending
    $scope.upVoteSession = function (session) {
        session.upVoteCount += 1;
    }
    $scope.downVoteSession = function (session) {
        session.upVoteCount -= 1;
    }
});