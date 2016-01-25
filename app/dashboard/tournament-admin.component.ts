import {Component, OnInit} from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';

import { RouteParams } from 'angular2/router';
import { UserDataService } from '../services/user-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tournamentAdmin',
    templateUrl: 'app/dashboard/tournament-admin.component.html',
    directives: [NgIf, NgFor]
})

export class TournamentAdminComponent implements OnInit {
    private _data: UserDataService;
    private _timeout: any;

    public tournamentId: string;
    public tournamentData: any;
    public playerKeys: Array<string>;
    public confirmKey: string;

    constructor(params: RouteParams, data: UserDataService) {
        this._data = data;
        this.tournamentId = params.get('tournamentId');
        this.confirmKey = '';

        try {
            // If coming from dashboard (which you usually are!), we don't wait for data
            this.tournamentData = data.userData.tournaments[this.tournamentId];
        } catch (error) {
            console.warn('No tournament data available yet, waiting for subscription...');
        }
        
        // Subscribe to the tournament object
        data.subscription
            .map(data => {
                return data.tournaments[this.tournamentId];
            })
            .map(data => {
                try {
                    this.playerKeys = Object.keys(data.players);
                } catch (error) {
                    this.playerKeys = [];
                }
                return data;
            })
            .subscribe(data => {
                console.log(data);
                this.tournamentData = data;
            });
    }

    submit(data) {
        this._data.save('tournaments/' + this.tournamentId, data);
    }

    addPlayer(playerName) {
        let player = { name: playerName };
        let duplicate = false;

        this.playerKeys.forEach(key => {
            if (this.tournamentData.players[key].name == playerName) {
                duplicate = true;
            }
        });

        if (duplicate) {
            this.addPlayer(playerName + '*');
        }
        else {
            this._data.push('tournaments/' + this.tournamentId + '/players/', player);
        }
    }

    confirmDelete(key) {
        clearTimeout(this._timeout);

        this.confirmKey = key;

        this._timeout = setTimeout(() => {
            this.confirmKey = '';
        }, 2000);

        return false;
    }

    deletePlayer(key) {
        clearTimeout(this._timeout);
        this.confirmKey = '';

        this._data.remove('tournaments/' + this.tournamentId + '/players/' + key);

        return false;
    }

    ngOnInit() { }
}