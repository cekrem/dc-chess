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
    var PlayersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (as_array_pipe_1_1) {
                as_array_pipe_1 = as_array_pipe_1_1;
            }],
        execute: function() {
            PlayersComponent = (function () {
                function PlayersComponent() {
                    this.playerAdd = new core_1.EventEmitter();
                    this.playerDelete = new core_1.EventEmitter();
                    this.confirmKey = '';
                }
                PlayersComponent.prototype.addPlayer = function (playerName) {
                    var _this = this;
                    var keys = Object.keys(this.players || {});
                    var player = { name: playerName };
                    var duplicate = false;
                    keys.forEach(function (key) {
                        if (_this.players[key].name == playerName) {
                            duplicate = true;
                        }
                    });
                    if (duplicate) {
                        this.addPlayer(playerName + '*');
                    }
                    else {
                        this.playerAdd.emit(player);
                    }
                };
                PlayersComponent.prototype.confirmDelete = function (key) {
                    var _this = this;
                    clearTimeout(this._timeout);
                    this.confirmKey = key;
                    this._timeout = setTimeout(function () {
                        _this.confirmKey = '';
                    }, 2000);
                    return false;
                };
                PlayersComponent.prototype.deletePlayer = function (key) {
                    clearTimeout(this._timeout);
                    this.confirmKey = '';
                    this.playerDelete.emit(key);
                    return false;
                };
                PlayersComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlayersComponent.prototype, "players", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PlayersComponent.prototype, "canAdd", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PlayersComponent.prototype, "playerAdd", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PlayersComponent.prototype, "playerDelete", void 0);
                PlayersComponent = __decorate([
                    core_1.Component({
                        selector: 'tournamentPlayers',
                        templateUrl: 'app/dashboard/players.component.html',
                        pipes: [as_array_pipe_1.AsArrayPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlayersComponent);
                return PlayersComponent;
            })();
            exports_1("PlayersComponent", PlayersComponent);
        }
    }
});
//# sourceMappingURL=players.component.js.map