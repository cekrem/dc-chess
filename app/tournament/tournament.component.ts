import {Component, OnInit, ApplicationRef} from 'angular2/core';
import { NgIf, NgFor } from 'angular2/common';
import { RouteParams } from 'angular2/router';

// import { PlayersComponent } from '../dashboard/players.component';
import { RoundsComponent } from '../dashboard/rounds.component';
import { ScoreComponent } from '../dashboard/score.component';

import { AsArrayPipe } from '../services/as-array.pipe';

import { isNorwegian } from '../language.function';

@Component({
    selector: 'tournament',
    templateUrl: 'app/tournament/tournament.component'  + isNorwegian() +'.html',
    directives: [NgIf, NgFor, ScoreComponent],
    pipes: [AsArrayPipe],
    styleUrls: ['app/tournament/tournament.styles.css']
})

export class TournamentComponent implements OnInit {
    private _baseUrl: string;
    private _safePath: string;

    public tournamentPath: string;
    public activeRef: Firebase;
    public tournamentData: any;
    public visibleRound: number;
    public error: string;
    public playerKey: any;
    public joined: boolean;

    constructor(app: ApplicationRef, params: RouteParams) {
        this._baseUrl = 'https://dc-pro.firebaseio.com/users/';

        this._safePath = params.get('tournamentPath');
        this.tournamentPath = atob(this._safePath);
        console.log(this.tournamentPath)

        this.activeRef = new Firebase(this.tournamentPath);
        this.activeRef.on('value', snapshot => {
            this.tournamentData = snapshot.val();
            app.tick();
            console.log('data loaded!');
        });

        if (localStorage[this._safePath]) {
            this.joined = true;
            this.playerKey = localStorage[this._safePath];
        }
    }

    addPlayer(playerName: string) {
        if (localStorage[this._safePath]) {
            alert('You can only join once!');
            return false;
        }

        let keys = Object.keys(this.tournamentData.players || {});
        if (keys.length > 29) {
            alert('We’re only supporting 30 players so far.')
            return false;
        }

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
            this.playerKey = child.push(player).key();
            console.log(this.playerKey);

            this.joined = true;
            localStorage[this._safePath] = this.playerKey;
        }
    }

    ngOnInit() {
      
    }
}