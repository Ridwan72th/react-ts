import { Button, } from 'antd'
import { ModalMethod } from 'src/components'

const Sandbox = () => {

    const handleModalSuccess = () => {
        ModalMethod({
            medthod: "success",
            title: <div className='text-primary text-2xl text-center w-full pb-3'>รายการสำเร็จ</div>,
            content: <div className='text-lg text-center w-full'>
                {`อุ่นใจส่งเรื่องให้พี่เรียบร้อยแล้ว\nพนักงานจะตรวจสอบและแจ้งผลกลับให้พี่ทาง\nSMS ภายใน 3 ทำการนะฮะ`}
            </div>
        })
    }

    return (
        <div>
            <Button onClick={handleModalSuccess}>Modal</Button>
        </div>
    )
}

export default Sandbox