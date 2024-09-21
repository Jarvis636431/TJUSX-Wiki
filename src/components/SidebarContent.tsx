import React, { useState } from 'react';

// 定义 SidebarItem 的接口
export interface SidebarItem {
    title: string;
    imageUrl: string;
    text: string;
}

interface SidebarContentProps {
    items: SidebarItem[];
}

const SidebarContent: React.FC<SidebarContentProps> = ({ items }) => {
    const overviewItem: SidebarItem = {
        title: 'Overview',
        imageUrl: 'https://static.igem.wiki/teams/5376/overview.png',
        text: 'This is the Overview content.',
    };

    const [selectedItem, setSelectedItem] = useState<SidebarItem>(overviewItem);

    const handleItemClick = (item: SidebarItem) => {
        setSelectedItem(item);
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            height: '600px',
        } as React.CSSProperties,
        sidebar: {
            width: '30%',
            backgroundColor: '#FFF4E6',
            padding: '20px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '10px',
        } as React.CSSProperties,
        sidebarTitle: (isActive: boolean) => ({
            fontSize: '28px',
            color: isActive ? '#FF7F50' : '#c67e38',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '20px',
        }) as React.CSSProperties,
        sidebarList: {
            listStyleType: 'none',
            padding: '0',
        } as React.CSSProperties,
        sidebarItem: (isActive: boolean) => ({
            fontSize: '22px',
            color: isActive ? '#FF7F50' : '#c67e38',
            fontWeight: 'bold',
            marginBottom: '10px',
            cursor: 'pointer',
        }) as React.CSSProperties,
        // 让内容从左上角开始布局
        mainContent: {
            width: '65%',
            padding: '20px',
            backgroundImage: 'url(https://static.igem.wiki/teams/5376/textbox-background.png)',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',  // 从左侧开始排列
            justifyContent: 'flex-start',  // 从顶部开始排列
            position: 'relative',  // 使用相对定位，便于调整
        } as React.CSSProperties,
        // 图片显示在左上角
        image: {
            width: '400px',  // 调整图片宽度
            height: 'auto',
            position: 'absolute',  // 使用绝对定位，确保图片位置
            top: '20px',  // 距离顶部 20px
            left: '20px',  // 距离左侧 20px
        } as React.CSSProperties,
        textBox: {
            marginTop: '250px',  // 确保文本框不重叠图片
            width: '80%',
            padding: '10px',
            backgroundColor: 'transparent',  // 将背景颜色设置为透明
            borderRadius: '5px',
            textAlign: 'start',
            fontSize: '18px',
            color: '#333',
        } as React.CSSProperties,
    };

    return (
        <div style={styles.container}>
            {/* Overview 现在作为一个 SidebarItem */}
            <aside style={styles.sidebar}>
                <h3
                    style={styles.sidebarTitle(selectedItem.title === 'Overview')}
                    onClick={() => handleItemClick(overviewItem)}
                >
                    Overview
                </h3>
                <ul style={styles.sidebarList}>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(item)}
                            style={styles.sidebarItem(selectedItem.title === item.title)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* 右侧展示被选中的内容 */}
            <div style={styles.mainContent}>
                <img src={selectedItem.imageUrl} alt={selectedItem.title} style={styles.image} />
                <div style={styles.textBox}>{selectedItem.text}</div>
            </div>
        </div>
    );
};

export default SidebarContent;
