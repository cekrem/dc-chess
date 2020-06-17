System.register(['angular2/core', '../language.function'], function(exports_1, context_1) {
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
    var core_1, language_function_1;
    var InfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (language_function_1_1) {
                language_function_1 = language_function_1_1;
            }],
        execute: function() {
            InfoComponent = (function () {
                function InfoComponent() {
                    var location = window.location;
                    var protocol = location.protocol, hostname = location.hostname, port = location.port;
                    this.dataChange = new core_1.EventEmitter();
                    this.root = protocol + "//" + hostname + ":" + port + "/tournaments/";
                }
                InfoComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], InfoComponent.prototype, "tournament", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], InfoComponent.prototype, "dataChange", void 0);
                InfoComponent = __decorate([
                    core_1.Component({
                        selector: 'tournamentInfo',
                        templateUrl: 'app/dashboard/info.component' + language_function_1.getLanguagePrefix() + '.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], InfoComponent);
                return InfoComponent;
            }());
            exports_1("InfoComponent", InfoComponent);
        }
    }
});
//# sourceMappingURL=info.component.js.map