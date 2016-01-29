import {Component, OnInit} from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';
import { Router, RouteParams } from 'angular2/router';

import { UserDataService } from '../services/user-data.service';
import { AsArrayPipe } from '../services/as-array.pipe';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [NgIf, NgFor],
    pipes: [AsArrayPipe]
})

export class DashboardComponent implements OnInit {
    private _router: Router;
    private _timeout: any;
    private _data: UserDataService;

    public confirmKey: string;
    public userData: any;

    constructor(router: Router, params: RouteParams, data: UserDataService) {
        this._router = router;
        this._data = data;
        this.confirmKey = '';
                
        try {
            // If coming from a tournament , we don't wait for data
            this.userData = data.userData;
        } catch (error) {
            console.warn('User data not available yet, waiting for subscription...');
        }
        
        // Subscribe to user data 
        data.subscription
            .subscribe(data => this.userData = data || {});
    }

    openTournament(key) {
        this._router.navigate(['../TournamentAdmin', {
            tournamentId: key
        }]);
    }
    
    addTournament() {
        let time = Date.now();
        time = time - 1454060000000;
        let id = time.toString(36); // is this safe for large number of tournaments? I think so.
        
        this._data.push('tournaments/', {name: 'Blank tournament', id: id});
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