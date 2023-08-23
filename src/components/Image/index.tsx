import { IImage } from './image.interface'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const CImage = ({ src, width, height = "auto", alt, className, loading = true }: IImage) => {

    const antIcon = <LoadingOutlined style={{ fontSize: 30 }} />;

    const handleErrorImage = ({ currentTarget }: any) => {
        currentTarget.onerror = null;
        currentTarget.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDQ22xgk2PYGS_Y1OvfRUabKICuRBTP5HzgegXADIaf2qU_RIiOpTi5iwMge1-hAhOw4&usqp=CAU";
    }

    return (
        <div>
            <Spin indicator={antIcon} style={{ maxHeight: "unset" }} spinning={loading} >
                <img src={src} width={width} height={height} alt={alt} className={className}
                    onError={handleErrorImage}
                />
            </Spin>
        </div>
    )

}

export default CImage