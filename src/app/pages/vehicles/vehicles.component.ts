import { Component, OnInit } from '@angular/core';
import { NhtsaService } from '../../services/nhtsa/nhtsa.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.less'],
  providers: [NhtsaService]
})
export class VehiclesComponent implements OnInit {

  public vehicle: object;

  constructor(private nhtsaService: NhtsaService) { }

  ngOnInit() {
  }

  // 5YJXCAE28HF043598
  getVehicleInformation(vin) {
    this.nhtsaService.getVehicleInformation(vin).subscribe(
      res => {
        this.vehicle = res.Results[0];
      }
    );
  }

  onInputCompleted(event) {
    this.getVehicleInformation(event);
  }
}
