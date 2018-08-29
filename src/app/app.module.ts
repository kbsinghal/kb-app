import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    EventformComponent,
    EventlistComponent,
    CountryformComponent,
    CountrylistComponent,
    StateformComponent,
    StatelistComponent,
    CityformComponent,
    CitylistComponent
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
    EventService,
    CountryService,
    StateService,
    CityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }