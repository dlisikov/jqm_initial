define(["jquery",
        "knockout",
        "require"],
function ($, ko) {
    return {
        route: function (activePage) {
            require(['app/viewModels/' + activePage.attr("id")], function (viewModelConstructor) {
                ko.applyBindings(new viewModelConstructor(), activePage[0]);
            });
        }
    };
})