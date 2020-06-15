import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFormFieldConfig } from '../models/form-field.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
    <mat-form-field class="w-100-p" [formGroup]="group" floatLabel="always" appearance="outline">
      <mat-label>{{fieldConfig.label}}</mat-label>
      <textarea matInput
      [formControlName]="fieldConfig.name"
      [required]="fieldConfig.required"
      autocomplete="off"></textarea>
      <mat-hint align="end">{{fieldConfig.hint}}</mat-hint>
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent {

  @Input() fieldConfig: IFormFieldConfig;
  @Input() group: FormGroup;

  constructor() { }
}
