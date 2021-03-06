import {Component, OnInit, EventEmitter, Input, Output} from 'angular2/core';

import { AsArrayPipe } from '../services/as-array.pipe';

import { getLanguagePrefix } from '../language.function';

@Component({
    selector: 'tournamentRounds',
    templateUrl: 'app/dashboard/rounds.component' + getLanguagePrefix() +'.html',
    pipes: [AsArrayPipe]
})

export class RoundsComponent implements OnInit {
    @Input() public rounds: Array<Array<any>>;
    @Input() public players: any;
    @Input() public system: any;
    @Output() public dataChange: EventEmitter<any>;
    @Output() public roundsAction: EventEmitter<string>;

    public nPlayers: number;
    public visibleRound: number;
    public roundrobinRounds: number;

    constructor() {
        this.dataChange = new EventEmitter();
        this.roundsAction = new EventEmitter();

        this.roundsAction
            .subscribe((emit) => {
                if ((emit == 'nextMonrad') || (emit == 'clearLast')) {
                    setTimeout(() => this.visibleRound = this.rounds.length - 1, 500);
                }
            })
    }

    ngOnInit() {
        if (this.system > 0) {
            this.visibleRound = this.rounds.length - 1;
        }
        else {
            this.visibleRound = 0;
        }

        if (this.players) {
            this.roundrobinRounds = Object.keys(this.players).length;
            this.nPlayers = Object.keys(this.players).length;
            if (this.roundrobinRounds % 2 === 0) {
                this.roundrobinRounds--;
            }
        }
        else {
            this.roundrobinRounds = 0;
            this.nPlayers = 0;
        }
    }
}