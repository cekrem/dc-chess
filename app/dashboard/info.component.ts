import {Component, EventEmitter, Input, OnInit, Output} from 'angular2/core';

import {getLanguagePrefix} from '../language.function';

@Component({
    selector: 'tournamentInfo',
    templateUrl: 'app/dashboard/info.component'+ getLanguagePrefix() +'.html'
})

export class InfoComponent implements OnInit {
    public root: string
    @Input() public tournament: any;
    @Output() public dataChange: EventEmitter<any>;

    constructor() {
        const {location} = window
        const {protocol, hostname, port} = location
        this.dataChange = new EventEmitter();
        this.root = `${protocol}//${hostname}:${port}/tournaments/`
    }

    ngOnInit() {

    }
}