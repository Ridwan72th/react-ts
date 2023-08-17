import { Button, Col, Form, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import FormInput from 'src/components/FormItem/Input';
import FormSelect from 'src/components/FormItem/Select';

const Home = () => {
    const navigate = useNavigate()

    const handleFinish = (values: any) => {
        console.log("finish ::", values);

    }
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <Form onFinish={handleFinish} layout="vertical">
                <Row gutter={12}>
                    <Col xs={24} lg={12}>
                        <FormInput
                            name={"name"} label={'ชื่อ'} required />
                    </Col>
                    <Col xs={24} lg={12}>
                        <FormSelect
                            name={"gender"} label={'เพศ'} required
                            options={[{ label: "ชาย", value: "male" }, { label: "หญิง", value: "female" }]} />
                    </Col>
                    <Col span={24}>
                        <Row gutter={12} justify="center">
                            <Col>
                                <Button htmlType="submit" type="primary">
                                    บันทึก
                                </Button>
                            </Col>
                            <Col>
                                <Button onClick={goBack}>
                                    ยกเลิก
                                </Button></Col>
                        </Row>
                    </Col>
                </Row>

            </Form>

        </div >
    )
}

export default Home