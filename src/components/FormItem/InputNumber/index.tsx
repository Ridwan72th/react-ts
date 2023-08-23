import { Form, InputNumber, } from 'antd'
import { transformLabel } from 'src/helpers';
import { IFormInputNumber } from './form-input.interface';

export const FormInputNumber = (props: IFormInputNumber) => {
    const {
        name,
        label,
        message,
        rules,
        required
    } = props;

    const newMessage = message || `โปรดกรอกข้อมูล${label} !`

    return (
        <Form.Item
            name={name}
            label={transformLabel(label, required)}
            rules={rules || [{ required: required, message: newMessage }]}
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
