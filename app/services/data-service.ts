declare const Firebase;

import {Injectable} from 'angular2/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    private _baseUrl: string;
    private _baseRef: Firebase;
    private _userRef: Firebase;
    private _userData: any;
    private _observer: any;

    public subscription: Observable<any>;

    constructor() {
        this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
        this._baseRef = new Firebase(this._baseUrl);

        this.subscription = new Observable(observer => {
            this._observer = observer;
        }).share();

        this.subscription
            .subscribe(data => {
                console.log(data);
                this._userData = data;
            });
        
        // This should happen on auth, with auth/id as param
        this.setUser();
    }
    
    // This should (on auth) create the userRef and wire up the observable
    // NOTE: This means we have to change implementation on tournament admin,
    // it should only map the subscription and get cold data from _userData
    setUser(path: string = 'demo') {
        // set the userRef
        this._userRef = this._baseRef.child(path);
        
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

    remove(path: string = 'thisDisablesAccidents!') {
        let child = this._baseRef.child(path);

        child.remove();
    }
    
    save(data) {
        this._baseRef.set(data);
    }

    push(path: string = 'thisAlsoKeepsThingsCalmer', data) {
        let child = this._userRef.child(path);

        child.push(data);
    }

}