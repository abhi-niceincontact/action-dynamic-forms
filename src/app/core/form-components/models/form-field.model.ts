export type FormFieldType = 'input' | 'textarea' | 'checkbox' | 'radio' | 'select' | 'button';

export interface TextValuePair {
  value: number | string;
  text: string;
}

export interface IFormFieldConfig {
  type: FormFieldType;
  label?: string;
  name: string;
  inputType?: string;
  options?: TextValuePair[];
  value?: any;
  required?: boolean;
  size?: string;
  minLength?: number;
  maxLength?: number;
  hint?: string;
}
