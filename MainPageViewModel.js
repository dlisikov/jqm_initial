var MainPageViewModel = function () {

    var that = this;

    var weatherDataService = new WeatherDataService();

    that.weatherItems = ko.observableArray();

    that.refreshWeather = function () {
        weatherDataService.getWeather(function (weatherData) {

            for (var i = 0; i < that.weatherItems.length; i++) {
                if (that.weatherItems[i] && that.weatherItems[i].name === weatherData.name) {
                    that.weatherItems.remove(that.weatherItems[i]);
                    break;
                }
            }

            that.weatherItems.push(weatherData);

        });
    };
};