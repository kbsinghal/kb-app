import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers/ake-backend';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';

import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertService} from './services/alert.service';
import {  AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './app.material.module';
import { EventformComponent } from './eventform/eventform.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventService } from './services/event.service';
import { CountryformComponent } from './countryform/countryform.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { CountryService } from './services/country.service';
import { StateformComponent } from './stateform/stateform.component';
import { StatelistComponent } from './statelist/statelist.component';
import { StateService } from './services/state.service';
import { CityformComponent } from './cityform/cityform.component';
import { CitylistComponent } from './citylist/citylist.component';
import { CityService } from './services/city.service';
import { AreaformComponent } from './areaform/areaform.component';
import { ArealistComponent } from './arealist/arealist.component';
import { AreaService } from './services/area.service';
import { EntityformComponent } from './entityform/entityform.component';
import { EntitylistComponent } from './entitylist/entitylist.component';
import { EntityService } from './services/entity.service';
import { EventOrganizerformComponent } from './eventorganizerform/eventorganizerform.component';
import { EventOrganizerlistComponent } from './eventorganizerlist/eventorganizerlist.component';
import { EventOrganizerService } from './services/eventorganizer.service';
import { EventArtistformComponent } from './eventartistform/eventartistform.component';
import { EventArtistlistComponent } from './eventartistlist/eventartistlist.component';
import { EventArtistService } from './services/eventartist.service';
import { UserformComponent } from './userform/userform.component';
import { UserlistComponent } from './userlist/userlist.component';

import { EventBannerformComponent } from './eventbannerform/eventbannerform.component';
import { EventBannerlistComponent } from './eventbannerlist/eventbannerlist.component';
import { EventBannerService } from './services/eventbanner.service';
import { FileService } from './services/files.services';

//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
//import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UploadComponent } from './upload/upload.component';
//import { DndDirective } from './upload/upload.directive';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
///import { UploadFilesComponent } from './uploadfiles/uploadfiles.component';


import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective, // kb
    EventformComponent,
    EventlistComponent,
    CountryformComponent,
    CountrylistComponent,
    StateformComponent,
    StatelistComponent,
    CityformComponent,
    CitylistComponent,
    AreaformComponent,
    ArealistComponent,
    EntityformComponent,
    EntitylistComponent,
    EventOrganizerformComponent,
    EventOrganizerlistComponent,
    EventArtistformComponent,
    EventArtistlistComponent,
    AlertComponent,
    LoginComponent,
    HomeComponent,
    UserformComponent,
    UserlistComponent,
    EventBannerformComponent,
    EventBannerlistComponent,
    //NavMenuComponent,
    CounterComponent,
    //FetchDataComponent,
    UploadComponent,
    UploadfilesComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    Routing,
    MatToolbarModule
  ],
   providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    EventService,
    CountryService,
    StateService,
    CityService,
    AreaService,
    EntityService,
    EventOrganizerService,
    EventArtistService,
    AlertService,
    UserService,
    EventBannerService,
    AuthenticationService,
    FileService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
 // provider used to create fake backend
 //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
