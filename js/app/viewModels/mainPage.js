define(["knockout", "weatherDataService"], function (ko, weatherDataService) {
    return function () {

        var that = this;

        that.weatherItems = ko.observableArray();

        that.refreshWeather = function () {
            weatherDataService.getWeatherForAllCities(function (weatherData) {

                for (var i = 0; i < that.weatherItems.length; i++) {
                    if (that.weatherItems[i] && that.weatherItems[i].name === weatherData.name) {
                        that.weatherItems.remove(that.weatherItems[i]);
                        break;
                    }
                }

                that.weatherItems.push(weatherData);

            });
        };

        that.refreshWeather();
    }
});
