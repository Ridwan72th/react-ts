import { Button, Col, Form, Row } from "antd"
import {
    FormInput,
    FormInputNumber,
    FormSelect,
    FormTextArea,
} from "src/components/FormItem";
import { transactionSubjects } from "src/constant";

const Home = () => {
    const [form] = Form.useForm();
    const subject = Form.useWatch('subject', form);


    const handleFinish = (values: any) => {
        console.log("finish ::", values);
    }

    const handleShowForm = (value: string | string[]) => {
        return value.includes(subject)
    }

    return (
        <div className="flex justify-center relative">
            <div className="bg-aj-boy absolute top-0 w-full h-full z-1" />
            <div className="w-[770px] p-5 z-10">
                <section>
                    <div className="p-5 flex flex-col gap-3">
                        <span className="text-3xl text-primary">
                            แจ้งปัญหาการแลกของพรีเมี่ยมผ่านอุ่นใจ
                        </span>
                        <span className="text-lg text-gray1 ">
                            กรอกข้อมูลให้ครบถ้วน เพื่อให้เจ้าหน้าที่ตรวจสอบและแจ้งผลกลับทาง SMS
                        </span>
                    </div>

                </section>
                <Form form={form} onFinish={handleFinish}
                    layout="vertical" requiredMark={false}>
                    <Row gutter={12}>
                        <Col xs={24} lg={12}>
                            <FormInputNumber
                                name={"tel"} label={"ระบุเบอร์ที่แลกของพรีเมี่ยม"} required
                                placeholder="เบอร์โทรศัพท์/เบอร์ไฟเบอร์" maxLength={10}
                            />
                        </Col>
                        <Col xs={24} lg={12}>
                            <FormInput name={"fullName"} label={"ชื่อผู้ติดต่อ"} required
                                placeholder="ชื่อ-นามสกุล" />
                        </Col>
                        <Col xs={24} lg={24}>
                            <FormSelect name={"subject"} label={"เรื่องที่ต้องการทำรายการ"} required
                                placeholder="เลือกเรื่องที่ต้องการทำรายการ" loading={false} options={transactionSubjects} />
                        </Col>
                        <Col xs={24} lg={12}>
                            <FormInputNumber
                                name={"productNo"} label={"หมายเลขติดตามพัสดุ"} required
                                placeholder="ระบุเลขติดตามพัสดุ" maxLength={10}
                            />
                        </Col>
                        <Col xs={24} lg={12}>
                            <FormInput
                                name={"premiumToChange"} label={"ระบุของพรีเมี่ยมที่แลก"} required
                                placeholder="ระบุรายละเอียดเพิ่มเติมของปัญหาที่พบ"

                            />
                        </Col>
                        {handleShowForm("ของพรีเมี่ยมชำรุด") && <Col xs={24} lg={24}>
                            <FormTextArea name={"problemMore"} label={"ปัญหาที่พบเพิ่มเติม"} required
                                placeholder="ระบุที่อยู่ในการจัดส่งของพรีเมี่ยม" rows={3} />
                        </Col>}
                        {handleShowForm("ของพรีเมี่ยมไม่ตรงตามที่แลก") && <Col xs={24} lg={24}>
                            <FormInput
                                name={"premiumToRecieve"} label={"ของพรีเมี่ยมที่ได้รับ"} required
                                placeholder="ระบุของที่ได้รับไม่ตรงตามที่แลก"

                            />
                        </Col>}
                        <Col xs={24} lg={24}>
                            <FormTextArea name={"problemMore"} label={"ที่อยู่ในการจัดส่ง"} required
                                placeholder="ระบุที่อยู่ในการจัดส่งของพรีเมี่ยม" />
                        </Col>

                        <Col span={24}>
                            <Row gutter={12} justify="center">
                                <Col>
                                    <Button htmlType="submit" type="primary" className="px-8 h-[35px]">
                                        ส่งข้อมูล
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div >
        </div >
    )
}

export default Home