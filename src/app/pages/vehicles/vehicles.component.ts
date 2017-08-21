import { Component, OnInit } from '@angular/core';
import { NhtsaService } from '../../services/nhtsa/nhtsa.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.less'],
  providers: [NhtsaService]
})
export class VehiclesComponent implements OnInit {
  isLoading: boolean;

  public vehicle: object;

  constructor(private nhtsaService: NhtsaService) { }

  ngOnInit() {
  }

  // WDDHF5KB6EA877516
  getVehicleInformation(vin) {
    this.isLoading = true;
    this.nhtsaService.getVehicleInformation(vin).subscribe(
      res => {
        this.vehicle = res.Results[0];
        this.isLoading = false;
      }
    );
  }

  onInputCompleted(event) {
    if (event.valid) {
      this.getVehicleInformation(event.value);
    } else {
      this.vehicle = null;
    }
  }
}
