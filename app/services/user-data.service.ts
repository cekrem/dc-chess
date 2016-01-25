declare const Firebase;

import {Injectable} from 'angular2/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDataService {
    private _baseUrl: string;
    private _baseRef: Firebase;
    private _userRef: Firebase;
    private _user: FirebaseAuthData;
    private _observer: any;

    public userData: any;
    public subscription: Observable<any>;

    constructor() {
        this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
        this._baseRef = new Firebase(this._baseUrl);

        this.subscription = new Observable(observer => {
            this._observer = observer;
        }).share();
        
        this._baseRef.onAuth((authData) => {
            if(authData) {
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

    login(cred) {
        // Don't login twice! :)
        if(this._userRef) {
            return;
        }
        
        // only anonymous login for now! Fine for demo mode :)
        this._baseRef.authAnonymously((error, authData) => {
            if (error) {
                console.error(error);
            }
            else {
                console.log('Logged in anonymously');
            }
        });
    }
    
    logout() {
        this._baseRef.unauth();
    }

    getAuthAsync() {
        return new Promise((resolve, reject) => {
            this._baseRef.onAuth(authData => {
                if(authData) {
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
        });
        
        // this fixes some WEIRD(!) Firebase bug:
        let crapObservable = new Observable(observer => {
            setInterval(() => observer.next(Math.random()), 1000);
        });

        crapObservable
            .subscribe();
    }

    remove(path: string = 'failsafe') {
        let child = this._userRef.child(path);

        child.remove();
    }

    save(path: string, data) {
        let child = this._userRef.child(path);
        
        child.update(data);
    }

    push(path: string, data) {
        let child = this._userRef.child(path);

        child.push(data);
    }

}