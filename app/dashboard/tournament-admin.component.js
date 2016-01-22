System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/data-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, data_service_1;
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
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            TournamentAdminComponent = (function () {
                function TournamentAdminComponent(params, data, fb) {
                    var _this = this;
                    this._data = data;
                    this._fb = fb;
                    // Connect and subscribe to the tournament object
                    this._tournamentPath = params.get('user') +
                        '/tournaments/' + params.get('tournamentId');
                    data.setRef(this._tournamentPath);
                    data.subscription
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
                        _this.tournamentData = data;
                        _this.initForm();
                    });
                }
                TournamentAdminComponent.prototype.initForm = function () {
                    // Tournament form / settings
                    this.tournamentForm = this._fb.group({
                        name: [this.tournamentData.name],
                        desc: [this.tournamentData.desc]
                    });
                };
                TournamentAdminComponent.prototype.submit = function () {
                    console.log(this.tournamentForm.value);
                    this._data.save(this.tournamentForm.value);
                };
                TournamentAdminComponent.prototype.ngOnInit = function () { };
                TournamentAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'tournamentAdmin',
                        templateUrl: 'app/dashboard/tournament-admin.component.html',
                        directives: [common_1.NgIf, common_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, data_service_1.DataService, common_1.FormBuilder])
                ], TournamentAdminComponent);
                return TournamentAdminComponent;
            })();
            exports_1("TournamentAdminComponent", TournamentAdminComponent);
        }
    }
});
//# sourceMappingURL=tournament-admin.component.js.map