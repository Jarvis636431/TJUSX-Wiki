import { useState, useEffect, SetStateAction} from 'react';
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

    // 状态管理：控制GIF的显示和来源
    const [showGif, setShowGif] = useState(false);
    const [gifSrc, setGifSrc] = useState('');

    // 点击事件处理函数：设置GIF的路径并显示
    const handleClick = (gifUrl: SetStateAction<string>) => {
        setGifSrc(gifUrl);
        setShowGif(true);
    };

    // 关闭GIF显示的函数
    const closeGif = () => {
        setShowGif(false);
        setGifSrc('');
    };


    return (
        <main style={{backgroundColor: '#fff8f0', height: '9200px', position: 'relative'}}>
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
                        left: `${scrollY + 520}px`,
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
                        left: `${(-scrollY)}px`,
                        maxWidth: '70%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />

            </div>

            {/* 新增的图片容器 */}
            <div style={{
                position: 'absolute',
                top: '100vh', // 或者更改为你需要的值
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
                <img src="https://static.igem.wiki/teams/5376/home/group1.png" alt="Image 1"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/gutleft.jpg" alt="Image 2"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/group-3.png" alt="Image 3"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/group4.png" alt="Image 4"
                     style={{margin: 'x 0', maxWidth: '100%', height: 'auto'}}/>
                <img src="https://static.igem.wiki/teams/5376/home/group-5.png" alt="Image 5"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>

                //放置GIF

                <div style={{position: 'relative', display: 'inline-block'}}>
                    <img src="https://static.igem.wiki/teams/5376/home/group6.png" alt="Image 6"
                         style={{margin: '0', maxWidth: '100%', height: 'auto'}}/>
                    <img src="https://static.igem.wiki/teams/5376/home/gif/gif-6.gif" alt="GIF"
                         style={{
                             position: 'absolute',
                             top: '50.3%',
                             left: '52.5%',
                             transform: 'translate(-50%, -50%)',
                             maxWidth: '24%', // 根据需要调整大小
                             height: 'auto'
                         }}/>
                </div>
                <div style={{position: 'relative', textAlign: 'center'}}>
                    {/* 背景图片 */}
                    <img
                        src="https://static.igem.wiki/teams/5376/home/7-1.png" // 替换为你的图片路径
                        alt="Interactive Background"
                        style={{maxWidth: '100%', height: 'auto'}}
                    />

                    {/* 放大镜1的点击区域（左侧） */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%', // 调整位置
                            left: '25%', // 调整位置
                            width: '10%',
                            height: '10%',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick('https://static.igem.wiki/teams/5376/home/gif/7-1-1.gif')} // 替换为你对应的GIF路径
                    />

                    {/* 放大镜2的点击区域（右侧上方） */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '40%', // 调整位置
                            left: '55%', // 调整位置
                            width: '10%',
                            height: '10%',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick('https://static.igem.wiki/teams/5376/home/gif/7-1-2.gif')} // 替换为你对应的GIF路径
                    />

                    {/* 放大镜3的点击区域（右侧下方） */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '65%', // 调整位置
                            left: '60%', // 调整位置
                            width: '10%',
                            height: '10%',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick('https://static.igem.wiki/teams/5376/home/gif/7-1-3.gif')} // 替换为你对应的GIF路径
                    />

                    {/* 弹出并播放的 GIF */}
                    {showGif && (
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onClick={closeGif} // 点击背景关闭GIF
                        >
                            <img src={gifSrc} alt="GIF Animation" style={{maxWidth: '80%', maxHeight: '80%'}}/>
                        </div>
                    )}
                </div>
                <div style={{position: 'relative', textAlign: 'center'}}>
                    <img
                        src="https://static.igem.wiki/teams/5376/home/7-2.png" // 替换为你的图片路径
                        alt="Interactive Background"
                        style={{maxWidth: '100%', height: 'auto'}}
                    />

                    {/* 第一个可点击区域（左侧方块） */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '20%', // 调整位置
                            left: '10%', // 调整位置
                            width: '15%',
                            height: '15%',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick('https://static.igem.wiki/teams/5376/home/gif/7-2-1.gif')} // 替换为你对应的GIF路径
                    />

                    {/* 第二个可点击区域（右侧方块） */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '20%', // 调整位置
                            right: '10%', // 调整位置
                            width: '15%',
                            height: '15%',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        onClick={() => handleClick('https://static.igem.wiki/teams/5376/home/gif/7-2-2.gif')} // 替换为你对应的GIF路径
                    />

                    {/* 弹出并播放的 GIF */}
                    {showGif && (
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onClick={closeGif} // 点击背景关闭GIF
                        >
                            <img src={gifSrc} alt="GIF Animation" style={{maxWidth: '80%', maxHeight: '80%'}}/>
                        </div>
                    )}
                </div>
                <img src="https://static.igem.wiki/teams/5376/home/7-3.png" alt="Image 7.3"
                     style={{margin: ' 0', maxWidth: '100%', height: 'auto'}}/>
                <div style={{position: 'relative', display: 'inline-block'}}>
                    <img src="https://static.igem.wiki/teams/5376/home/7-4.png" alt="Image 7.4"
                         style={{margin: '0', maxWidth: '100%', height: 'auto'}}/>
                    <img src="https://static.igem.wiki/teams/5376/home/gif/7-4.gif" alt="GIF"
                         style={{
                             position: 'absolute',
                             top: '43%',
                             left: '54%',
                             transform: 'translate(-50%, -50%)',
                             maxWidth: '30%', // 根据需要调整大小
                             height: 'auto'
                         }}/>
                </div>
            </div>
            <BackToTopButton></BackToTopButton>
        </main>
    );
}

//TODO:添加GiF跳转事件
