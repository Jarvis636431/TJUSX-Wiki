import { useEffect, useState } from "react";
//import Card from '../components/Card.tsx';
// 使用内联样式
const styles = {
    container: {
        backgroundColor: '#FFF8F0',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        padding: '20px',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        flexWrap: 'wrap' as 'wrap',
    },
    verticalContainer: {
        display: 'flex',
        flexWrap: 'wrap', // 允许换行
        justifyContent: 'center',
    },
    imageWrapper: {
        textAlign: 'center' as 'center',
        margin: '20px 20px',
        width: '250px',
    },
    image: {
        maxWidth: '90%', // 根据需要调整
        height: 'auto',
    },
    smallimage: {
        width: '200px',
    },
};
export function Members(): JSX.Element {
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

    const horizontalImageSrc = "https://static.igem.wiki/teams/5376/members/dsc-9136.jpg"; // 横向图片的 URL
    const verticalImages = [
        { src: "https://static.igem.wiki/teams/5376/members/cyj.jpg", name: "Chi Yongjie" },
        { src: "https://static.igem.wiki/teams/5376/members/dby.jpg", name: "Du Boyan" },
        { src: "https://static.igem.wiki/teams/5376/members/dkl.jpg", name: "Dong Kelu" },
        { src: "https://static.igem.wiki/teams/5376/members/fx.jpg", name: "Fang Xiao" },
        { src: "https://static.igem.wiki/teams/5376/members/gjx.jpg", name: "Gao Jiaxin" },
        { src: "https://static.igem.wiki/teams/5376/members/hs.jpg", name: "Hu Shuo" },
        { src: "https://static.igem.wiki/teams/5376/members/hsk.jpg", name: "He Sikai" },
        { src: "https://static.igem.wiki/teams/5376/members/hsx.jpg", name: "Hu Shixian" },
        { src: "https://static.igem.wiki/teams/5376/members/jzy.jpg", name: "Jiang Zhuoya" },
        { src: "https://static.igem.wiki/teams/5376/members/ll.jpg", name: "Lin Lu" },
        { src: "https://static.igem.wiki/teams/5376/members/lmy.jpg", name: "Li Mengyi" },
        { src: "https://static.igem.wiki/teams/5376/members/mbj.jpg", name: "Ma Binjian" },
        { src: "https://static.igem.wiki/teams/5376/members/syq.jpg", name: "Shi Yuqing" },
        { src: "https://static.igem.wiki/teams/5376/members/wzf.png", name: "Wang Zhifei" },
        { src: "https://static.igem.wiki/teams/5376/members/xm.jpg", name: "Xing Mu" },
        { src: "https://static.igem.wiki/teams/5376/members/yyr.jpg", name: "Yang Yirui" },
        { src: "https://static.igem.wiki/teams/5376/members/zl.jpg", name: "Zhang Lei" },
        { src: "https://static.igem.wiki/teams/5376/members/zmh.jpg", name: "Zhang Minghao" },
        { src: "https://static.igem.wiki/teams/5376/members/zxl.jpg", name: "Zhang Xianliang" },
        { src: "https://static.igem.wiki/teams/5376/members/zzh.jpg", name: "name" },
        { src: "https://static.igem.wiki/teams/5376/members/ljw.jpg", name: "Lan Jingwen" },
        { src: "https://static.igem.wiki/teams/5376/members/Jarvis.jpg", name: 'Jarvis' },
        // 添加其他22张图片
    ];
    return (
        <main style={{backgroundColor: '#FFF8F0', minHeight: '100vh'}}>
            <div style={{
                overflow: 'hidden',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
                position: 'relative'
            }}>
                <img
                    src="https://static.igem.wiki/teams/5376/logo1-2.png"
                    alt="Left Image"
                    style={{maxWidth: '760px', height: 'auto', zIndex: 1}}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/members.png"
                    alt="TITLE"
                    style={{width: 'auto', height: '250px', position: 'absolute', top: '45%', zIndex: 3}}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse3.png"
                    alt="Left Image"
                    style={{position: 'absolute', maxWidth: '250px', left: '150px', top: '270px', height: 'auto'}}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse4.png"
                    alt="Left Image"
                    style={{position: 'absolute', maxWidth: '220px', right: '150px', top: '150px', height: 'auto'}}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/bl2-1.png"
                    alt="Left Image"
                    style={{
                        position: 'absolute',
                        width: '200%',
                        right: `${-scrollY * 1.5 - 20}px`,
                        top: '530px',
                        height: 'auto',
                        transform: 'rotate(0deg)',
                        zIndex: 0
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/bl1.png"
                    alt="Left Image"
                    style={{
                        position: 'absolute', width: '150%',
                        right: `${-scrollY * 1.5}px`, top: '500px', height: 'auto', transform: 'rotate(0deg)', zIndex: 0
                    }}
                />
            </div>

            <div style={styles.container}>
                <div style={styles.row}>
                    <img
                        src={horizontalImageSrc}
                        alt="横向照片"
                        style={styles.image}
                    />
                </div>

                <div style={styles.row}>
                    {verticalImages.map((image, index) => (
                        <div key={index} style={styles.imageWrapper}>
                            <img
                                src={image.src}
                                alt={image.name}
                                style={styles.smallimage}
                            />
                            <div style={{fontWeight:'bold',fontSize:"24px"}}>{image.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}




