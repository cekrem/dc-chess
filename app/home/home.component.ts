import {Component, OnInit} from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { UserDataService } from '../services/user-data.service';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {
    private _router: Router;
    private _safeUserEntry: string;
    private _data: UserDataService;

    public licenseEntry: string;

    constructor(router: Router, data: UserDataService) {
        this._router = router;
        this._data = data;
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
        if (this.licenseEntry == btoa(this.userEntry)
            && this.licenseEntry !== '') {
            console.log('Match!');
            return true;
        }
        else {
            return false;
        }
    }

    login() {
        console.log('logging in as ' + this.userEntry);

        let creds = {
            user: this.userEntry,
            license: this.licenseEntry
        }
        
        this._data.login(creds);

        this._router.navigate(['/Dashboard']);
    }
}