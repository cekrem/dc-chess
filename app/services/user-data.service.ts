declare const Firebase;
declare const tokGen;

import { Injectable } from 'angular2/core';
import { ApplicationRef } from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDataService {
    private _app: ApplicationRef;
    private _http: Http;
    private _baseUrl: string;
    private _baseRef: Firebase;
    private _userRef: Firebase;
    private _user: FirebaseAuthData;
    private _observer: any;

    public userData: any;
    public subscription: Observable<any>;

    constructor(app: ApplicationRef, http: Http) {
        this._app = app;
        this._http = http;
        this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
        this._baseRef = new Firebase(this._baseUrl);

        this.subscription = new Observable(observer => {
            this._observer = observer;
        }).share();

        this._baseRef.onAuth((authData) => {
            if (authData) {
                console.log('User is logged in: ' + authData.uid);
                this.setUser(authData.uid);
                this._user = authData;
            }
            else {
                console.log('User is logged out!');
                this._userRef = null;
                this._user = null;
                this.userData = null;
            }
        })

        this.subscription
            .subscribe(data => {
                console.log(data);
                this.userData = data || {};
            });
    }

    login(creds) {
        return new Promise((resolve, reject) => {
            // Ignore empty requests
            if (!creds.user || !creds.license) {
                reject('');
            }
            
            // Don't login twice! :)
            if (this._userRef) {
                resolve('already logged in!');
            }
            
            // login with account
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

            let payload = 'user=' + creds.user + '&license=' + creds.license;
            let token;

            this._http.post('http://dc-chess.com/login/index.php', payload, {
                headers: headers
            })
                .map(res => res.json())
                .subscribe(res => {
                    if (res.length < 25) {
                        reject(res);
                    }
                    else {
                        // Login with token
                        this._baseRef.authWithCustomToken(res, (error, authData) => {
                            if (error) {
                                reject(error);
                            }
                            else {
                                console.log('Logged in as ' + creds.user);
                                resolve('Logged in as user!');
                            }
                        });
                    }
                })
        });
    }

    logout() {
        this._baseRef.unauth();
    }

    getAuthAsync(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._baseRef.onAuth(authData => {
                if (authData) {
                    resolve(authData);
                }
                else {
                    reject('Not logged in!');
                }
            })
        });
    }

    private setUser(uid: string = 'demo') {
        console.log('setting user to ' + uid);
        
        // set the userRef
        this._userRef = this._baseRef.child(uid);
        
        // and setup subscription as well
        this._userRef.on('value', snapshot => {
            this._observer.next(snapshot.val());
            this._app.tick(); // I THINK THIS WORKS! :D
        });
        
        // set licenseStart
        let licenseStartRef = this._userRef.child('licenseStart');
        licenseStartRef.once('value', snapshot => {
            let licenseStart = snapshot.val();
            if (!licenseStart) {
                console.log('First login!');
                licenseStartRef.set(Date.now());
            }
        })

    }

    remove(path: string = 'failsafe') {
        let child = this._userRef.child(path);

        child.remove();
    }

    save(path: string, data) {
        let child = this._userRef.child(path);

        child.update(data);
    }

    push(path: string, data?) {
        let child = this._userRef.child(path);

        return child.push(data);
    }

}