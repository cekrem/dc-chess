import {Component, OnInit} from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';

import { Observable } from 'rxjs/Observable';
import { Router, RouteParams, ROUTER_DIRECTIVES, OnDeactivate } from 'angular2/router';

import { UserDataService } from '../services/user-data.service';

import { setupRoundRobin } from '../services/roundrobin.function';
import { setupFirstMonrad, setupNextMonrad, removeLastBye } from '../services/monrad.function';

import { getScore } from '../services/score.function';
import { AsArrayPipe } from '../services/as-array.pipe';

import { InfoComponent } from './info.component';
import { PlayersComponent } from './players.component';
import { RoundsComponent } from './rounds.component';
import { ScoreComponent } from './score.component';

@Component({
    selector: 'tournamentAdmin',
    templateUrl: 'app/dashboard/tournament-admin.component.html',
    directives: [NgIf, NgFor, ROUTER_DIRECTIVES, InfoComponent, PlayersComponent, RoundsComponent, ScoreComponent],
    pipes: [AsArrayPipe]
})

export class TournamentAdminComponent implements OnInit {
    private _data: UserDataService;
    private _subscription: any;

    public tournamentKey: string;
    public tournamentData: any;
    public playerKeys: Array<string>;
    public playersArray: Array<any>;
    public activeView: string;

    constructor(router: Router, params: RouteParams, data: UserDataService) {
        this._data = data;
        this.tournamentKey = params.get('tournamentKey');
        this.activeView = 'info';
        
        data.getAuthAsync()
            .catch(() => router.navigate(['Home']));

        try {
            // If coming from dashboard (which we usually are!), data is already stored and won't emit:
            this.tournamentData = data.userData.tournaments[this.tournamentKey];
            this.playerKeys = Object.keys(data.userData.tournaments[this.tournamentKey].players);
            this.playersArray = this.playerKeys.map(key => data.userData.tournaments[this.tournamentKey].players[key]);
        } catch (error) {
            console.warn('No tournament data available yet, waiting for subscription...');
            this.playerKeys = [];
            this.playersArray = [];
        }
        
        // Subscribe to the tournament object
        this._subscription = data.subscription
            .map(data => {
                return data.tournaments[this.tournamentKey];
            })
            .subscribe(data => {
                this.tournamentData = data || {};

                try {
                    this.playerKeys = Object.keys(data.players);
                    this.playersArray = this.playerKeys.map(key => data.players[key]);
                } catch (error) {
                    this.playerKeys = [];
                    this.playersArray = [];
                }
            });
    }

    submit(data: any = this.tournamentData) {
        this._data.save('tournaments/' + this.tournamentKey, data);

        if (data.rounds) {
            console.log('Rounds saved! Trying to update score...');

            let undecidedMatches = getScore(data.rounds, this.tournamentData.players);
            this.submit({ players: this.tournamentData.players, playedMatches: undecidedMatches });
        }
    }

    setupRounds(system) {
        let rounds;

        if (system == 'clear') {
            let answer = confirm('are you sure?');
            if (!answer) {
                return false;
            }
            rounds = null;
            system = null;

            for (let key in this.tournamentData.players) {
                this.tournamentData.players[key].byes = 0;
            }

            this.submit({ rounds: rounds, system: system, players: this.tournamentData.players });
            return;
        }

        if (system == 'clearLast') {
            removeLastBye(this.tournamentData.players, this.tournamentData.rounds.length);
            this.tournamentData.rounds.pop();

            this.submit({ rounds: this.tournamentData.rounds, players: this.tournamentData.players });
        }

        if (system == 'roundrobin') {
            rounds = setupRoundRobin(this.playerKeys);
            this.submit({ rounds: rounds, system: system });
            return;
        }

        if (system > 3) { // this means first round of monrad
            rounds = [];
            rounds[0] = setupFirstMonrad(this.tournamentData.players);

            this.submit({ rounds: rounds, system: system, players: this.tournamentData.players });
            return;
        }

        if (system == 'nextMonrad') {
            rounds = this.tournamentData.rounds;
            
            // setup next round, pass length of rounds as roundIndex (smooth)
            let nextRound = setupNextMonrad(this.tournamentData.players, this.tournamentData.rounds.length);
            rounds.push(nextRound);

            system = 'monrad';
            this.submit({ rounds: rounds, players: this.tournamentData.players });
            return;
        }
    }

    clearRounds() {
        this.submit({ rounds: null });
    }

    addPlayer(player) {
        this._data.push('tournaments/' + this.tournamentKey + '/players/', player);
    }

    deletePlayer(key) {
        this._data.remove('tournaments/' + this.tournamentKey + '/players/' + key);
    }

    ngOnInit() { }
}