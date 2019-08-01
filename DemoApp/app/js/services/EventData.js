/*eventsApp.factory('eventData',()=>{
    return {
        event : {
            name: 'Event Registeration Page',
            // date: '1/1/2019',
            date: new Date().toDateString(),
            time: new Date().toUTCString(),
            location: {
                city: 'Louisiana',
                country: 'America',
                pincode: 342444,
                latitude: '32.1.14.32.13.4.5',
                longitude: '56.89.233.11.1'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Plaxo Charges Checking at 4.55am',
                    type: 'Surfing',
                    duration: '1.54h',
                    level: 2,
                    levelOfSecurity: 'Medium',
                    abstract: 'KSKSKKSKSKSKSKKKKKKKKKKKKKKKKKKKKK',
                    upVoteCount: 0
                },
                {
                    name: 'Visit MySpace and spend 1-hr-45m',
                    type: 'Social Networking',
                    duration: '1.24.33h',
                    level: 1,
                    levelOfSecurity: 'Medium',
                    abstract: 'Visij skisk skskks osmkskks isisii osooso ososoos iosoosoo',
                    upVoteCount: 0
                },
                {
                    name: 'Book a ticket on MyTickets from A to B',
                    type: 'Neural Networks',
                    duration: '1.00.23h',
                    level: 3,
                    levelOfSecurity: 'High',
                    abstract: 'skksksk iskiskio kiskkskk oskksks kskksk ikskskk ososoos osiosooso',
                    upVoteCount: 0
                },
                {
                    name: 'Buying Books On Amazon',
                    type: 'Digital Marketing',
                    duration: '2',
                    level: 4,
                    levelOfSecurity: 'Low',
                    abstract: 'skksksk iskiskio sllklskklsdfasd;][qpwpwpwoeoasklkawkwopkweokweopqwoloqweoqweoqwwpqwoqwpolwploqwp] oskksks kskksk ikskskk ososoos osiosooso',
                    upVoteCount: 2
                }
            ]
        },
    };
});
*/
//using Built-in-service $http 
eventsApp.factory('eventData',($http)=>{
    return {
        getEvent: () =>{
            $http.get({method:'GET',url:'/data/event/1'})
        }
    }  
});