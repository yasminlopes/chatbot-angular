import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {
  FormGroup,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NgModel,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    NgModel,
  ],
  standalone:  true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() public formGroup: FormGroup;
  @Input() public id: string;
  @Input() public label: string;
  @Input() public icon: string;
  @Input() public type: string = 'text'
  @Input() public formControlName: string;
  @Input() public iconLeft: string;
  @Input() public iconRight: string;
  @Input() public placeholder = '';
  @Input() public required: boolean = false;
  @Input() public disabled: boolean = false;

  public inputValue: any;

  onChange: any = (_: any) => {};
  onTouch: any = () => {};

  constructor() {}

  ngOnInit(): void {}

  public get value(): any {
    return this.inputValue ? this.inputValue : null;
  }

  public set value(value) {
    this.onChange(value);
    this.inputValue = value;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
