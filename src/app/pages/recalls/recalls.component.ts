import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NhtsaService } from '../../services/nhtsa/nhtsa.service';

@Component({
  selector: 'app-recalls',
  templateUrl: './recalls.component.html',
  styleUrls: ['./recalls.component.less'],
  providers: [NhtsaService]
})
export class RecallsComponent implements OnInit {

  public recalls;
  public corsWarning;
  public recallProperties;
  public make;
  public model;
  public year;

  constructor(private activatedRoute: ActivatedRoute, private nhtsaService: NhtsaService) {}

  ngOnInit() {
    this.make = this.activatedRoute.snapshot.params.make;
    this.model = this.activatedRoute.snapshot.params.model;
    this.year = this.activatedRoute.snapshot.params.year;

    this.nhtsaService.getRecalls(this.make, this.model, this.year).subscribe(
      res => {
        this.recalls = res.Results;
        console.log(this.recalls);
      },
      err => {
        this.corsWarning = true;
      },
    );

    this.recallProperties = [
      { 
        label: 'Component',
        prop: 'Component'
      },
      { 
        label: 'Conequence',
        prop: 'Conequence'
      },
      { 
        label: 'Notes',
        prop: 'Notes'
      },
      { 
        label: 'Remedy',
        prop: 'Remedy'
      },
      { 
        label: 'Summary',
        prop: 'Summary'
      }
    ];
  }
}
