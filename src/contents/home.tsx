import React, { useState, useEffect } from 'react';
export function Home() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <>
            <main style={{ backgroundColor: '#fff8f0', minHeight: '100vh' }}>
                {/* 叠加的第一张图片 */}
                <img
                    src="https://static.igem.wiki/teams/5376/title.png"
                    alt="Overlay Title"
                    style={{
                        position: 'fixed',
                        top: '50%',  // 根据需要调整图片的位置
                        left: '50%',
                        transform: 'translate(-50%, -50%)',  // 让图片居中
                        maxWidth: '100%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />

                {/* 叠加的第二张图片 */}
                <img
                    src="https://static.igem.wiki/teams/5376/subtitle.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'fixed',
                        top: '55%',  // 位置调整为靠近第一张图片的下方
                        left: '50%',
                        transform: 'translate(-50%, -50%)',  // 让图片居中
                        maxWidth: '100%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m1left.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '52%',  // 位置调整为靠近第一张图片的下方
                        left: `${-scrollY * 0.3}px`,
                        maxWidth: '100%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m1right.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '25%',  // 位置调整为靠近第一张图片的下方
                        left: `${scrollY * 0.3+70}px`,
                        maxWidth: '100%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m2l.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '52%',  // 位置调整为靠近第一张图片的下方
                        left: `${-scrollY * 0.5}px`,
                        maxWidth: '100%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m2r.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '55%',  // 位置调整为靠近第一张图片的下方
                        left: `${scrollY * 0.5+10}px`,
                        maxWidth: '100%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m3r.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '55%',  // 位置调整为靠近第一张图片的下方
                        left: `${scrollY * 0.8+520}px`,
                        maxWidth: '70%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m3l.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '58%',  // 位置调整为靠近第一张图片的下方
                        left: `${-scrollY * 0.8}px`,
                        maxWidth: '70%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
            </main>
        </>
    );
}
