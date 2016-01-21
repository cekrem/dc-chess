import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html'
})

export class HomeComponent implements OnInit {
    public userEntry;
    public licenseEntry;
    
    constructor() { }

    ngOnInit() { }
    
    licenseMatch() {
        if(this.licenseEntry == btoa(this.userEntry)) {
            console.log('Match!');
            return true;
        }
        else {
            console.log('No match!');
            return false;
        }
    }
}