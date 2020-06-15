import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFormFieldConfig } from '../models/form-field.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  template: `
  <div class="w-100-p p-16" [formGroup]="group">
    <mat-checkbox [formControlName]="fieldConfig.name" color="primary">
      {{fieldConfig.label}}
    </mat-checkbox>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

  @Input() fieldConfig: IFormFieldConfig;
  @Input() group: FormGroup;

  constructor() { }
}
