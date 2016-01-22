declare const Firebase;

import {Injectable} from 'angular2/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    private _baseUrl: string;
    private _observer: any;
    private _ref: Firebase;
    private _dataStore: any;

    public subscription: Observable<any>;

    constructor() {
        this._baseUrl = 'https://dc-pro.firebaseio.com/users/';

        this.subscription = new Observable(observer => {
            this._observer = observer;
        }).share();

        this.subscription
            .subscribe(data => {
                console.log(data);
                this._dataStore = data;
            });
    }

    setRef(path: string = '') {
        // set the ref
        this._ref = new Firebase(this._baseUrl + path);
        console.log(this._baseUrl + path);
        
        // and setup subscription as well
        this._ref.on('value', snapshot => {
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
        let child = this._ref.child(path);

        child.remove();
    }
    
    save(data) {
        this._ref.set(data);
    }

    push(path: string = 'thisAlsoKeepsThingsCalmer', data) {
        let child = this._ref.child(path);

        child.push(data);
    }

}