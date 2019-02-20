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
 import { EventArtistlistComponent } from './eventartistlist/eventartistlist.component';
 import { EventArtistformComponent } from './eventartistform/eventartistform.component';
 import { EventBannerlistComponent } from './eventbannerlist/eventbannerlist.component';
 import { EventBannerformComponent } from './eventbannerform/eventbannerform.component';
 import { UserlistComponent } from './userlist/userlist.component';
 import { UserformComponent } from './userform/userform.component';
 import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { UploadComponent } from './upload/upload.component';
import { CounterComponent } from './counter/counter.component';
//import { UploadFilesComponent } from './upload-files/upload-files.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';




const appRoutes: Routes = [
 { path: 'eventlist',  pathMatch: 'full' , component: EventlistComponent },
 { path: 'countrylist',  pathMatch: 'full' , component: CountrylistComponent },
 { path: 'statelist',  pathMatch: 'full' , component: StatelistComponent },
 { path: 'citylist',  pathMatch: 'full' , component: CitylistComponent },
 { path: 'arealist',  pathMatch: 'full' , component: ArealistComponent },
 { path: 'entitylist',  pathMatch: 'full' , component: EntitylistComponent },
 { path: 'eventorganizerlist',  pathMatch: 'full' , component: EventOrganizerlistComponent },
 { path: 'eventartistlist',  pathMatch: 'full' , component: EventArtistlistComponent },
 { path: 'eventbannerlist',  pathMatch: 'full' , component: EventBannerlistComponent },
 { path: 'userlist',  pathMatch: 'full' , component: UserlistComponent },

 { path: 'eventform', component: EventformComponent },
 { path: 'countryform', component: CountryformComponent },
 { path: 'stateform', component: StateformComponent },
 { path: 'cityform', component: CityformComponent },
 { path: 'areaform', component: AreaformComponent },
 { path: 'entityform', component: EntityformComponent },
 { path: 'eventorganizerform', component: EventOrganizerformComponent },
 { path: 'eventartistform', component: EventArtistformComponent },
 { path: 'eventbannerform', component: EventBannerformComponent },
 { path: 'userform', component: UserformComponent },
 /////{ path: '', component: HomeComponent},
 //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: 'login', component: LoginComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'uploadfiles', component: UploadfilesComponent },
  //{ path: '', component: HomeComponent, pathMatch: 'full' },
  ////{ path: 'counter', component: CounterComponent },
  //    { path: 'fetch-data', component: FetchDataComponent },
 
    //{ path: '**', redirectTo: '' } // otherwise redirect to home
  { path: '**', component: HomeComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
