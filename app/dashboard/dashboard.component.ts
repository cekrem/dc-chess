import {Component, OnInit} from 'angular2/core';
import { NgFor } from 'angular2/common';
import { RouteParams } from 'angular2/router';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../services/data-service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [NgFor]
})

export class DashboardComponent implements OnInit {
    private _creds: any;
    
    public subscription: Observable<any>;
    public userData: any;
    public tournamentKeys: Array<string>;

    constructor(params: RouteParams, data: DataService) {
        this._creds = params.get('creds');
        if(this._creds.user == '') {
            this._creds.user = 'demo';
        }

        this.subscription = data.subscription;
        
        data.setRef('demo');
        this.subscription
            .map(data => {
                this.tournamentKeys = Object.keys(data.tournaments);
                return data;
            })
            .subscribe(data => this.userData = data);
    }

    get user() {
        return this._creds.user;
    }

    ngOnInit() { }
}