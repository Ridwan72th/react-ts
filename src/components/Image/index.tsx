import { IImage } from './image.interface'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const CImage = ({ src, width, height = "auto", alt, className, loading = true }: IImage) => {

    const antIcon = <LoadingOutlined style={{ fontSize: 30 }} />;

    return (
        <div>
            <Spin indicator={antIcon} style={{ maxHeight: "unset" }} spinning={loading} >
                <img src={src} width={width} height={height} alt={alt} className={className} />
            </Spin>
        </div>
    )

}

export default CImage