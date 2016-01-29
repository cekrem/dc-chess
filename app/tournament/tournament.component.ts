import {Component, OnInit} from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';
import { RouteParams } from 'angular2/router';

// import { PlayersComponent } from '../dashboard/players.component';
import { RoundsComponent } from '../dashboard/rounds.component';
import { ScoreComponent } from '../dashboard/score.component';

import { AsArrayPipe } from '../services/as-array.pipe';

@Component({
    selector: 'tournament',
    templateUrl: 'app/tournament/tournament.component.html',
    directives: [NgIf, NgFor, ScoreComponent],
    pipes: [AsArrayPipe]
})

export class TournamentComponent implements OnInit {
    private _baseUrl: string;
    private _baseRef: Firebase;

    public tournamentId: string;
    public activeRef: Firebase;
    public tournamentData: any;
    public error: string;
    public player: any;

    constructor(params: RouteParams) {
        this._baseUrl = 'https://dc-pro.firebaseio.com/users/';
        this._baseRef = new Firebase(this._baseUrl);

        this.tournamentId = params.get('tournamentId')
        this.search(this.tournamentId)
            .then((ref) => {
                this.activeRef = ref;
                this.activeRef.on('value', snapshot => this.tournamentData = snapshot.val());
            }, (error) => this.error = error);
    }

    search(id: string) {
        let promise: Promise<Firebase> = new Promise((resolve, reject) => {
            this._baseRef
                .on('child_added', snapshot => { // for each user
                    snapshot.child('tournaments').ref() // get the tournaments ref
                        .orderByChild('id')
                        .equalTo(id)
                        .on('child_added', snapshot => {
                            // Success case:
                            this.error = null;
                            clearTimeout(timer);
                            this._baseRef.off();
                            resolve(snapshot.ref());
                        });
                });
                
            // no error case, so 5 sec timeout
            let timer = setTimeout(() => reject('No tournament found!'), 5000);
        });

        return promise;
    }

    addPlayer(playerName: string) {
        let keys = Object.keys(this.tournamentData.players || {});
        let player = { name: playerName };
        let duplicate = false;

        keys.forEach(key => {
            if (this.tournamentData.players[key].name == playerName) {
                duplicate = true;
            }
        });  

        if (duplicate) {
            this.addPlayer(playerName + '*');
        }
        else {
            let child = this.activeRef.child('players');
            this.player = child.push(player, (error) => console.log(error));
        }
    }

    ngOnInit() { }
}