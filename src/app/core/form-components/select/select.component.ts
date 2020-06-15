import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFormFieldConfig } from '../models/form-field.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
    <mat-form-field class="w-100-p" [formGroup]="group" floatLabel="always" appearance="outline">
      <mat-label>{{fieldConfig.label}}</mat-label>
      <mat-select [formControlName]="fieldConfig.name" [required]="fieldConfig.required">
        <mat-option *ngFor="let option of fieldConfig.options" [value]="option.value">
          {{option.text}}
        </mat-option>
      </mat-select>
      <mat-hint align="end">{{fieldConfig.hint}}</mat-hint>
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

  @Input() fieldConfig: IFormFieldConfig;
  @Input() group: FormGroup;

  constructor() { }
}
