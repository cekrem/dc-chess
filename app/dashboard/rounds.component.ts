import {Component, OnInit, EventEmitter, Input, Output} from 'angular2/core';

import { AsArrayPipe } from '../services/as-array.pipe';

@Component({
    selector: 'tournamentRounds',
    templateUrl: 'app/dashboard/rounds.component.html',
    pipes: [AsArrayPipe]
})

export class RoundsComponent implements OnInit {
    @Input() public rounds: Array<Array<any>>;
    @Input() public players: any;
    @Input() public system: string;
    @Output() public dataChange: EventEmitter<any>
    @Output() public roundsAction: EventEmitter<string>
    
    public visibleRound: number;
    public monradRounds: number;

    constructor() {
        this.dataChange = new EventEmitter();
        this.roundsAction = new EventEmitter();
     }

    ngOnInit() {
        this.visibleRound = 0;
        this.monradRounds = 4;
     }
}