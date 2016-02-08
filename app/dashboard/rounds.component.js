System.register(['angular2/core', '../services/as-array.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, as_array_pipe_1;
    var RoundsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (as_array_pipe_1_1) {
                as_array_pipe_1 = as_array_pipe_1_1;
            }],
        execute: function() {
            RoundsComponent = (function () {
                function RoundsComponent() {
                    var _this = this;
                    this.dataChange = new core_1.EventEmitter();
                    this.roundsAction = new core_1.EventEmitter();
                    this.roundsAction
                        .subscribe(function (emit) {
                        if ((emit == 'nextMonrad') || (emit == 'clearLast')) {
                            setTimeout(function () { return _this.visibleRound = _this.rounds.length - 1; }, 500);
                        }
                    });
                }
                RoundsComponent.prototype.ngOnInit = function () {
                    if (this.system > 0) {
                        this.visibleRound = this.rounds.length - 1;
                    }
                    else {
                        this.visibleRound = 0;
                    }
                    this.monradRounds = 4;
                    if (this.players) {
                        this.roundrobinRounds = Object.keys(this.players).length;
                        this.nPlayers = Object.keys(this.players).length;
                        if (this.roundrobinRounds % 2 === 0) {
                            this.roundrobinRounds--;
                        }
                    }
                    else {
                        this.roundrobinRounds = 0;
                        this.nPlayers = 0;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], RoundsComponent.prototype, "rounds", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RoundsComponent.prototype, "players", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RoundsComponent.prototype, "system", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], RoundsComponent.prototype, "dataChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], RoundsComponent.prototype, "roundsAction", void 0);
                RoundsComponent = __decorate([
                    core_1.Component({
                        selector: 'tournamentRounds',
                        templateUrl: 'app/dashboard/rounds.component.html',
                        pipes: [as_array_pipe_1.AsArrayPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RoundsComponent);
                return RoundsComponent;
            })();
            exports_1("RoundsComponent", RoundsComponent);
        }
    }
});
//# sourceMappingURL=rounds.component.js.map