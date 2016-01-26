System.register(['rxjs/Rx', 'angular2/platform/browser', 'angular2/router', './services/user-data.service', './app.component'], function(exports_1) {
    var browser_1, router_1, user_data_service_1, app_component_1;
    return {
        setters:[
            function (_1) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_data_service_1_1) {
                user_data_service_1 = user_data_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, user_data_service_1.UserDataService]);
        }
    }
});
//# sourceMappingURL=boot.js.map