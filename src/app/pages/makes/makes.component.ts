import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NhtsaService } from '../../services/nhtsa/nhtsa.service';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.less'],
  providers: [NhtsaService]
})
export class MakesComponent implements OnInit {
  notFound: boolean;
  isLoading: boolean;
  vehicles: any = [];
  models: any = [];
  makes: any = [];
  manufacturers;
  year;
  make;
  model;
  years = [];

  constructor(private activatedRoute: ActivatedRoute, private nhtsaService: NhtsaService) {
  }

  ngOnInit() {
    this.make = this.activatedRoute.snapshot.params.make;
    this.model = this.activatedRoute.snapshot.params.model;
    this.year = this.activatedRoute.snapshot.params.year;

    if (this.make && this.model) {
      this.getMakes();
      this.getModels();
      this.getFuelConsumption();
    }

    let currentYear = new Date().getFullYear();
    const startYear = 1980;

    while ( startYear <= currentYear ) {
      this.years.push(currentYear--);
    }

    this.getMakes();
  }

  getMakes() {
    this.isLoading = true;
    this.nhtsaService.getMakes().subscribe(
      res => {
        this.makes = [];
        this.makes = res.Results.map(m => m.Make_Name);
        this.isLoading = false;
      }
    );
  }

  getModels() {
    if (!!this.make && !!this.year) {
      this.nhtsaService.getModels(this.make, this.year).subscribe(
        res => {
          this.models = [];
          this.models = res.Results.map(m => m.Model_Name);
        }
      );
    }
  }

  onYearSelected(event) {
    this.year = event;
    this.getModels();
  }

  onMakeSelected(event) {
    this.make = event;
    this.model = '';
    this.models = [];
    this.getModels();
  }

  onModelSelected(event) {
    this.model = event;
    this.getFuelConsumption();
  }

  getFuelConsumption() {
    this.isLoading = true;
    this.nhtsaService.getFuelConsumption(this.make, this.model).subscribe(
      res => {
        this.vehicles = [];
        this.vehicles = this.vehicles.concat(res);
        this.isLoading = false;

        if (!this.vehicles.length) {
          this.notFound = true;
        } else {
          this.notFound = false;
        }
      }
    );
  }
}
