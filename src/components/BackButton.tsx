import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 200 ) {
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

    if (isVisible) {
        return (
            <button className="back-to-top-button" onClick={scrollToTop}>
                <img src="https://static.igem.wiki/teams/5376/back2top.png" alt="Back To Top" />
            </button>
        );
    } else {
        return null;
    }
};

export default BackToTopButton;