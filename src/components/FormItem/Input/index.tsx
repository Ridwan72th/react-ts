import { Form, Input, } from 'antd'
import { IFormInput } from './form-input.interface';

const FormInput = (props: IFormInput) => {
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
            <Input maxLength={50} {...props} required={false} />
        </Form.Item >
    )
}

export default FormInput