import { Form, Select, } from 'antd'
import { IFormSelect } from './form-select.interface';

const FormSelect = (props: IFormSelect) => {
    const { name, label, message, rules, formPattern, required } = props;
    const newMessage = message || `โปรดกรอกข้อมูล${label} !`
    const { Option } = Select;
    return (
        <Form.Item name={name}
            label={label}
            rules={rules || [{ required: required, message: newMessage, pattern: formPattern }]}>
            <Select {...props}>
                {props.options?.map((item, ind) => {
                    return <Option key={ind} value={item.value}>{item.label}</Option>
                })}
            </Select>
        </Form.Item>

    )
}

export default FormSelect