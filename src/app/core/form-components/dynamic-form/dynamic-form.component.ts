import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IFormFieldConfig } from '../models/form-field.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  exportAs: 'DynamicForm',
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form" (submit)="onSubmit($event)">
      <div  class="w-100-p" fxLayout="row wrap" fxLayoutAlign="start start">
        <div [fxFlex]="field.size" *ngFor="let field of fieldConfigs" class="pr-16">
          <ng-container appDynamicField [fieldConfig]="field" [group]="form">
          </ng-container>
        </div>
      </div>
      <div class="w-100-p pr-16" fxLayout="row" fxLayoutAlign="end center" fxLayoutGap="8px">
        <button type="button" mat-button (click)="onClear()">Clear</button>
        <button type="submit" mat-raised-button color="primary">Ok</button>
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnChanges {

  @Input() fieldConfigs: IFormFieldConfig[] = [];
  @Output() submit = new EventEmitter<any>();

  form: FormGroup;

  get formValue() {
    return this.form.value;
  }

  constructor(private fb: FormBuilder) { }

  ngOnChanges(): void {
    this.form = this.createFormControls();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.formValue);
  }

  onClear(): void {
    this.form.reset();
  }

  private createFormControls(): FormGroup {
    const fg = this.fb.group({});
    this.fieldConfigs.forEach(field => {
      if(field.type === 'button') {
        return;
      }
      const control = this.fb.control(field.value);
      fg.addControl(field.name, control);
    });
    return fg;
  }
}
