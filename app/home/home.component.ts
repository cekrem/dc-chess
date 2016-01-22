import {Component, OnInit} from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {
    private _router: Router;
    private _safeUserEntry: string;
    
    public licenseEntry: string;
    
    constructor(r: Router) {
        this._router = r;
     }

    ngOnInit() { }
    
    set userEntry(entry) {
        this._safeUserEntry = entry.replace(/\W+/g, '-').toLowerCase();
        console.log(this._safeUserEntry);
    }
    
    get userEntry() {
        return this._safeUserEntry;
    }
    
    licenseMatch() {
        if(this.licenseEntry == btoa(this.userEntry)
            && this.licenseEntry !== '') {
            console.log('Match!');
            return true;
        }
        else if (this.userEntry == 'demo') {
            console.log('Demo mode!');
            return true;
        }
        else {
            console.log('No match!');
            return false;
        }
    }
    
    login() {
        if(this.userEntry == 'demo') {
            // do something clever
        }
 
        console.log('logging in as ' + this.userEntry);
        
        let creds = {
            user: this.userEntry,
            license: this.licenseEntry
        }
        
        this._router.navigate(['/Dashboard', {user: this.userEntry }]);
    }
}