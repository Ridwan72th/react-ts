export interface IImage {
    src: string;
    width: string | number
    height?: string | number
    alt: string
    className?: string
    loading?: boolean
}