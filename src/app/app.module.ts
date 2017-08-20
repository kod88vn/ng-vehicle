import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { MakesComponent } from './pages/makes/makes.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { InputDebounceComponent } from './components/input-debounce/input-debounce.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VehiclesComponent,
    MakesComponent,
    VehicleDetailsComponent,
    InputDebounceComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
