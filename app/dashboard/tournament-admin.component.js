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
    var TournamentAdminComponent;
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
            TournamentAdminComponent = (function () {
                function TournamentAdminComponent(params, data) {
                    var _this = this;
                    this._data = data;
                    this.tournamentId = params.get('tournamentId');
                    try {
                        // If coming from dashboard (which you usually are!), we don't wait for data
                        this.tournamentData = data.userData.tournaments[this.tournamentId];
                    }
                    catch (error) {
                        console.warn('No tournament data available yet, waiting for subscription...');
                    }
                    // Subscribe to the tournament object
                    data.subscription
                        .map(function (data) {
                        return data.tournaments[_this.tournamentId];
                    })
                        .map(function (data) {
                        try {
                            _this.playerKeys = Object.keys(data.players);
                        }
                        catch (error) {
                            _this.playerKeys = [];
                        }
                        return data;
                    })
                        .subscribe(function (data) {
                        console.log(data);
                        _this.tournamentData = data;
                    });
                }
                TournamentAdminComponent.prototype.submit = function () {
                };
                TournamentAdminComponent.prototype.ngOnInit = function () { };
                TournamentAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'tournamentAdmin',
                        templateUrl: 'app/dashboard/tournament-admin.component.html',
                        directives: [common_1.NgIf, common_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, user_data_service_1.UserDataService])
                ], TournamentAdminComponent);
                return TournamentAdminComponent;
            })();
            exports_1("TournamentAdminComponent", TournamentAdminComponent);
        }
    }
});
//# sourceMappingURL=tournament-admin.component.js.map