import 'rxjs/Rx'; // needed to acces .map and other observable rx-stuff

import { bootstrap }    from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { UserDataService } from './services/user-data.service';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, UserDataService]);