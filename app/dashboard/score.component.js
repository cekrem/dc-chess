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
    var ScoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (as_array_pipe_1_1) {
                as_array_pipe_1 = as_array_pipe_1_1;
            }],
        execute: function() {
            ScoreComponent = (function () {
                function ScoreComponent() {
                }
                ScoreComponent.prototype.ngOnInit = function () { };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ScoreComponent.prototype, "players", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ScoreComponent.prototype, "playedMatches", void 0);
                ScoreComponent = __decorate([
                    core_1.Component({
                        selector: 'tournamentScore',
                        templateUrl: 'app/dashboard/score.component.html',
                        pipes: [as_array_pipe_1.AsArrayPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ScoreComponent);
                return ScoreComponent;
            })();
            exports_1("ScoreComponent", ScoreComponent);
        }
    }
});
//# sourceMappingURL=score.component.js.map