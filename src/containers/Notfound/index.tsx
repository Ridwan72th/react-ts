import CImage from "src/components/Image"

const NotFoundPage = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <CImage src="/image/404-error.jpg" width="80%" alt={"not found"} className="rounded-2xl opacity-80" loading={false} />
        </div>
    )
}

export default NotFoundPage