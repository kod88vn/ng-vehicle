import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class NhtsaService {

  constructor(private http: Http) { }

  getVehicleInformation(vin): Observable<any> {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vin}?format=json`;
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    );
  }

  getManufacturers(): Observable<any> {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json`;
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    );
  }

  getMakes(): Observable<any> {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`;
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    );
  }

  getModels(make, year): Observable<any> {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`;
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    );
  }

  getRecalls(make, model, year): Observable<any> {
    const url = `https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/${year}/make/${make}/model/${model}?format=json`;
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    );
  }

  getFuelConsumption(make, model): Observable<any> {
    const url = `http://www.fueleconomy.gov/ws/rest/ympg/shared/vehicles?make=${make}&model=${model}`;
    return this.http.get(url).map(
      res => {
        return res.json() ? res.json().vehicle : [];
      }
    );
  }
}
