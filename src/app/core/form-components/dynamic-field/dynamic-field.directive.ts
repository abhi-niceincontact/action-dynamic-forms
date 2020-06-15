import { Directive, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { IFormFieldConfig } from '../models/form-field.model';
import { FormGroup } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { RadioComponent } from '../radio/radio.component';
import { SelectComponent } from '../select/select.component';

const componentMapper = {
  input: InputComponent,
  textarea: TextareaComponent,
  checkbox: CheckboxComponent,
  radio: RadioComponent,
  select: SelectComponent
}

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() fieldConfig: IFormFieldConfig;
  @Input() group: FormGroup;

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.fieldConfig.type]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.fieldConfig = this.fieldConfig;
    this.componentRef.instance.group = this.group;
  }
}
