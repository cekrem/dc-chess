System.register(['angular2/core', 'angular2/router', '../services/as-array.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, as_array_pipe_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (as_array_pipe_1_1) {
                as_array_pipe_1 = as_array_pipe_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(router, params, app) {
                    var _this = this;
                    this._router = router;
                    this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
                    this.user = params.get('user');
                    this._userRef = new Firebase(this._baseUrl + this.user);
                    this._userRef.on('value', function (snapshot) {
                        _this.userData = snapshot.val();
                        app.tick();
                        console.log('userData loaded!');
                    });
                }
                UserComponent.prototype.openTournament = function (path) {
                    this._router.navigate(['/Tournament', {
                            tournamentPath: path
                        }]);
                };
                UserComponent.prototype.ngOnInit = function () { };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        templateUrl: 'app/user/user.component.html',
                        pipes: [as_array_pipe_1.AsArrayPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, core_1.ApplicationRef])
                ], UserComponent);
                return UserComponent;
            })();
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map