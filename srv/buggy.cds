@protocol: 'rest'
service BuggyReproService @(path: '/mb') {
    function postWeatherData(userid: String ) returns String;
}
