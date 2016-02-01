System.register(['angular2/core', 'angular2/common', 'angular2/router', '../dashboard/score.component', '../services/as-array.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, score_component_1, as_array_pipe_1;
    var TournamentComponent;
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
            function (score_component_1_1) {
                score_component_1 = score_component_1_1;
            },
            function (as_array_pipe_1_1) {
                as_array_pipe_1 = as_array_pipe_1_1;
            }],
        execute: function() {
            TournamentComponent = (function () {
                function TournamentComponent(params) {
                    var _this = this;
                    this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
                    var safePath = params.get('tournamentPath');
                    this.tournamentPath = atob(safePath);
                    console.log(this.tournamentPath);
                    this.activeRef = new Firebase(this.tournamentPath);
                    this.activeRef.on('value', function (snapshot) { return _this.tournamentData = snapshot.val(); });
                }
                TournamentComponent.prototype.addPlayer = function (playerName) {
                    var _this = this;
                    var keys = Object.keys(this.tournamentData.players || {});
                    var player = { name: playerName };
                    var duplicate = false;
                    keys.forEach(function (key) {
                        if (_this.tournamentData.players[key].name == playerName) {
                            duplicate = true;
                        }
                    });
                    if (duplicate) {
                        this.addPlayer(playerName + '*');
                    }
                    else {
                        var child = this.activeRef.child('players');
                        this.player = child.push(player, function (error) { return console.log(error); });
                    }
                };
                TournamentComponent.prototype.ngOnInit = function () { };
                TournamentComponent = __decorate([
                    core_1.Component({
                        selector: 'tournament',
                        templateUrl: 'app/tournament/tournament.component.html',
                        directives: [common_1.NgIf, common_1.NgFor, score_component_1.ScoreComponent],
                        pipes: [as_array_pipe_1.AsArrayPipe],
                        styleUrls: ['app/tournament/tournament.styles.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], TournamentComponent);
                return TournamentComponent;
            })();
            exports_1("TournamentComponent", TournamentComponent);
        }
    }
});
//# sourceMappingURL=tournament.component.js.map