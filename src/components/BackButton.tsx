import { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [footerHeight, setFooterHeight] = useState(0);

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true); // 显示按钮
        } else {
            setIsVisible(false); // 隐藏按钮
        }
    };

    const handleResize = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            setFooterHeight(footer.offsetHeight); // 更新footer高度
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('resize', handleResize);
        handleResize(); // 初始化footer高度

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const buttonStyle = {
        position: 'fixed' as 'fixed',
        left: '20px',
        bottom: isVisible && footerHeight ? `${footerHeight + 20}px` : '20px',
        transition: 'bottom 0.3s',
        zIndex: 1000,
        backgroundColor: 'transparent',
        border: 'none',
    };

    if (isVisible) {
        return (
            <button style={buttonStyle} onClick={scrollToTop}>
                <img src="https://static.igem.wiki/teams/5376/back2top-new.png" alt="Back To Top" style={{ width: '100px', height: 'auto' }} />
            </button>
        );
    } else {
        return null;
    }
};

export default BackToTopButton;
