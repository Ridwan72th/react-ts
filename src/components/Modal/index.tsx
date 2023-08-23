import { Modal } from "antd";
import React from "react";
import { CloseOutlined } from '@ant-design/icons';
import { IModalMethod } from "./modal.interface";


export const ModalMethod = ({
    medthod = "info",
    title,
    content,
    footer = null,
    icon = null,
    className }: IModalMethod
) => {
    Modal?.[medthod]({
        title: title,
        content: content,
        closable: true,
        closeIcon: <CloseOutlined className="p-2 bg-primary rounded text-white" />,
        footer: footer,
        icon: icon,
        className: "modal-method " + className,
        style: {
            top: "60vh",
        }
    });
};