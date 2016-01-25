import {Component, OnInit} from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';
import { Router, RouteParams } from 'angular2/router';

import { UserDataService } from '../services/user-data.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [NgIf, NgFor]
})

export class DashboardComponent implements OnInit {
    private _router: Router;
    private _timeout: any;
    private _data: UserDataService;

    public confirmKey: string;
    public userData: any;
    public tournamentKeys: Array<string>;

    constructor(router: Router, params: RouteParams, data: UserDataService) {
        this._router = router;
        this._data = data;
        this.confirmKey = '';
                
        try {
            // If coming from a tournament , we don't wait for data
            this.userData = data.userData;
            this.tournamentKeys = Object.keys(this.userData.tournaments);
        } catch (error) {
            console.warn('User data not available yet, waiting for subscription...');
        }
        
        // Subscribe to user data 
        data.subscription
            .map(data => {
                try {
                    this.tournamentKeys = Object.keys(data.tournaments);
                } catch (error) {
                    this.tournamentKeys = [];
                }
                return data;
            })
            .subscribe(data => this.userData = data || {});
    }

    openTournament(key) {
        this._router.navigate(['../TournamentAdmin', {
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
        }, 2000);

        return false;
    }
    
    deleteTournament(key) {
        clearTimeout(this._timeout);
        this.confirmKey = '';
        
        this._data.remove('tournaments/' + key);
        
        return false;
    }
    
    logout() {
        this._router.navigate(['/Home'])
        this._data.logout();
    }

    ngOnInit() { }
}