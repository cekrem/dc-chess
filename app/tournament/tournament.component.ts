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
    pipes: [AsArrayPipe],
    styleUrls: ['app/tournament/tournament.styles.css']
})

export class TournamentComponent implements OnInit {
    private _baseUrl: string;

    public tournamentPath: string;
    public activeRef: Firebase;
    public tournamentData: any;
    public error: string;
    public player: any;

    constructor(params: RouteParams) {
        this._baseUrl = 'https://dc-pro.firebaseio.com/users/';

        let safePath = params.get('tournamentPath');
        this.tournamentPath = atob(safePath);
        console.log(this.tournamentPath)
        
        this.activeRef = new Firebase(this.tournamentPath);
        this.activeRef.on('value', snapshot => this.tournamentData = snapshot.val());
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