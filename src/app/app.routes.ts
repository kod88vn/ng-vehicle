import { Routes } from '@angular/router';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { MakersComponent } from './pages/makers/makers.component';

export const appRoutes : Routes = [
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'makers', component: MakersComponent },
    { path: '**', component: VehiclesComponent }
];