import { Form, InputNumber, } from 'antd'
import { IFormInputNumber } from './form-input.interface';

const FormInput = (props: IFormInputNumber) => {
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
            <InputNumber
                maxLength={50}
                style={{ width: '100%' }}
                controls={false}
                {...props}
                required={false}
            />
        </Form.Item >
    )
}

export default FormInput