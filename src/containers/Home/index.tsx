import { Button, Col, Form, Row } from 'antd'
import { useNavigate } from 'react-router-dom';
import {
    FormInput,
    FormInputNumber,
    FormSelect,
    FormTextArea,
} from 'src/components/FormItem';
import { ModalMethod, } from 'src/components';

const Home = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm();

    const handleFinish = (values: any) => {
        console.log("finish ::", values);
    }
    const goBack = () => {
        navigate(-1)
    }



    return (
        <div className="flex justify-center relative">
            <div className='bg-aj-boy absolute top-0 w-full h-full z-1' />
            <div className="w-[880px] p-5 z-10">
                <section>
                    <div className='p-5 flex flex-col gap-3'>
                        <span className='text-3xl text-primary'>
                            แจ้งปัญหาการแลกของพรีเมี่ยมผ่านอุ่นใจ
                        </span>
                        <span className='text-lg text-gray1 '>
                            กรอกข้อมูลให้ครบถ้วน เพื่อให้เจ้าหน้าที่ตรวจสอบและแจ้งผลกลับทาง SMS
                        </span>
                    </div>

                </section>
                <Form onFinish={handleFinish} layout="vertical" form={form}>
                    <Row gutter={12}>
                        <Col xs={24} lg={12}>
                            <FormInput
                                name={"name"} label={'ชื่อ'} required
                            />
                        </Col>
                        <Col xs={24} lg={12}>
                            <FormSelect
                                name={"gender"} label={'เพศ'} required
                                options={[{ label: "ชาย", value: "male" }, { label: "หญิง", value: "female" }]} />
                        </Col>
                        <Col xs={24} lg={12}>
                            <FormTextArea name={'desc'} label={'คำอธิบาย'} required />
                        </Col>
                        <Col xs={24} lg={12}>
                            <FormInputNumber
                                name={"number"} label={'จำนวน'} required
                            />
                        </Col>
                        <Col span={24}>
                            <Row gutter={12} justify="center">
                                <Col>
                                    <Button htmlType="submit" type="primary" >
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
        </div >
    )
}

export default Home