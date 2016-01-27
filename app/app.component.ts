import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TournamentAdminComponent } from './dashboard/tournament-admin.component';

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
        // TODO: Remove this from here and include a router outlet in dashboard route?
        path: '/dashboard/:tournamentId',
        name: 'TournamentAdmin',
        component: TournamentAdminComponent
    }
])

export class AppComponent implements OnInit {

    constructor() {

    }

    ngOnInit() { }
}