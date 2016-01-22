System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(r) {
                    this._router = r;
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
                    if (this.licenseEntry == btoa(this.userEntry)
                        && this.licenseEntry !== '') {
                        console.log('Match!');
                        return true;
                    }
                    else if (this.userEntry == 'demo') {
                        console.log('Demo mode!');
                        return true;
                    }
                    else {
                        console.log('No match!');
                        return false;
                    }
                };
                HomeComponent.prototype.login = function () {
                    if (this.userEntry == 'demo') {
                    }
                    console.log('logging in as ' + this.userEntry);
                    var creds = {
                        user: this.userEntry,
                        license: this.licenseEntry
                    };
                    this._router.navigate(['/Dashboard', { user: this.userEntry }]);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: './app/home/home.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map