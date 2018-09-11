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
 import { EventOrganizerlistComponent } from './eventorganizerlist/eventorganizerlist.component';
 import { EventOrganizerformComponent } from './eventorganizerform/eventorganizerform.component';

const appRoutes: Routes = [
 { path: 'eventlist',  pathMatch: 'full' , component: EventlistComponent },
 { path: 'eventform', component: EventformComponent },
 { path: 'countrylist',  pathMatch: 'full' , component: CountrylistComponent },
 { path: 'countryform', component: CountryformComponent },
 { path: 'statelist',  pathMatch: 'full' , component: StatelistComponent },
 { path: 'stateform', component: StateformComponent },
 { path: 'citylist',  pathMatch: 'full' , component: CitylistComponent },
 { path: 'cityform', component: CityformComponent },
 { path: 'arealist',  pathMatch: 'full' , component: ArealistComponent },
 { path: 'areaform', component: AreaformComponent },
 { path: 'entitylist',  pathMatch: 'full' , component: EntitylistComponent },
 { path: 'entityform', component: EntityformComponent },
 { path: 'eventorganizerlist',  pathMatch: 'full' , component: EventOrganizerlistComponent },
 { path: 'eventorganizerform', component: EventOrganizerformComponent }];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
