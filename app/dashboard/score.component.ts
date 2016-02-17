import {Component, OnInit, Input} from 'angular2/core';

import { AsArrayPipe } from '../services/as-array.pipe';

import { isNorwegian } from '../language.function';

@Component({
    selector: 'tournamentScore',
    templateUrl: 'app/dashboard/score.component' + isNorwegian() +'.html',
    pipes: [AsArrayPipe]
})

export class ScoreComponent implements OnInit {
    @Input() public players: any;
    @Input() public playedMatches: Array<number>;
    @Input() public rounds: Array<Array<any>>;

    public showFullscreen: boolean;

    constructor() {
        
    }

    fullscreen() {
        setTimeout(() => this.showFullscreen = true, 5);
        window.scrollTo(0,0);
    }
    ngOnInit() { }
}