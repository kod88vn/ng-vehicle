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
        const data = res.json();

        return data;
      }
    );
  }

}
