
type ModalType = "success" | "info" | "warning" | "error"

export interface IModalMethod {
    medthod: ModalType,
    title: React.ReactNode | string,
    content: React.ReactNode | string,
    footer?: React.ReactNode,
    icon?: React.ReactNode,
    className?: string
}