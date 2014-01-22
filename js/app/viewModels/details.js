define(["knockout"], function (ko) {
    return function () {

        var that = this;

        var parameters = location.search.split("?")[1];;
        parameter = parameters.replace("city=","");  

        that.cityName = ko.observable(parameter);
    }
});