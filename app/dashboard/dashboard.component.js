System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/user-data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, user_data_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_data_service_1_1) {
                user_data_service_1 = user_data_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(router, params, data) {
                    var _this = this;
                    this._router = router;
                    this._data = data;
                    this.confirmKey = '';
                    try {
                        // If coming from a tournament , we don't wait for data
                        this.userData = data.userData;
                        this.tournamentKeys = Object.keys(this.userData.tournaments);
                    }
                    catch (error) {
                        console.warn('User data not available yet, waiting for subscription...');
                    }
                    // Subscribe to user data 
                    data.subscription
                        .map(function (data) {
                        try {
                            _this.tournamentKeys = Object.keys(data.tournaments);
                        }
                        catch (error) {
                            _this.tournamentKeys = [];
                        }
                        return data;
                    })
                        .subscribe(function (data) { return _this.userData = data || {}; });
                }
                DashboardComponent.prototype.openTournament = function (key) {
                    this._router.navigate(['../TournamentAdmin', {
                            tournamentId: key
                        }]);
                };
                DashboardComponent.prototype.addTournament = function () {
                    this._data.push('tournaments/', { name: 'New Tournament' });
                };
                DashboardComponent.prototype.confirmDelete = function (key) {
                    var _this = this;
                    clearTimeout(this._timeout);
                    this.confirmKey = key;
                    this._timeout = setTimeout(function () {
                        _this.confirmKey = '';
                    }, 2000);
                    return false;
                };
                DashboardComponent.prototype.deleteTournament = function (key) {
                    clearTimeout(this._timeout);
                    this.confirmKey = '';
                    this._data.remove('tournaments/' + key);
                    return false;
                };
                DashboardComponent.prototype.logout = function () {
                    this._router.navigate(['/Home']);
                    this._data.logout();
                };
                DashboardComponent.prototype.ngOnInit = function () { };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/dashboard/dashboard.component.html',
                        directives: [common_1.NgIf, common_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, user_data_service_1.UserDataService])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map