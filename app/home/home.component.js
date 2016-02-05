System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/user-data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, user_data_service_1;
    var HomeComponent;
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
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(router, data) {
                    this._router = router;
                    this._data = data;
                }
                HomeComponent.prototype.ngOnInit = function () { };
                Object.defineProperty(HomeComponent.prototype, "userEntry", {
                    get: function () {
                        return this._safeUserEntry;
                    },
                    set: function (entry) {
                        this._safeUserEntry = entry.replace(/\W+/g, '-').toLowerCase();
                        console.log(this._safeUserEntry);
                    },
                    enumerable: true,
                    configurable: true
                });
                HomeComponent.prototype.licenseMatch = function () {
                    if (this.licenseEntry == btoa(this.userEntry + 'dc')
                        && this.licenseEntry.length > 3) {
                        console.log('Match!');
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                HomeComponent.prototype.login = function (demo) {
                    var _this = this;
                    console.log('logging in as ' + this.userEntry);
                    this.loading = true;
                    if (!demo) {
                        var creds = {
                            user: this.userEntry,
                            license: this.licenseEntry
                        };
                    }
                    this._data.login(creds)
                        .then(function () { return _this._router.navigate(['/Dashboard']); }, function (error) {
                        alert(error);
                        _this.loading = null;
                    });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: './app/home/home.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_data_service_1.UserDataService])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map