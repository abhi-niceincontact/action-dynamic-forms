import { Component, AfterViewInit, AfterViewChecked, OnInit } from '@angular/core';
import { IFormFieldConfig } from './core/form-components/models/form-field.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jsonSchema = `[
    {
      "type": "input",
      "label": "First Name",
      "name": "firstName",
      "inputType": "text",
      "required": true,
      "minLength": 1,
      "maxLength": 25,
      "size": "50%"
    },
    {
      "type": "input",
      "label": "Last Name",
      "name": "lastName",
      "inputType": "text",
      "required": true,
      "minLength": 1,
      "maxLength": 25,
      "size": "50%"
    },
    {
      "type": "input",
      "label": "Email",
      "name": "email",
      "inputType": "email",
      "required": false,
      "minLength": 0,
      "maxLength": 50,
      "size": "100%",
      "hint": "Hint: example@test.com"
    },
    {
      "type": "select",
      "label": "Role",
      "name": "role",
      "required": true,
      "options": [
        { "value": "admin", "text": "Admin role"},
        { "value": "user", "text": "User role"}
      ],
      "size": "50%"
    },
    {
      "type": "checkbox",
      "label": "Active User",
      "name": "isActive",
      "required": true,
      "value": true,
      "size": "50%"
    },
    {
      "type": "radio",
      "label": "Show Notification",
      "name": "showNotification",
      "value": true,
      "required": true,
      "options": [
        { "value": true, "text": "Yes"},
        { "value": false, "text": "No"}
      ],
      "size": "100%"
    },
    {
      "type": "textarea",
      "label": "Comments",
      "name": "comments",
      "size": "100%"
    }
  ]`;

  editorOptions: any = { maxLines: 1000, printMargin: false };

  fieldConfig: IFormFieldConfig[];

  fieldConfigs$ = new BehaviorSubject<IFormFieldConfig[]>([]);

  formOutputValue: any;

  constructor() {}

  ngOnInit(): void {
    this.onGenerateForm();
  }

  onEditorTextChange(code) {
    console.log("new code", code);
    if(this.isJSON(code)) {
      this.onGenerateForm();
    }
  }

  onGenerateForm() : void {
    this.fieldConfig = JSON.parse(this.jsonSchema);
    console.log(this.fieldConfig);
    this.fieldConfigs$.next(this.fieldConfig);
  }

  onSubmit(value: any): void {
    this.formOutputValue = value;
  }

  private isJSON(obj: string): boolean {
    try {
      const parsedObj = JSON.parse(obj);
      return true;
    } catch {
      return false;
    }
  }
}
