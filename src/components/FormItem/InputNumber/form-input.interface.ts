import { InputNumberProps, FormRule } from "antd"

export interface IFormInputNumber extends InputNumberProps {
    name: string
    label: string
    rules?: FormRule[];
    message?: string;
}