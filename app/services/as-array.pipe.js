System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var firstBy, AsArrayPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            firstBy = function () { function n(n, t) { if ("function" != typeof n) {
                var r = n;
                n = function (n) { return n[r] ? n[r] : ""; };
            } if (1 === n.length) {
                var u = n;
                n = function (n, t) { return u(n) < u(t) ? -1 : u(n) > u(t) ? 1 : 0; };
            } return -1 === t ? function (t, r) { return -n(t, r); } : n; } function t(t, u) { return t = n(t, u), t.thenBy = r, t; } function r(r, u) { var f = this; return r = n(r, u), t(function (n, t) { return f(n, t) || r(n, t); }); } return t; }();
            AsArrayPipe = (function () {
                function AsArrayPipe() {
                }
                AsArrayPipe.prototype.transform = function (value, args) {
                    if (!value) {
                        return [];
                    }
                    var arrayWithKeys = Object.keys(value).map(function (key) {
                        var prop = value[key];
                        prop.key = key;
                        return prop;
                    });
                    if (args[0] == 'length') {
                        return arrayWithKeys.length;
                    }
                    if (args[0] == 'sort') {
                        arrayWithKeys.sort(firstBy(function (a, b) { return b.points - a.points; })
                            .thenBy(function (a, b) { return (a.byes || 0) - (b.byes || 0); })
                            .thenBy(function (a, b) { return (b.buchholz || 0) - (a.buchholz || 0); })
                            .thenBy(function (a, b) { return (b.neustadtl || 0) - (a.neustadtl || 0); })
                            .thenBy(function (a, b) { return b.blackMatches - a.blackMatches; })
                            .thenBy(function (a, b) { return (b.wins || 0) - (a.wins || 0); }));
                    }
                    return arrayWithKeys;
                };
                AsArrayPipe = __decorate([
                    core_1.Pipe({
                        name: 'asArray'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AsArrayPipe);
                return AsArrayPipe;
            })();
            exports_1("AsArrayPipe", AsArrayPipe);
        }
    }
});
//# sourceMappingURL=as-array.pipe.js.map