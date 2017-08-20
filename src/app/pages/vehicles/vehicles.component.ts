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
    this.getVehicleInformation();
  }

  getVehicleInformation() {
    this.nhtsaService.getVehicleInformation('5YJXCAE28HF043598').subscribe(
      res => {
        this.vehicle = res.Results[0];
      }
    );
  }

}
