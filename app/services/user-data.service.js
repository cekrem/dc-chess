System.register(["angular2/core", "angular2/http", "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var UserDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            UserDataService = (function () {
                function UserDataService(app, http) {
                    var _this = this;
                    this._app = app;
                    this._http = http;
                    this._baseRef = firebase.database().ref("users");
                    this.subscription = new Observable_1.Observable(function (observer) {
                        _this._observer = observer;
                    }).share();
                    firebase.auth().onAuthStateChanged(function (authData) {
                        if (authData) {
                            console.log("User is logged in: " + authData.uid);
                            _this.setUser(authData.uid);
                            _this._user = authData;
                        }
                        else {
                            console.log("User is logged out!");
                            _this._userRef = null;
                            _this._user = null;
                            _this.userData = null;
                        }
                    });
                    this.subscription.subscribe(function (data) {
                        console.log(data);
                        _this.userData = data || {};
                    });
                }
                UserDataService.prototype.tryDemo = function () {
                    return firebase.auth().signInAnonymously();
                };
                UserDataService.prototype.login = function (creds) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        // Ignore empty requests
                        if (!creds.user || !creds.license) {
                            reject("");
                        }
                        // Don't login twice! :)
                        if (_this._userRef) {
                            resolve("already logged in!");
                        }
                        // login with account
                        var headers = new http_1.Headers();
                        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                        var payload = "user=" + creds.user + "&license=" + creds.license;
                        _this._http
                            .post("http://dc-chess.com/login/index.php", payload, {
                            headers: headers,
                        })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (res) {
                            if (res.length < 25) {
                                reject(res);
                            }
                            else {
                                // Login with token
                                _this._baseRef.authWithCustomToken(res, function (error, authData) {
                                    if (error) {
                                        reject(error);
                                    }
                                    else {
                                        console.log("Logged in as " + creds.user);
                                        resolve("Logged in as user!");
                                    }
                                });
                            }
                        });
                    });
                };
                UserDataService.prototype.logout = function () {
                    firebase.auth().signOut();
                };
                UserDataService.prototype.getAuthAsync = function () {
                    return new Promise(function (resolve, reject) {
                        firebase.auth().onAuthStateChanged(function (authData) {
                            if (authData) {
                                resolve(authData);
                            }
                            else {
                                reject("Not logged in!");
                            }
                        });
                    });
                };
                UserDataService.prototype.setUser = function (uid) {
                    var _this = this;
                    if (uid === void 0) { uid = "demo"; }
                    console.log("setting user to " + uid);
                    // set the userRef
                    this._userRef = this._baseRef.child(uid);
                    // and setup subscription as well
                    this._userRef.on("value", function (snapshot) {
                        _this._observer.next(snapshot.val());
                        _this._app.tick(); // I THINK THIS WORKS! :D
                    });
                    // set licenseStart
                    var licenseStartRef = this._userRef.child("licenseStart");
                    licenseStartRef.once("value", function (snapshot) {
                        var licenseStart = snapshot.val();
                        if (!licenseStart) {
                            console.log("First login!");
                            licenseStartRef.set(Date.now());
                        }
                    });
                    // if in demo mode
                    if (uid.length > 32) {
                        console.log("Setting up demo timer...");
                        this._userRef.onDisconnect().remove();
                        setTimeout(function () {
                            alert("Your time is up!");
                            _this.logout();
                            window.location.assign("http://dc-chess.com");
                        }, 300000);
                    }
                    else {
                        this._userRef.onDisconnect().cancel();
                    }
                };
                UserDataService.prototype.remove = function (path) {
                    if (path === void 0) { path = "failsafe"; }
                    var child = this._userRef.child(path);
                    child.remove();
                };
                UserDataService.prototype.save = function (path, data) {
                    var child = this._userRef.child(path);
                    child.update(data);
                };
                UserDataService.prototype.push = function (path, data) {
                    var child = this._userRef.child(path);
                    return child.push(data);
                };
                UserDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.ApplicationRef, http_1.Http])
                ], UserDataService);
                return UserDataService;
            }());
            exports_1("UserDataService", UserDataService);
        }
    }
});
//# sourceMappingURL=user-data.service.js.map