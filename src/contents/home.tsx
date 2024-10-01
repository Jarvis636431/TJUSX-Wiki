import { useState, useEffect } from 'react';
import BackToTopButton from '../components/BackButton.tsx';


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

    const maxScrollY = 400; // 你可以根据需要调整这个值

    return (
        <main style={{backgroundColor: '#fff8f0', height: '9500px', position: 'relative'}}>
            {/* Container for title, subtitle, and images */}
            <div style={{
                position: 'relative',
                height: '100vh',
                overflow: 'hidden'
            }}>
                {/* Overlay Title */}
                <img
                    src="https://static.igem.wiki/teams/5376/titlenew.png"
                    alt="Overlay Title"
                    style={{
                        position: 'absolute',
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '100%',
                        height: 'auto',
                        zIndex: 10,
                    }}
                />
                {/* Overlay Subtitle */}
                <img
                    src="https://static.igem.wiki/teams/5376/subtitlenew.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '55%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '100%',
                        height: 'auto',
                        zIndex: 10,
                    }}
                />
                {/* Images with scroll effect */}
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
                        left: `${scrollY * 0.5 + 70}px`,
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
                        left: `${-scrollY * 0.7}px`,
                        maxWidth: '100%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m2r.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '44.5%',  // 位置调整为靠近第一张图片的下方
                        left: `${scrollY * 0.7 + 10}px`,
                        maxWidth: '100%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m3r.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '51.5%',  // 位置调整为靠近第一张图片的下方
                        left: `${scrollY * 1.0 + 520}px`,
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
                        left: `${-scrollY * 1.0}px`,
                        maxWidth: '70%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />

            </div>

            {/* 新增的图片容器 */}
            <div style={{
                position: 'absolute',
                top:'100vh', // 或者更改为你需要的值
                left: '50%',
                transform: 'translateX(-50%)',
                transition: 'opacity 0.3s ease',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                opacity: scrollY > maxScrollY ? 1 : 0,
            }}>
                {/* 纵向排列的图片 */}
                <img src="https://static.igem.wiki/teams/5376/home/newgroup-1.png" alt="Image 1"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/gutleft.jpg" alt="Image 2"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/group-3.png" alt="Image 3"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/group-4.png" alt="Image 4"
                     style={{margin: 'x 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/group-5.png" alt="Image 5"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/group-6.png" alt="Image 6"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/group-7-1.png" alt="Image 7.1"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/newgroup-7-2.png" alt="Image 7.2"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/group6-7-3.png" alt="Image 7.3"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
            </div>
                <BackToTopButton></BackToTopButton>
        </main>
    );
}

//TODO:添加GiF跳转事件
