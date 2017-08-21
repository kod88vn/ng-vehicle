import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-fuel-details',
  templateUrl: './vehicle-fuel-details.component.html',
  styleUrls: ['./vehicle-fuel-details.component.less']
})
export class VehicleFuelDetailsComponent implements OnInit {
  @Input() vehicles;
  vfProperties: { label: string; prop: string; }[];

  constructor() { }

  ngOnInit() {
    this.vfProperties = [
      {
        label: 'Class',
        prop: 'VClass'
      },
      {
        label: 'City Rated',
        prop: 'city08'
      },
      {
        label: 'Highway Rated',
        prop: 'highway08'
      },
      {
        label: 'Drive Type',
        prop: 'drive'
      },
      {
        label: 'Cylinders',
        prop: 'cylinders'
      },
      {
        label: 'Engine Displacement ',
        prop: 'displ'
      },
      {
        label: 'Fuel Type',
        prop: 'fuelType1'
      },
      {
        label: 'Transmission',
        prop: 'trany'
      },
      {
        label: 'Fuel Score',
        prop: 'feScore'
      },
    ];
  }

}
