System.register(['angular2/core', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var UserDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            UserDataService = (function () {
                function UserDataService() {
                    var _this = this;
                    this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
                    this._baseRef = new Firebase(this._baseUrl);
                    this.subscription = new Observable_1.Observable(function (observer) {
                        _this._observer = observer;
                    }).share();
                    this.subscription
                        .subscribe(function (data) {
                        console.log(data);
                        _this.userData = data;
                    });
                    // This should happen on auth, with auth/id as param
                    this.setUser();
                }
                // This should (on auth) create the userRef and wire up the observable
                // NOTE: This means we have to change implementation on tournament admin,
                // it should only map the subscription and get cold data from _userData
                UserDataService.prototype.setUser = function (path) {
                    var _this = this;
                    if (path === void 0) { path = 'demo'; }
                    // set the userRef
                    this._userRef = this._baseRef.child(path);
                    // and setup subscription as well
                    this._userRef.on('value', function (snapshot) {
                        _this._observer.next(snapshot.val());
                    });
                    // this fixes some WEIRD(!) Firebase bug:
                    var crapObservable = new Observable_1.Observable(function (observer) {
                        setInterval(function () { return observer.next(Math.random()); }, 1000);
                    });
                    crapObservable
                        .subscribe();
                };
                UserDataService.prototype.remove = function (path) {
                    if (path === void 0) { path = 'thisDisablesAccidents!'; }
                    var child = this._userRef.child(path);
                    child.remove();
                };
                UserDataService.prototype.save = function (data) {
                    // not implemented yet
                };
                UserDataService.prototype.push = function (path, data) {
                    if (path === void 0) { path = 'thisAlsoKeepsThingsCalmer'; }
                    var child = this._userRef.child(path);
                    child.push(data);
                };
                UserDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserDataService);
                return UserDataService;
            })();
            exports_1("UserDataService", UserDataService);
        }
    }
});
//# sourceMappingURL=user-data.service.js.map