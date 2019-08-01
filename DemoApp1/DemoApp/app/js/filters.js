'use strict';

eventsApp.filter('level', () => {
    return function (level) {
        switch (level) {
            case 1:
                return "Midnight Snackes"
            case 2:
                return "Calibary Whibes"
            case 3:
                return "Wolves Persperations"
            case 4:
                return "Zebra Teacher"
        }
    }
});