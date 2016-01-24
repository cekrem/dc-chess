declare const Firebase;

import {Injectable} from 'angular2/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDataService {
    private _baseUrl: string;
    private _baseRef: Firebase;
    private _userRef: Firebase;
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
            }
        })

        this.subscription
            .subscribe(data => {
                console.log(data);
                this.userData = data;
            });
    }

    login(cred) {
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

    getAuth() {
        let auth = this._baseRef.getAuth();

        console.log(auth);
        return auth;
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

    push(path: string = 'failsafe', data) {
        let child = this._userRef.child(path);

        child.push(data);
    }

}