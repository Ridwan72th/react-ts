import React from 'react'
import { IImage } from './image.interface'

const CImage = ({ src, width, height = "auto", alt, className }: IImage) => {
    return (
        <div>
            <img src={src} width={width} height={height}
                alt={alt} className={className} />
        </div>
    )
}

export default CImage