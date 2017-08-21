import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {
  @Input() options;
  @Input() maxlength;
  @Input() placeholder;
  @Input() value;
  @Output() onSelected = new EventEmitter<object>();
  formControl: FormControl;
  filteredOptions: any;

  constructor() {
    this.formControl = new FormControl('', [Validators.required]);
    this.filteredOptions = this.formControl.valueChanges
    .startWith(null)
    .map(text => this.filterOptions(text));
  }

  filterOptions(val: string) {
    // if (!val && this.options && this.options.length > 10000) {
    //   return false;
    // }

    return val ? this.options.filter(s => s.toString().toUpperCase().indexOf(val.toString().toUpperCase()) === 0)
               : this.options;
  }

  ngOnInit() {
    // this.formControl.valueChanges
    // .debounceTime(500)
    // .subscribe(newValue => {
    //   this.formControl.markAsTouched({onlySelf: true});
    //   if (this.formControl.valid) {
    //     this.onSelected.emit(newValue);
    //   }
    // });
  }

  onClick(text) {
    this.onSelected.emit(text);
  }

}
