import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.less']
})
export class VehicleDetailsComponent implements OnInit {

  @Input() vehicle: object;
  
  constructor() { }

  ngOnInit() {
    console.log(this.vehicle);
  }

}
