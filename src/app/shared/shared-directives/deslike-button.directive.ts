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

    this.dislikeIcon();
    console.log(this.onChange);
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

  private dislikeIcon() {
    this.element.nativeElement.setAttribute('class', 'far far-heart');
  }

}
