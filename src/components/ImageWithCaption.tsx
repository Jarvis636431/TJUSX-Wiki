import React from 'react';

interface ImageWithCaptionProps {
    src: string;
    alt?: string;
    caption: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ src, alt = '图片', caption }) => {
    return (
        <figure style={{ textAlign: 'center' }}>
            <img
                src={src}
                alt={alt}
                style={{
                    display: 'block',
                    margin: '0 auto',
                    width: '40%',
                    borderRadius: '10px',
                }}
            />
            <figcaption style={{ marginTop: '10px', fontStyle: 'italic' }}>
                {caption}
            </figcaption>
        </figure>
    );
};

export default ImageWithCaption;
