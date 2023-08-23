import { Form, Input, } from 'antd'
import { transformLabel } from 'src/helpers';
import { IFormInput } from './form-input.interface';

export const FormInput = (props: IFormInput) => {
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
            label={transformLabel(label, required)}
            rules={rules || [{ required: required, message: newMessage, pattern: formPattern }]}
        >
            <Input maxLength={50} {...props} required={false} />
        </Form.Item >
    )
}

