import { Modal } from "antd";
import { CloseOutlined } from '@ant-design/icons';

type ModalType = "success" | "info" | "warning" | "error"

export const ModalMethod = (status: ModalType = "info") => {
    Modal?.[status]({
        title: 'รายการสำเร็จ',
        content: 'อุ่นใจส่งเรื่องให้พี่เรียบร้อยแล้ว พนักงานจะตรวจสอบและแจ้งผลกลับให้พี่ทาง SMS ภายใน 3 ทำการนะฮะ',
        centered: true,
        closeIcon: <CloseOutlined twoToneColor="red" />
    });
};