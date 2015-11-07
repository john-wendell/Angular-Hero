import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {Router} from 'angular2/router';

export class Route {
  constructor(
    public path:string,
    public as:string,
    public component:any ) { }
}

export var Routes = {
  dashboard: new Route('/', 'Dashboard', DashboardComponent ),
  heroes: new Route('/heroes', 'Heroes', HeroesComponent ),
  detail: new Route('/detail/:id', 'Detail', HeroDetailComponent )
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
