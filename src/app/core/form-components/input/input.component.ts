import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFormFieldConfig } from '../models/form-field.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <mat-form-field class="w-100-p" [formGroup]="group" floatLabel="always" appearance="outline">
      <mat-label>{{fieldConfig.label}}</mat-label>
      <input matInput
      [formControlName]="fieldConfig.name"
      [type]="fieldConfig.inputType"
      [required]="fieldConfig.required"
      [minLength]="fieldConfig.minLength"
      [maxLength]="fieldConfig.maxLength"
      autocomplete="off">
      <mat-hint align="end">{{fieldConfig.hint}}</mat-hint>
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  @Input() fieldConfig: IFormFieldConfig;
  @Input() group: FormGroup;

  constructor() { }
}
