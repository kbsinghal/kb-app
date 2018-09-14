import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    CitylistComponent,
    AreaformComponent,
    ArealistComponent,
    EntityformComponent,
    EntitylistComponent,
    EventOrganizerformComponent,
    EventOrganizerlistComponent,
    EventArtistformComponent,
    EventArtistlistComponent,
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
    CityService,
    AreaService,
    EntityService,
    EventOrganizerService,
    EventArtistService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
