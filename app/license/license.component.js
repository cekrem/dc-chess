System.register(['angular2/core', 'angular2/common', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1;
    var LicenseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LicenseComponent = (function () {
                function LicenseComponent(http) {
                    this._http = http;
                    Stripe.setPublishableKey('pk_test_MW11sALBW0Sbkf4slADJvX6U');
                }
                LicenseComponent.prototype.ngOnInit = function () { };
                LicenseComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    console.log(value);
                    Stripe.card.createToken(value, function (status, response) {
                        if (response.error) {
                            alert(response.error.message);
                        }
                        else {
                            console.log(response.id);
                            var headers = new http_1.Headers();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                            var payload = 'stripeToken=' + response.id;
                            _this._http.post('http://dc-chess.com/license/buy.php', payload, {
                                headers: headers
                            })
                                .map(function (res) { return res.json(); })
                                .subscribe(function (res) {
                                console.log(res);
                            });
                        }
                    });
                };
                LicenseComponent = __decorate([
                    core_1.Component({
                        selector: 'license',
                        templateUrl: '/app/license/license.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LicenseComponent);
                return LicenseComponent;
            })();
            exports_1("LicenseComponent", LicenseComponent);
        }
    }
});
//# sourceMappingURL=license.component.js.map