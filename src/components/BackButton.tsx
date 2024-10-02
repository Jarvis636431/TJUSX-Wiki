import { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerHeight = 250; // 固定的 footer 高度

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true); // 显示按钮
        } else {
            setIsVisible(false); // 隐藏按钮
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
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const buttonStyle = {
        position: 'fixed' as 'fixed',
        left: '20px',
        bottom: isVisible && footerHeight ? `${footerHeight + 20}px` : '20px',
        transition: 'bottom 0.3s',
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
