declare const Firebase;

import {Injectable} from 'angular2/core';
import { Observable } from 'rxjs/Observable';

// If we're not using observables, the active ref is pretty much all we need.
// If we want to do all firebase calls here, observables would be better.
// But do we need to? The why duplicate the API?

@Injectable()
export class DataService {
    private _baseUrl: string;
    private _observer: any;

    public ref: Firebase;
    public subscription: Observable<any>;

    constructor() {
        this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
        
        this.subscription = new Observable(observer => {
            this._observer = observer;
        }).share();

        this.subscription
            .subscribe(data => console.log(data));
    }

    setRef(path: string = '') {
        // set the ref
        this.ref = new Firebase(this._baseUrl + path);
        console.log(this._baseUrl + path);
        
        // and setup subscription as well
        this.ref.on('value', snapshot => {
            this._observer.next(snapshot.val());
        }); 
        
        // this fixes some WEIRD(!) Firebase bug:
        let crapObservable = new Observable(observer => {
           setInterval(() => observer.next(Math.random()), 1000); 
        });
        
        crapObservable
            .subscribe();
    }
}