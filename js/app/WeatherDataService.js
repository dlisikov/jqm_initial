define(["jquery"], function ($) {

    var cities = {
        london: "http://api.openweathermap.org/data/2.5/weather?units=metric&q=London,uk",
        munich: "http://api.openweathermap.org/data/2.5/weather?units=metric&q=Munich,de",
        syndey: "http://api.openweathermap.org/data/2.5/weather?units=metric&q=sydney,australia",
        washington: "http://api.openweathermap.org/data/2.5/weather?units=metric&q=Washington,us"
    };

    var getWeatherForAllCities = function (callback) {

        for (var city in cities) {
            $.get(cities[city]).done(function (data) { callback(data); });
        }
    };

    var getWeather = function (city, callback) {
        var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city;
        $.get(url).done(function (data) { callback(data); });
    };

    return {
        getWeatherForAllCities: getWeatherForAllCities,
        getWeather: getWeather
    };
});
