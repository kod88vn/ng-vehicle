import { Routes } from '@angular/router';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { MakesComponent } from './pages/makes/makes.component';

export const appRoutes : Routes = [
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'makes', component: MakesComponent },
    { path: '**', component: VehiclesComponent }
];