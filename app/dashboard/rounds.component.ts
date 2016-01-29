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
    @Output() public dataChange: EventEmitter<any>
    @Output() public roundsAction: EventEmitter<string>

    constructor() {
        this.dataChange = new EventEmitter();
        this.roundsAction = new EventEmitter();
     }

    ngOnInit() { }
}