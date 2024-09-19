export function Home() {
    return (
        <>
            <main style={{
                backgroundImage: 'url(https://static.igem.wiki/teams/5376/wiki-background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                position: 'relative', // 设置父容器为 relative，方便定位子元素
            }}>
                {/* 叠加的第一张图片 */}
                <img
                    src="https://static.igem.wiki/teams/5376/title.png"
                    alt="Overlay Title"
                    style={{
                        position: 'absolute',
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
                        position: 'absolute',
                        top: '55%',  // 位置调整为靠近第一张图片的下方
                        left: '50%',
                        transform: 'translate(-50%, -50%)',  // 让图片居中
                        maxWidth: '100%', // 确保图片在较小屏幕上不会超出宽度
                        height: 'auto',
                    }}
                />
            </main>
        </>
    );
}
