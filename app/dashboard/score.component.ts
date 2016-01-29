import {Component, OnInit, Input} from 'angular2/core';

import { AsArrayPipe } from '../services/as-array.pipe';

@Component({
    selector: 'tournamentScore',
    templateUrl: 'app/dashboard/score.component.html',
    pipes: [AsArrayPipe]
})

export class ScoreComponent implements OnInit {
    @Input() public players: any;
    @Input() public playedMatches: Array<number>;

    constructor() { }

    ngOnInit() { }
}