// Footer.tsx
import React, { useState, useEffect } from 'react';

// 定义图片数据的接口
interface ImageData {
  src: string;
  alt: string;
}

export function Footer(): JSX.Element {
  // 右上角的图片
  const topRightImage: ImageData = {
    src: 'https://static.igem.wiki/teams/5376/icon.png', // 替换为实际图片URL
    alt: 'Top Right Image',
  };

  // 左侧区域的图片数组，每个子数组代表一行
  const leftSectionImages: ImageData[][] = [
    // 第一行：一张图片
    [{ src: 'https://via.placeholder.com/150', alt: 'Left Row 1 Image' }],
    // 第二行：两张图片
    [
      { src: 'https://via.placeholder.com/150', alt: 'Left Row 2 Image 1' },
      { src: 'https://via.placeholder.com/150', alt: 'Left Row 2 Image 2' },
    ],
    // 第三行：两张图片
    [
      { src: 'https://via.placeholder.com/150', alt: 'Left Row 3 Image 1' },
      { src: 'https://via.placeholder.com/150', alt: 'Left Row 3 Image 2' },
    ],
  ];

  // 右侧区域的图片数组，每个子数组代表一行
  const rightSectionImages: ImageData[][] = [
    // 第一行：一张图片
    [{ src: 'https://via.placeholder.com/150', alt: 'Right Row 1 Image' }],
    // 第二行：三张图片
    [
      { src: 'https://via.placeholder.com/150', alt: 'Right Row 2 Image 1' },
      { src: 'https://via.placeholder.com/150', alt: 'Right Row 2 Image 2' },
      { src: 'https://via.placeholder.com/150', alt: 'Right Row 2 Image 3' },
    ],
    // 第三行：两张图片
    [
      { src: 'https://via.placeholder.com/150', alt: 'Right Row 3 Image 1' },
      { src: 'https://via.placeholder.com/150', alt: 'Right Row 3 Image 2' },
    ],
  ];

  // 内联样式对象
  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      position: 'relative',
      backgroundColor: '#ffebd3',
      padding: '40px 20px',
      overflow: 'hidden',
    },
    topRightImage: {
      position: 'absolute',
      top: '20px',
      right: '20px',
    },
    topRightImg: {
      width: '100px',
      height: 'auto',
    },
  };

  // 响应式设计的状态
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 初始化
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 动态调整样式
  const footerContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    marginTop: '140px', // 确保右上角图片不会覆盖内容
    alignItems: isMobile ? 'center' : 'flex-start',
  };

  const footerSectionStyle: React.CSSProperties = {
    width: isMobile ? '100%' : '48%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    justifyContent: isMobile ? 'center' : 'flex-start',
  };

  const imageStyle: React.CSSProperties = {
    width: isMobile ? '45%' : '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const leftSecondRowImgStyle: React.CSSProperties = {
    width: isMobile ? '45%' : 'calc(50% - 5px)',
  };

  const rightSecondRowImgStyle: React.CSSProperties = {
    width: isMobile ? '30%' : 'calc(33.33% - 6.66px)',
  };

  return (
      <footer style={styles.footer}>
        {/* 右上角的图片 */}
        <div style={styles.topRightImage}>
          <img
              src={topRightImage.src}
              alt={topRightImage.alt}
              style={styles.topRightImg}
              loading="lazy"
          />
        </div>

        {/* 主内容区域 */}
        <div style={footerContentStyle}>
          {/* 左侧区域 */}
          <div style={footerSectionStyle}>
            {leftSectionImages.map((row, rowIndex) => (
                <div style={rowStyle} key={`left-row-${rowIndex}`}>
                  {row.map((image, imgIndex) => (
                      <img
                          key={`left-row-${rowIndex}-img-${imgIndex}`}
                          src={image.src}
                          alt={image.alt}
                          style={
                            rowIndex === 1 || rowIndex === 2
                                ? leftSecondRowImgStyle
                                : imageStyle
                          }
                          loading="lazy"
                      />
                  ))}
                </div>
            ))}
          </div>

          {/* 右侧区域 */}
          <div style={footerSectionStyle}>
            {rightSectionImages.map((row, rowIndex) => (
                <div style={rowStyle} key={`right-row-${rowIndex}`}>
                  {row.map((image, imgIndex) => (
                      <img
                          key={`right-row-${rowIndex}-img-${imgIndex}`}
                          src={image.src}
                          alt={image.alt}
                          style={
                            rowIndex === 1
                                ? rightSecondRowImgStyle
                                : imageStyle
                          }
                          loading="lazy"
                      />
                  ))}
                </div>
            ))}
          </div>
        </div>
      </footer>
  );
}

