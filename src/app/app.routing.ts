import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventformComponent } from './eventform/eventform.component';

const appRoutes: Routes = [
  { path: '',  pathMatch: 'full' , component: EventlistComponent },
  { path: 'eventform', component: EventformComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
