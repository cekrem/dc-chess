import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';

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
    }/*,
    {
      path: '/user/:user',
      name: 'User',
      component: UserComponent 
    },
    {
        path: 'tournament/:user/:tuid',
        name: 'Tournament',
        component: TournamentComponent
    }*/
])

export class AppComponent implements OnInit {

    constructor() {
        console.log('App initialized!');
     }

    ngOnInit() { }
}