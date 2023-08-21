import { Form, Input } from 'antd'
import { IFormTextArea } from './form-text-area.interface';

export const FormTextArea = (props: IFormTextArea) => {
    const { TextArea } = Input;

    const {
        name,
        label,
        message,
        rules,
        formPattern,
        required
    } = props;

    const newMessage = message || `โปรดกรอกข้อมูล${label} !`
    return (
        <Form.Item
            name={name}
            label={label}
            rules={rules || [{ required: required, message: newMessage, pattern: formPattern }]}
        >
            <TextArea maxLength={50} rows={4} {...props} required={false} />
        </Form.Item >
    )
}
