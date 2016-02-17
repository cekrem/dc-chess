import {Component, OnInit} from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';
import { Router, RouteParams } from 'angular2/router';

import { UserDataService } from '../services/user-data.service';
import { AsArrayPipe } from '../services/as-array.pipe';

import { isNorwegian } from '../language.function';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component' + isNorwegian() + '.html',
    directives: [NgIf, NgFor],
    pipes: [AsArrayPipe]
})

export class DashboardComponent implements OnInit {
    private _router: Router;
    private _timeout: any;
    private _data: UserDataService;

    public user;
    public confirmKey: string;
    public userData: any;

    constructor(router: Router, params: RouteParams, data: UserDataService) {
        this._router = router;
        this._data = data;
        this.confirmKey = '';

        data.getAuthAsync()
            .then((auth) => this.user = auth.uid, () => router.navigate(['Home']));

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
            tournamentKey: key
        }]);
    }

    addTournament() {
        let newRef = this._data.push('tournaments/');
        let key = newRef.key();
        let path = newRef.toString();
        let safePath = btoa(path);

        console.log(path);

        newRef.set({ name: 'Blank tournament', path: safePath });
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