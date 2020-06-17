System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/user-data.service', '../services/roundrobin.function', '../services/monrad.function', '../services/score.function', '../services/as-array.pipe', './info.component', './players.component', './rounds.component', './score.component', '../language.function'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, user_data_service_1, roundrobin_function_1, monrad_function_1, score_function_1, as_array_pipe_1, info_component_1, players_component_1, rounds_component_1, score_component_1, language_function_1;
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
            },
            function (roundrobin_function_1_1) {
                roundrobin_function_1 = roundrobin_function_1_1;
            },
            function (monrad_function_1_1) {
                monrad_function_1 = monrad_function_1_1;
            },
            function (score_function_1_1) {
                score_function_1 = score_function_1_1;
            },
            function (as_array_pipe_1_1) {
                as_array_pipe_1 = as_array_pipe_1_1;
            },
            function (info_component_1_1) {
                info_component_1 = info_component_1_1;
            },
            function (players_component_1_1) {
                players_component_1 = players_component_1_1;
            },
            function (rounds_component_1_1) {
                rounds_component_1 = rounds_component_1_1;
            },
            function (score_component_1_1) {
                score_component_1 = score_component_1_1;
            },
            function (language_function_1_1) {
                language_function_1 = language_function_1_1;
            }],
        execute: function() {
            TournamentAdminComponent = (function () {
                function TournamentAdminComponent(router, params, data) {
                    var _this = this;
                    this._data = data;
                    this.tournamentKey = params.get('tournamentKey');
                    this.activeView = 'info';
                    // Setting language the simple way
                    if (language_function_1.getLanguagePrefix() == '.no') {
                        this.norwegian = true;
                    }
                    console.log(this.norwegian);
                    data.getAuthAsync()
                        .catch(function () { return router.navigate(['Home']); });
                    try {
                        // If coming from dashboard (which we usually are!), data is already stored and won't emit:
                        this.tournamentData = data.userData.tournaments[this.tournamentKey];
                        this.playerKeys = Object.keys(data.userData.tournaments[this.tournamentKey].players);
                        this.playersArray = this.playerKeys.map(function (key) { return data.userData.tournaments[_this.tournamentKey].players[key]; });
                    }
                    catch (error) {
                        console.warn('No tournament data available yet, waiting for subscription...');
                        this.playerKeys = [];
                        this.playersArray = [];
                    }
                    // Subscribe to the tournament object
                    this._subscription = data.subscription
                        .map(function (data) {
                        return data.tournaments[_this.tournamentKey];
                    })
                        .subscribe(function (data) {
                        _this.tournamentData = data || {};
                        try {
                            _this.playerKeys = Object.keys(data.players);
                            _this.playersArray = _this.playerKeys.map(function (key) { return data.players[key]; });
                        }
                        catch (error) {
                            _this.playerKeys = [];
                            _this.playersArray = [];
                        }
                    });
                }
                TournamentAdminComponent.prototype.submit = function (data) {
                    if (data === void 0) { data = this.tournamentData; }
                    this._data.save('tournaments/' + this.tournamentKey, data);
                    if (data.rounds) {
                        console.log('Rounds saved! Trying to update score...');
                        var undecidedMatches = score_function_1.getScore(data.rounds, this.tournamentData.players);
                        this.submit({ players: this.tournamentData.players, playedMatches: undecidedMatches });
                    }
                };
                TournamentAdminComponent.prototype.setupRounds = function (system) {
                    var rounds;
                    if (system == 'clear') {
                        var answer = confirm('are you sure?');
                        if (!answer) {
                            return false;
                        }
                        rounds = null;
                        system = null;
                        for (var key in this.tournamentData.players) {
                            this.tournamentData.players[key].byes = 0;
                        }
                        this.submit({ rounds: rounds, system: system, players: this.tournamentData.players });
                        return;
                    }
                    if (system == 'clearLast') {
                        monrad_function_1.removeLastBye(this.tournamentData.players, this.tournamentData.rounds.length);
                        this.tournamentData.rounds.pop();
                        this.submit({ rounds: this.tournamentData.rounds, players: this.tournamentData.players });
                    }
                    if (system == 'roundrobin') {
                        rounds = roundrobin_function_1.setupRoundRobin(this.playerKeys);
                        this.submit({ rounds: rounds, system: system });
                        return;
                    }
                    if (system > 3) {
                        rounds = [];
                        rounds[0] = monrad_function_1.setupFirstMonrad(this.tournamentData.players);
                        this.submit({ rounds: rounds, system: system, players: this.tournamentData.players });
                        return;
                    }
                    if (system == 'nextMonrad') {
                        rounds = this.tournamentData.rounds;
                        // setup next round, pass length of rounds as roundIndex (smooth)
                        try {
                            var nextRound = monrad_function_1.setupNextMonrad(this.tournamentData.players, this.tournamentData.rounds.length);
                        }
                        catch (error) {
                            if (this.norwegian) {
                                alert('Kunne ikke sette opp neste runde: det er for få gjenværende spillere til å unngå omkamper.');
                            }
                            else {
                                alert('Could not setup next round: there are too few players to avoid rematches.');
                            }
                            return;
                        }
                        rounds.push(nextRound);
                        system = 'monrad';
                        this.submit({ rounds: rounds, players: this.tournamentData.players });
                        return;
                    }
                };
                TournamentAdminComponent.prototype.clearRounds = function () {
                    this.submit({ rounds: null });
                };
                TournamentAdminComponent.prototype.addPlayer = function (player) {
                    this._data.push('tournaments/' + this.tournamentKey + '/players/', player);
                };
                TournamentAdminComponent.prototype.deletePlayer = function (key) {
                    this._data.remove('tournaments/' + this.tournamentKey + '/players/' + key);
                };
                TournamentAdminComponent.prototype.routerOnDeactivate = function () {
                    console.log('leaving admin route, cancelling subscription!');
                    this._subscription.unsubscribe();
                };
                TournamentAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'tournamentAdmin',
                        templateUrl: 'app/dashboard/tournament-admin.component' + language_function_1.getLanguagePrefix() + '.html',
                        directives: [common_1.NgIf, common_1.NgFor, router_1.ROUTER_DIRECTIVES, info_component_1.InfoComponent, players_component_1.PlayersComponent, rounds_component_1.RoundsComponent, score_component_1.ScoreComponent],
                        pipes: [as_array_pipe_1.AsArrayPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, user_data_service_1.UserDataService])
                ], TournamentAdminComponent);
                return TournamentAdminComponent;
            }());
            exports_1("TournamentAdminComponent", TournamentAdminComponent);
        }
    }
});
//# sourceMappingURL=tournament-admin.component.js.map