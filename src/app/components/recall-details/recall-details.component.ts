import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recall-details',
  templateUrl: './recall-details.component.html',
  styleUrls: ['./recall-details.component.less']
})
export class RecallDetailsComponent implements OnInit {

  @Input() recall: object;
  public recallProperties;

  constructor() { }

  ngOnInit() {
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
