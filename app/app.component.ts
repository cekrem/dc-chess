import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TournamentAdminComponent } from './dashboard/tournament-admin.component';
import { SearchComponent } from './search/search.component';
import { TournamentComponent } from './tournament/tournament.component';
import { UserComponent } from './user/user.component';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
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
        path: '/search',
        name: 'Search',
        component: SearchComponent
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
    }
])

export class AppComponent implements OnInit {

    constructor() {

    }

    ngOnInit() { }
}