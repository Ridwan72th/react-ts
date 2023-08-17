import { SelectProps, FormRule } from "antd"

export interface IFormSelect extends SelectProps {
    name: string
    label: string
    rules?: FormRule[];
    message?: string;
    formPattern?: RegExp
    required?: boolean
}