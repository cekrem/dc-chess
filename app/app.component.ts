import { Component, OnInit, ViewEncapsulation } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TournamentAdminComponent } from './dashboard/tournament-admin.component';
import { TournamentComponent } from './tournament/tournament.component';
import { UserComponent } from './user/user.component';
import { LicenseComponent } from './license/license.component';

import { setTheme } from './theme.function';

    @Component({
        selector: 'app',
        template: '<router-outlet></router-outlet>',
        directives: [ROUTER_DIRECTIVES],
        styleUrls: [setTheme(), '../styles/dc.css'],
        encapsulation: ViewEncapsulation.None
    })

    @RouteConfig([
        {
            path: '/',
            name: 'Home',
            component: HomeComponent,
            useAsDefault: true
        },
        {
            path: '/dashboard/',
            name: 'Dashboard',
            component: DashboardComponent
        },
        {
            path: '/dashboard/:tournamentKey', // this is the key, not the long path
            name: 'TournamentAdmin',
            component: TournamentAdminComponent
        },
        {
            path: '/tournament/:tournamentPath',
            name: 'Tournament',
            component: TournamentComponent
        },
        {
            path: '/user/:user',
            name: 'User',
            component: UserComponent
        },
        {
            path: '/license/',
            name: 'License',
            component: LicenseComponent
        }
    ])

    export class AppComponent implements OnInit {

        constructor() {

        }

        ngOnInit() { }
    }