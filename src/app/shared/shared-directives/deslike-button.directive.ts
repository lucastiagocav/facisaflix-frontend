import { Directive, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[deslikeButtonDirective]'
})
export class DeslikeButtonDirective implements ControlValueAccessor {
  onChange: any;
  onTouched: any;
  isDisabled: boolean;

  constructor(private element: ElementRef) {
  }

  writeValue() {
    console.log('ON CHANGE: ', this.onChange);
    console.log('ON TOUCHED: ', this.onTouched);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
