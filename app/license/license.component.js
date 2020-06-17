System.register(["angular2/core", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var LicenseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LicenseComponent = (function () {
                function LicenseComponent(http) {
                    var _this = this;
                    this.response = new core_1.EventEmitter();
                    this._http = http;
                    this._handler = StripeCheckout.configure({
                        key: "pk_live_UkgJ2mGYH84gTzqmiu5RK5lH",
                        image: "https://s3.amazonaws.com/stripe-uploads/acct_17et1FEqcpzC3Dk3merchant-icon-1455617968443-dc.png",
                        locale: "auto",
                        token: function (token) {
                            var headers = new http_1.Headers();
                            headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                            var username = token.email.replace(/\W+/g, "-").toLowerCase();
                            var payload = "stripeToken=" +
                                token.id +
                                "&stripeEmail=" +
                                token.email +
                                "&username=" +
                                username;
                            _this._http
                                .post("http://dc-chess.com/license/charge.php", payload, {
                                headers: headers,
                            })
                                .map(function (res) { return res.json(); })
                                .subscribe(function (res) {
                                console.log(res);
                                try {
                                    // This should work, but we don't take any chances. Rather lose customer Id than customer :)
                                    var userRef = firebase.database().ref("users/" + res[0]);
                                    userRef.child("customerId").set(res[2]);
                                }
                                catch (error) {
                                    console.error(error);
                                }
                                _this.response.emit(res);
                            });
                        },
                    });
                }
                LicenseComponent.prototype.buy = function () {
                    this._handler.open({
                        name: "DC Apps AS",
                        description: "Subscription (yearly)",
                        currency: "nok",
                        amount: 100000,
                    });
                };
                LicenseComponent.prototype.ngOnInit = function () { };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], LicenseComponent.prototype, "response", void 0);
                LicenseComponent = __decorate([
                    core_1.Component({
                        selector: "license",
                        templateUrl: "/app/license/license.component.html",
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LicenseComponent);
                return LicenseComponent;
            }());
            exports_1("LicenseComponent", LicenseComponent);
        }
    }
});
//# sourceMappingURL=license.component.js.map