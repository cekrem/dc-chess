import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';

import { getLanguagePrefix } from '../language.function';

@Component({
    selector: 'tournamentInfo',
    templateUrl: 'app/dashboard/info.component'+ getLanguagePrefix() +'.html'
})

export class InfoComponent implements OnInit {
    @Input() public tournament: any;
    @Output() public dataChange: EventEmitter<any>;
    
    constructor() {
        this.dataChange = new EventEmitter();
     }
        
    ngOnInit() {
        
     }
}