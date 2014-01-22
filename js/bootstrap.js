require.config({

    paths: {
        "jquery": "//code.jquery.com/jquery-1.9.1.min",
        "jqm": "//code.jquery.com/mobile/1.4.0/jquery.mobile-1.4.0.min",
        "knockout": "lib/knockout-3.0.0",

        // router
        "router" : "router",

        // data services
        "weatherDataService": "app/WeatherDataService"
    }

});

require(["router"], function (router) {

    $(document).on("mobileinit",
    // Set up the "mobileinit" handler before requiring jQuery Mobile's module
		function () {
		    $(document).bind('pageinit', function (event) {
		        var activePage = $(event.target);
		        router.route(activePage);
		    });
		}
	)

    require(["jqm"], function () { });
});






