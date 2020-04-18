import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const CUSTOM_INPUT_DATE_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TypeMonthDirective),
  multi: true
};
/**
 * Diretiva que eu criei alguns meses atrás, aproveitei-a para inserir neste projeto.
 * @export TypeMonthDirective
 * @implements {ControlValueAccessor}
 * @author lucas.tiago
 */
@Directive({
  selector: '[typeMonthDirective]',
  providers: [CUSTOM_INPUT_DATE_CONTROL_VALUE_ACCESSOR]
})

export class TypeMonthDirective implements ControlValueAccessor {
  onChange: any;
  onTouched: any;
  isDisabled: boolean;

  constructor(
    private element: ElementRef,
  ) {
    this.defineMonthType();
    this.elementsModifier();
  }

  writasdasdeValue(value: string): void {
    const regxDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    setTimeout(() => {
      if (value && regxDate.test(value) && this.onChange) {
        const dateUs = this.brParaUs(value);
        this.onChange(value);
        this.element.nativeElement.value = dateUs;
      } else if (this.onChange) {
        this.onChange(value);
        this.element.nativeElement.value = value;
      }
    });
  }
  writeValue(value: string): void {
    const regxDate = /^((0[1-9])|(1[0-2]))\/(\d{4})$/g;
    setTimeout(() => {
      if (value && regxDate.test(value) && this.onChange) {
        const dateUs = this.brParaUs(value);
        this.onChange(value);
        this.element.nativeElement.value = dateUs;
      } else if (this.onChange) {
        this.onChange(value);
        this.element.nativeElement.value = value;
      }
    });
  }

  private brParaUs(value: string) {
    const { month, year } = { month: value.split('/')[0], year: value.split('/')[1] };
    return `${year}-${month}`;
  }

  @HostListener('change', ['$event'])
  onChangeEvent(event: any) {
    const formatedDate = event.target.value;
    if (this.onChange) {
      const newDate = formatedDate ? formatedDate.split('-')[1] + '/' + formatedDate.split('-')[0] : null;
      this.onChange(newDate);
    }
  }

  elementsModifier() {
    this.defineMaster();
  }

  private defineMaster() {
    if (!this.element.nativeElement.parentElement.classList.contains('input-group')) {
      const newInputGroupElement = document.createElement('div');
      const elementParent = this.element.nativeElement.parentNode;

      newInputGroupElement.classList.add('input-group');
      elementParent.replaceChild(newInputGroupElement, this.element.nativeElement);
      newInputGroupElement.appendChild(this.element.nativeElement);
    }

    this.dateIconCreate();
  }

  private dateIconCreate() {
    const groupElement = document.createElement('div');
    const spanElement = document.createElement('span');
    const iconElement = document.createElement('i');
    const elementParent = this.element.nativeElement.parentNode;

    groupElement.classList.add('input-group-prepend');
    spanElement.classList.add('input-group-text');
    iconElement.classList.add('far');
    iconElement.classList.add('fa-calendar-alt');

    spanElement.append(iconElement);
    groupElement.append(spanElement);
    elementParent.appendChild(groupElement);
  }

  defineMonthType() {
    if (this.element.nativeElement.getAttribute('type') !== 'month') {
      this.element.nativeElement.setAttribute('type', 'month');
    }
    this.element.nativeElement.setAttribute('max', '9999-12');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.element.nativeElement.disabled = isDisabled;
  }
}
