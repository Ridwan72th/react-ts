import { InputProps, FormRule } from "antd"

export interface IFormInput extends InputProps {
    name: string
    label: string
    rules?: FormRule[];
    message?: string;
    formPattern?: RegExp
}