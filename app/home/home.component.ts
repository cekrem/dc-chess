import {Component, OnInit} from 'angular2/core';
import { NgIf } from 'angular2/common';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { UserDataService } from '../services/user-data.service';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES, NgIf]
})

export class HomeComponent implements OnInit {
    private _router: Router;
    private _safeUserEntry: string;
    private _data: UserDataService;

    public licenseEntry: string;
    public loading: boolean;

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
        if (this.licenseEntry == btoa(this.userEntry + 'dc')
            && this.licenseEntry.length > 3) {
            console.log('Match!');
            return true;
        }
        else {
            return false;
        }
    }

    login(demo: string) {
        console.log('logging in as ' + this.userEntry);
        this.loading = true;
        
        if (!demo) {
            var creds = {
                user: this.userEntry,
                license: this.licenseEntry
            }
        }

        this._data.login(creds)
            .then(() => this._router.navigate(['/Dashboard']), (error)=> {
                alert(error);
                this.loading = null;
            });
    }
}