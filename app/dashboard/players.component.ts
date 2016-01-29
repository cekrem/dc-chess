import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';

import {AsArrayPipe} from '../services/as-array.pipe';

@Component({
    selector: 'tournamentPlayers',
    templateUrl: 'app/dashboard/players.component.html',
    pipes: [AsArrayPipe]
})

export class PlayersComponent implements OnInit {
    private _timeout: any;

    @Input() public players: any;
    @Input() public canAdd: boolean;

    @Output() public playerAdd: EventEmitter<any>;
    @Output() public playerDelete: EventEmitter<any>;

    public confirmKey: string;

    constructor() {
        this.playerAdd = new EventEmitter();
        this.playerDelete = new EventEmitter();

        this.confirmKey = '';
    }

    addPlayer(playerName) {
        let keys = Object.keys(this.players || {});
        let player = { name: playerName };
        let duplicate = false;

        keys.forEach(key => {
            if (this.players[key].name == playerName) {
                duplicate = true;
            }
        });
        

        if (duplicate) {
            this.addPlayer(playerName + '*');
        }
        else {
            this.playerAdd.emit(player);
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

        this.playerDelete.emit(key);
        return false;
    }

    ngOnInit() {

    }
}