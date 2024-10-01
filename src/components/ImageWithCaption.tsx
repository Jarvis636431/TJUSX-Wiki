import React from 'react';

interface ImageWithCaptionProps {
    src: string;
    alt?: string;
    caption: string | JSX.Element;
    customWidth?:string
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ src, alt = '图片', caption,customWidth}) => {
    return (
        <figure style={{ textAlign: 'center' }}>
            <img
                src={src}
                alt={alt}
                style={{
                    display: 'block',
                    margin: '0 auto',
                    width: customWidth || '75%',
                    borderRadius: '10px',
                }}
            />
            <figcaption style={{ marginTop: '10px', fontStyle: 'normal' }}>
                {caption}
            </figcaption>
        </figure>
    );
};

export default ImageWithCaption;
