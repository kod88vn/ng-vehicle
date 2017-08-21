/* Super awesome component to improve performance on reading an input automatically.
Best used with autocomplete kind of action */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-input-debounce',
  templateUrl: './input-debounce.component.html',
  styleUrls: ['./input-debounce.component.less']
})
export class InputDebounceComponent implements OnInit {

  public value = '';
  public formControl;
  @Input() placeholder: string;
  @Input() minLength: number;
  @Input() maxLength: number;
  @Input() pattern: string;
  @Output() onInputCompleted = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
    const validators = this.composeValidators();
    this.formControl = new FormControl('', validators);

    this.formControl.valueChanges
    .debounceTime(500)
    .subscribe(newValue => {
      this.formControl.markAsTouched({onlySelf: true});
      this.value = newValue;
      if (this.formControl.valid) {
        this.onInputCompleted.emit({
          valid: this.formControl.valid,
          value: this.value
        });
      } else {
        this.onInputCompleted.emit({
          valid: this.formControl.valid,
          value: this.value
        });
      }
    });
  }

  composeValidators() {
    const validators = [Validators.required];

    if (this.minLength) {
      validators.push(Validators.minLength(this.minLength));
    }

    if (this.maxLength) {
      validators.push(Validators.maxLength(this.maxLength));
    }

    return validators;
  }

}
