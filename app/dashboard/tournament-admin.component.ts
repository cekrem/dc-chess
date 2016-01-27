import {Component, OnInit} from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';

import { Observable } from 'rxjs/Observable';
import { RouteParams, ROUTER_DIRECTIVES, OnDeactivate } from 'angular2/router';

import { UserDataService } from '../services/user-data.service';
import { setupRoundRobin } from '../services/roundrobin.function'; // is this cool? Function?
import { getScore } from '../services/score.function';

import { InfoComponent } from './info.component';
import { PlayersComponent } from './players.component';

@Component({
    selector: 'tournamentAdmin',
    templateUrl: 'app/dashboard/tournament-admin.component.html',
    directives: [NgIf, NgFor, ROUTER_DIRECTIVES, InfoComponent, PlayersComponent]
})

export class TournamentAdminComponent implements OnInit {
    private _data: UserDataService;
    private _subscription: any;

    public tournamentId: string;
    public tournamentData: any;
    public playerKeys: Array<string>;
    public activeView: string;

    constructor(params: RouteParams, data: UserDataService) {
        this._data = data;
        this.tournamentId = params.get('tournamentId');
        this.activeView = 'info';

        try {
            // If coming from dashboard (which we usually are!), we don't wait for data
            this.tournamentData = data.userData.tournaments[this.tournamentId];
            this.playerKeys = Object.keys(data.userData.tournaments[this.tournamentId].players);
        } catch (error) {
            console.warn('No tournament data available yet, waiting for subscription...');
            this.playerKeys = [];
        }
        
        // Subscribe to the tournament object
        this._subscription = data.subscription
            .map(data => {
                return data.tournaments[this.tournamentId];
            })
            .subscribe(data => {
                this.tournamentData = data || {};

                try {
                    this.playerKeys = Object.keys(data.players);
                } catch (error) {
                    this.playerKeys = [];
                }
            });
    }

    submit(data: any = this.tournamentData) {
        this._data.save('tournaments/' + this.tournamentId, data);

        if (data.rounds) {
            console.log('Rounds saved! Trying to update score...');

            let undecidedMatches = getScore(data.rounds, this.tournamentData.players);
            this.submit({ players: this.tournamentData.players, playedMatches: undecidedMatches });
        }
    }

    setupRounds(system: string = 'roundrobin') {
        let rounds;

        if (system == 'roundrobin') {
            rounds = setupRoundRobin(this.playerKeys);
        }

        this.submit({ rounds: rounds });
    }

    clearRounds() {
        this.submit({ rounds: null });
    }

    addPlayer(player) {
        this._data.push('tournaments/' + this.tournamentId + '/players/', player);
    }

    deletePlayer(key) {
        this._data.remove('tournaments/' + this.tournamentId + '/players/' + key);
    }
    
    routerOnDeactivate() {
        console.log('leaving tournament admin route!');
        this._subscription.unsubscribe();
    }

    ngOnInit() { }
}