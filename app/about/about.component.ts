import {Component, OnInit} from 'angular2/core';

import { isNorwegian } from '../language.function';

@Component({
    selector: 'about',
    templateUrl: './app/about/about.component' + isNorwegian() + '.html'
})

export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}