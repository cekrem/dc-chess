import {Component, OnInit} from 'angular2/core';

import { getLanguagePrefix } from '../language.function';

@Component({
    selector: 'about',
    templateUrl: './app/about/about.component.no.html' // only in norwegian so far
})

export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}