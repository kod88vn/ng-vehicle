import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { MakersComponent } from './pages/makers/makers.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VehiclesComponent,
    MakersComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
