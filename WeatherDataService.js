var WeatherDataService = function () {
    var cities = {
        london: "http://api.openweathermap.org/data/2.5/weather?units=metric&q=London,uk",
        munich: "http://api.openweathermap.org/data/2.5/weather?units=metric&q=Munich,de",
        syndey: "http://api.openweathermap.org/data/2.5/weather?units=metric&q=sydney,australia",
        washington: "http://api.openweathermap.org/data/2.5/weather?units=metric&q=Washington,us"
    };

    this.getWeather = function (callback) {

        for (var city in cities) {
            $.get(cities[city]).done(function (data) { callback(data); });
        }
    };
};