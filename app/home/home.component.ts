import { Component, OnInit } from 'angular2/core';
import { NgIf } from 'angular2/common';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { UserDataService } from '../services/user-data.service';
import { LicenseComponent } from '../license/license.component';

import { isNorwegian } from '../language.function';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component' + isNorwegian() + '.html',
    directives: [ROUTER_DIRECTIVES, NgIf, LicenseComponent]
})

export class HomeComponent implements OnInit {
    private _router: Router;
    private _safeUserEntry: string;
    private _data: UserDataService;

    public licenseEntry: string;
    public error: string;
    public loading: boolean;
    public loggedIn: boolean;
    public isChrome: boolean;

    constructor(router: Router, data: UserDataService) {
        this._router = router;
        this._data = data;
    }

    ngOnInit() {
        this._data.getAuthAsync()
            .then(auth => {
                if (auth) {
                    this.loggedIn = true;
                }
                else {
                    this.loggedIn = false;
                }
            });

        if (!!window.chrome) {
            this.isChrome = true;
        }
        else {
            this.isChrome = false;
        }
    }

    set userEntry(entry) {
        this._safeUserEntry = entry.replace(/\W+/g, '-').toLowerCase();
    }

    get userEntry() {
        return this._safeUserEntry;
    }

    login(demo?: string) {
        console.log('logging in as ' + this.userEntry);
        this.loading = true;

        if (demo == 'demo') {
            this._data.tryDemo()
                .then(() => this._router.navigate(['/Dashboard']), (error) => {
                    this.error = error;
                    this.loading = null;
                });
        }

        let creds = {
            user: this.userEntry,
            license: this.licenseEntry
        }

        this._data.login(creds)
            .then(() => this._router.navigate(['/Dashboard']), (error) => {
                this.error = error;
                this.loading = null;
            });
    }

    logout() {
        this._data.logout();
        this.loggedIn = false;
    }

    paymentResponse(data) {
        console.log(data);

        this._safeUserEntry = data[0];
        this.licenseEntry = data[1];

        this.login();
    }
}