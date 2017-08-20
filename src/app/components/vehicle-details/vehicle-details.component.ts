/* Cool component to display vehicle details */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.less']
})
export class VehicleDetailsComponent implements OnInit {

  @Input() vehicle: object;

  public vehicleProperties: any;
  
  constructor() { }

  ngOnInit() {
    // Use this to populate what kind of properties to display.
    this.vehicleProperties = [
      { 
        label: 'Body Class',
        prop: 'BodyClass'
      },
      { 
        label: 'Body Type',
        prop: 'NCSABodyType'
      },
      { 
        label: 'Primary Fuel Type',
        prop: 'FuelTypePrimary'
      },
      { 
        label: 'Doors',
        prop: 'Doors'
      },
      { 
        label: 'Engine Configuration',
        prop: 'EngineConfiguration'
      },
      { 
        label: 'Engine Cylinders',
        prop: 'EngineCylinders'
      },
      { 
        label: 'Other Engine Information',
        prop: 'OtherEngineInfo'
      },
      { 
        label: 'Steering Location',
        prop: 'SteeringLocation'
      },
      { 
        label: 'Restraint System Information',
        prop: 'OtherRestraintSystemInfo'
      },
      { 
        label: 'Country of Origin',
        prop: 'PlantCountry'
      },
      { 
        label: 'Series',
        prop: 'Series'
      },
      { 
        label: 'Body Type',
        prop: 'NCSABodyType'
      },
      { 
        label: 'Gross Vehicle Weight Rating',
        prop: 'GVWR'
      },
    ];
  }

}
