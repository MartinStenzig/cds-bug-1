@protocol: 'rest'
service BuggyReproService @(path: '/mb') {
    function postWeatherData() returns String;
}
