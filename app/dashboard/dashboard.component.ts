import {Component, OnInit} from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';
import { Router, RouteParams } from 'angular2/router';

import { DataService } from '../services/data-service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [NgIf, NgFor]
})

export class DashboardComponent implements OnInit {
    private _router: Router;
    private _timeout: any;
    private _data: DataService;

    public confirmKey: string;
    public user: string;
    public userData: any;
    public tournamentKeys: Array<string>;

    constructor(router: Router, params: RouteParams, data: DataService) {
        this._router = router;
        this._data = data;

        this.confirmKey = '';
        this.user = params.get('user') || 'demo';
        
        // Connect and subscribe to user data 
        data.setRef(this.user);
        data.subscription
            .map(data => {
                try {
                    this.tournamentKeys = Object.keys(data.tournaments);
                } catch (error) {
                    this.tournamentKeys = [];
                }
                return data;
            })
            .subscribe(data => this.userData = data);
    }

    openTournament(key) {
        this._router.navigate(['../TournamentAdmin', {
            user: this.user,
            tournamentId: key
        }]);
    }
    
    addTournament() {
        this._data.push('tournaments/', {name: 'New Tournament'});
    }

    confirmDelete(key) {
        clearTimeout(this._timeout);

        this.confirmKey = key;

        this._timeout = setTimeout(() => {
            this.confirmKey = '';
        }, 5000);

        return false;
    }
    
    deleteTournament(key) {
        clearTimeout(this._timeout);
        this.confirmKey = '';
        
        this._data.remove('tournaments/' + key);
        
        return false;
    }

    ngOnInit() { }
}