import React, { useState } from 'react';

const backgroundImageUrl = '你的背景图URL'; // 固定的背景图 URL

export function Card({ avatar, name, introduction, contribution }: { avatar: string; name: string; introduction: string; contribution: string; }) {
    const [text, setText] = useState(introduction); // 默认显示 introduction 的内容


    const handleButtonClick = (content: string) => {
        setText(content);
    };

    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'row', // 左右排列
        height: '400px', // 根据需要调整
        width: '700px',
        padding: '20px',
    };

    const buttonContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'start',
        marginBottom: '20px',
    };

    const leftSideStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${avatar})`,
        backgroundSize: 'cover',
        height: '300px', // 根据需要调整
    };

    const rightSideStyle: React.CSSProperties = {
        flex: 1,
        padding: '10px',
        display: 'flex',
        flexDirection: 'column', // 右侧内容也采用垂直排列
    };

    return (
        <div style={containerStyle}>
            <div style={leftSideStyle}>
                <img src={avatar} alt="左侧图片" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <span>{name}</span> {/* 图片下方的文本 */}
            </div>
            <div style={rightSideStyle}>
                <div style={buttonContainerStyle}>
                    <button onClick={() => handleButtonClick(introduction)}>
                        <span>按钮1</span>
                    </button>
                    <button onClick={() => handleButtonClick(contribution)}>
                        <span>按钮2</span>
                    </button>
                </div>
                <textarea value={text} readOnly style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
    );
}
