System.register(['angular2/core', 'angular2/router', './home/home.component', './dashboard/dashboard.component', './dashboard/tournament-admin.component', './search/search.component', './tournament/tournament.component', './user/user.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, dashboard_component_1, tournament_admin_component_1, search_component_1, tournament_component_1, user_component_1;
    var label, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (tournament_admin_component_1_1) {
                tournament_admin_component_1 = tournament_admin_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (tournament_component_1_1) {
                tournament_component_1 = tournament_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            }],
        execute: function() {
            console.warn(window.location.hostname);
            if (window.location.hostname == 'skolesjakken.dc-chess.com') {
                label = '../styles/skolesjakken.css';
            }
            else {
                label = '../styles/concise.css';
            }
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () { };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: [label, '../styles/dc.css'],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/dashboard/',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent
                        },
                        {
                            path: '/dashboard/:tournamentKey',
                            name: 'TournamentAdmin',
                            component: tournament_admin_component_1.TournamentAdminComponent
                        },
                        {
                            path: '/search',
                            name: 'Search',
                            component: search_component_1.SearchComponent
                        },
                        {
                            path: '/tournament/:tournamentPath',
                            name: 'Tournament',
                            component: tournament_component_1.TournamentComponent
                        },
                        {
                            path: '/user/:user',
                            name: 'User',
                            component: user_component_1.UserComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map