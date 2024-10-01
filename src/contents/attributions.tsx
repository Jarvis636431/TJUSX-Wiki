import { useEffect, useState } from "react";

const styles = {
    container: {
        backgroundColor: '#FFF8F0',
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        width: 'calc(100% - 200px)',
        margin: '0 auto',
    },
    sidebar: {
        marginRight: '10px',
        marginLeft: '10px',
        width: '250px',
        height: '500px',
        backgroundColor: '#F0D6B4',
        borderRadius: '20px',
        padding: '20px',
        overflowY: 'auto',
        borderRight: '1px solid #ddd',
    },
    sidebarItem: {
        marginBottom: '15px',
    },
    content: {
        width: 'calc(100% - 350px)',
        backgroundColor: '#fff8f0',
        border: '20px solid #BC8C5B', // 修改这里
        borderRadius: '20px',
        flex: 1,
        padding: '40px',
        overflowY: 'auto',
        //用负值的outline代替内圆角，而且radius是一样的

        outline: '5px solid #ffffff',
        outlineOffset: '-20px',
        // boxShadow: '0 0 0 30px #FFF8F0', // 模拟内侧圆角
    },

    section: {
        padding: '20px 0',
        borderBottom: '1px solid #ddd',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
    },
    paragraph: {
        lineHeight: 1.6,
    },
    overviewImage: {
        width: '350px',
        height: 'auto',
    },

};
export function Attributions() {
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
        <main style={{ backgroundColor: '#FFF8F0', minHeight: '100vh' }}>
            <div style={{ overflow: 'hidden', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', padding: '20px', position: 'relative' }}>
                <img
                    src="https://static.igem.wiki/teams/5376/logo1-2.png"
                    alt="Left Image"
                    style={{ maxWidth: '760px', height: 'auto', zIndex: 1 }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/attributionslogo.png"
                    alt="TITLE"
                    style={{ width: 'auto', height: '220px', position: 'absolute', top: '45%', zIndex: 3 }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse3.png"
                    alt="Left Image"
                    style={{ position: 'absolute', maxWidth: '250px', left: '150px', top: '270px', height: 'auto' }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse4.png"
                    alt="Left Image"
                    style={{ position: 'absolute', maxWidth: '220px', right: '150px', top: '150px', height: 'auto' }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/bl2-1.png"
                    alt="Left Image"
                    style={{
                        position: 'absolute', width: '200%',
                        right: `${-scrollY * 1.5 - 20}px`, top: '530px', height: 'auto', transform: 'rotate(0deg)', zIndex: 0
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
                <div style={styles.content as React.CSSProperties}>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'1000px' }}>
                        <iframe
                            style={{ width: '100%' ,height: '100%'}}
                            id="igem-attribution-form"
                            src="https://teams.igem.org/wiki/5376/attributions"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}
