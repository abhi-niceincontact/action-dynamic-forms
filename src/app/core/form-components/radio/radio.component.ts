import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFormFieldConfig } from '../models/form-field.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  template: `
  <div class="w-100-p" [formGroup]="group">
    <label>{{fieldConfig.label}}</label>
    <mat-radio-group  [formControlName]="fieldConfig.name" color="primary">
      <mat-radio-button class="p-16" *ngFor="let option of fieldConfig.options" [value]="option.value">{{option.text}}</mat-radio-button>
    </mat-radio-group>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioComponent {

  @Input() fieldConfig: IFormFieldConfig;
  @Input() group: FormGroup;

  constructor() { }
}
