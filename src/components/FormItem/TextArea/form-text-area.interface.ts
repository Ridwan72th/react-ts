import { FormRule } from "antd"
import { TextAreaProps } from "antd/es/input/TextArea";

export interface IFormTextArea extends TextAreaProps {
    name: string
    label: string
    rules?: FormRule[];
    message?: string;
    formPattern?: RegExp
}