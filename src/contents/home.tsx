import { useState, useEffect, SetStateAction } from 'react';
import BackToTopButton from '../components/BackButton.tsx';

export function Home() {

    //设置滚动
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

    const maxScrollY = 375; // 触发动画的滚动距离(最大)

    //区分状态管理

    // 状态管理：控制第一个图片容器的GIF显示和来源
    const [showGif1, setShowGif1] = useState(false);
    const [gifSrc1, setGifSrc1] = useState('');
    const [isGifShowing1, setIsGifShowing1] = useState(false);

    // 状态管理：控制第二个图片容器的GIF显示和来源
    const [showGif2, setShowGif2] = useState(false);
    const [gifSrc2, setGifSrc2] = useState('');
    const [isGifShowing2, setIsGifShowing2] = useState(false);

    // 点击事件处理函数：设置第一个图片容器的GIF的路径并显示
    const handleClick1 = (gifUrl: SetStateAction<string>) => {
        if (!isGifShowing1) { // 检查当前是否已经在显示GIF
            setGifSrc1(gifUrl);
            setShowGif1(true);
            setIsGifShowing1(true); // 设置为显示状态
        }
    };

    // 点击事件处理函数：设置第二个图片容器的GIF的路径并显示
    const handleClick2 = (gifUrl: SetStateAction<string>) => {
        if (!isGifShowing2) { // 检查当前是否已经在显示GIF
            setGifSrc2(gifUrl);
            setShowGif2(true);
            setIsGifShowing2(true); // 设置为显示状态
        }
    };

    // 关闭第一个图片容器的GIF显示的函数
    const closeGif1 = () => {
        setShowGif1(false);
        setGifSrc1('');
        setIsGifShowing1(false); // 关闭GIF时重置状态
    };

    // 关闭第二个图片容器的GIF显示的函数
    const closeGif2 = () => {
        setShowGif2(false);
        setGifSrc2('');
        setIsGifShowing2(false); // 关闭GIF时重置状态
    };

    // 计算图片透明度,新增了渐变效果
    const calculateOpacity = (scrollY: number, maxScrollY: number) => {
        return Math.max(0, 1 - scrollY / maxScrollY);
    };

    return (
        <main style={{ backgroundColor: '#fff8f0', height: '9000px'}}>
            <div style={{
                position: 'relative',
                height: '100vh',
                overflow: 'hidden'
            }}>
                <img
                    src="https://static.igem.wiki/teams/5376/spi-d-ey-mi-cro-be.png"
                    alt="Overlay Title"
                    style={{
                        position: 'absolute',
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '100%',
                        height: 'auto',
                        zIndex: 10,
                        opacity: calculateOpacity(scrollY,maxScrollY),
                    }}
                />
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
                        opacity: calculateOpacity(scrollY,maxScrollY),
                    }}
                />
                {/*视差滚动部分*/}
                <img
                    src="https://static.igem.wiki/teams/5376/home/m1left.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '52%',
                        left: `${-scrollY * 0.3}px`,
                        maxWidth: '100%',
                        height: 'auto',
                        opacity: calculateOpacity(scrollY,maxScrollY),
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m1right.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '25%',
                        left: `${scrollY * 0.5 + 70}px`,
                        maxWidth: '100%',
                        height: 'auto',
                        opacity: calculateOpacity(scrollY,maxScrollY),
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m2l.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '52%',
                        left: `${-scrollY * 0.7}px`,
                        maxWidth: '100%',
                        height: 'auto',
                        opacity: calculateOpacity(scrollY,maxScrollY),
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m2r.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '44.5%',
                        left: `${scrollY * 0.7 + 10}px`,
                        maxWidth: '100%',
                        height: 'auto',
                        opacity: calculateOpacity(scrollY,maxScrollY),
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m3r.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '51.5%',
                        left: `${scrollY + 520}px`,
                        maxWidth: '70%',
                        height: 'auto',
                        opacity: calculateOpacity(scrollY,maxScrollY),
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/home/m3l.png"
                    alt="Overlay Subtitle"
                    style={{
                        position: 'absolute',
                        top: '58%',
                        left: `${(-scrollY)}px`,
                        maxWidth: '70%',
                        height: 'auto',
                        opacity: calculateOpacity(scrollY,maxScrollY),
                    }}
                />
            </div>

            <div style={{
                position: 'absolute',
                top: '100vh',
                left: '50%',
                transform: 'translateX(-50%)',
                transition: 'opacity 0.3s ease',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                opacity: scrollY > maxScrollY ? 1 : 0,
            }}>
                <img src="https://static.igem.wiki/teams/5376/home/group1.png" alt="Image 1"
                     style={{ margin: ' 0', maxWidth: '100%', height: 'auto' }} />
                <img src="https://static.igem.wiki/teams/5376/group2.png" alt="Image 2"
                     style={{ margin: ' 0', maxWidth: '100%', height: 'auto' }} />
                <img src="https://static.igem.wiki/teams/5376/home/group-3.png" alt="Image 3"
                     style={{ margin: ' 0', maxWidth: '100%', height: 'auto' }} />
                <img src="https://static.igem.wiki/teams/5376/home/newgroup-4.png" alt="Image 4"
                     style={{ margin: 'x 0', maxWidth: '100%', height: 'auto' }} />
                <img src="https://static.igem.wiki/teams/5376/home/group-5.png" alt="Image 5"
                     style={{ margin: ' 0', maxWidth: '100%', height: 'auto' }} />
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img src="https://static.igem.wiki/teams/5376/home/newgroup-6.png" alt="Image 6"
                         style={{ margin: '0', maxWidth: '100%', height: 'auto' }} />
                    <img src="https://static.igem.wiki/teams/5376/home/gif/gif-6.gif" alt="GIF"
                         style={{
                             position: 'absolute',
                             top: '50.3%',
                             left: '52.5%',
                             transform: 'translate(-50%, -50%)',
                             maxWidth: '24%',
                             height: 'auto'
                         }} />
                </div>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    {/* 背景图片 */}
                    <img
                        src="https://static.igem.wiki/teams/5376/home/7-1.png"
                        alt="Interactive Background"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />

                    {/* 放大镜1的点击区域（左侧） */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '36%',
                            left: '30%',
                            width: '120px',
                            height: '120px',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick1('https://static.igem.wiki/teams/5376/home/gif/7-1-3.gif')}
                    />

                    {/* 放大镜2的点击区域（右侧上方） */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '32%',
                            left: '51%',
                            width: '120px',
                            height: '120px',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick1('https://static.igem.wiki/teams/5376/home/gif/7-1-2.gif')}
                    />

                    {/* 放大镜3的点击区域（右侧下方） */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '55%',
                            left: '48.5%',
                            width: '120px',
                            height: '120px',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick1('https://static.igem.wiki/teams/5376/home/gif/7-1-1.gif')}
                    />

                    {/* 弹出并播放的 GIF */}
                    {showGif1 && (
                        <div
                            style={{
                                position: 'fixed',
                                top: '60%',
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onClick={closeGif1} // 点击背景关闭GIF
                        >
                            <img src={gifSrc1} alt="GIF Animation" style={{ maxWidth: '80%', maxHeight: '80%' }} />
                        </div>
                    )}
                </div>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <img
                        src="https://static.igem.wiki/teams/5376/home/7-2.png" // 替换为你的图片路径
                        alt="Interactive Background"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />

                    {/* 左侧方块 */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '12%',
                            left: '37%',
                            width: '120px',
                            height: '120px',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick2('https://static.igem.wiki/teams/5376/home/gif/7-2-1.gif')}
                    />

                    {/* 右侧方块 */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '12%',
                            right: '30.5%',
                            width: '120px',
                            height: '120px',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick2('https://static.igem.wiki/teams/5376/home/gif/7-2-2.gif')}
                    />

                    {/* 弹出并播放的 GIF */}
                    {showGif2 && (
                        <div
                            style={{
                                position: 'fixed',
                                top: '69%',
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onClick={closeGif2} // 点击背景关闭GIF
                        >
                            <img src={gifSrc2} alt="GIF Animation" style={{ maxWidth: '80%', maxHeight: '80%' }} />
                        </div>
                    )}
                </div>
                <img src="https://static.igem.wiki/teams/5376/home/7-3.png" alt="Image 7.3"
                     style={{ margin: ' 0', maxWidth: '100%', height: 'auto' }} />
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img src="https://static.igem.wiki/teams/5376/home/7-4.png" alt="Image 7.4"
                         style={{ margin: '0', maxWidth: '100%', height: 'auto' }} />
                    <img src="https://static.igem.wiki/teams/5376/home/gif/7-4.gif" alt="GIF"
                         style={{
                             position: 'absolute',
                             top: '43%',
                             left: '54%',
                             transform: 'translate(-50%, -50%)',
                             maxWidth: '30%',
                             height: 'auto'
                         }} />
                </div>
            </div>
            <BackToTopButton></BackToTopButton>
        </main>
    );
}