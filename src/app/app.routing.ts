import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
 import { EventlistComponent } from './eventlist/eventlist.component';
 import { EventformComponent } from './eventform/eventform.component';
 import { CountrylistComponent } from './countrylist/countrylist.component';
 import { CountryformComponent } from './countryform/countryform.component';
 import { StatelistComponent } from './statelist/statelist.component';
 import { StateformComponent } from './stateform/stateform.component';
 import { CitylistComponent } from './citylist/citylist.component';
 import { CityformComponent } from './cityform/cityform.component';
 import { ArealistComponent } from './arealist/arealist.component';
 import { AreaformComponent } from './areaform/areaform.component';
 import { EntitylistComponent } from './entitylist/entitylist.component';
 import { EntityformComponent } from './entityform/entityform.component';

const appRoutes: Routes = [
 //{ path: '',  pathMatch: 'full' , component: EventlistComponent },
 //{ path: 'eventform', component: EventformComponent },
// { path: '',  pathMatch: 'full' , component: CountrylistComponent },
// { path: 'countryform', component: CountryformComponent },
// { path: '',  pathMatch: 'full' , component: StatelistComponent },
// { path: 'stateform', component: StateformComponent },
//  { path: '',  pathMatch: 'full' , component: CitylistComponent },
//  { path: 'cityform', component: CityformComponent },
// { path: '',  pathMatch: 'full' , component: ArealistComponent },
// { path: 'areaform', component: AreaformComponent },
 { path: '',  pathMatch: 'full' , component: EntitylistComponent },
 { path: 'entityform', component: EntityformComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
