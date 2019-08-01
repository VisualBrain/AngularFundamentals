'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {

        $scope.saveEvent = (event, newEventForm) => {
            console.log(newEventForm);
            if (newEventForm.$valid) {
                console.log(newEventForm);
                window.alert("Event Saved with Name" + event.name + "\n");
            }
        };

        $scope.cancelEdit = () => {
            window.location = "/EventDetails.html";
        }
    })