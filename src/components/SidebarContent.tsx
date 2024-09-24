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
            justifyContent: 'space-around',
            padding: '20px',
            height: '600px',
        } as React.CSSProperties,
        sidebar: {
            top: '100',
            bottom: '100',
            width: '25%',
            backgroundColor: '#FFF4E6',
            padding: '20px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            // position: 'fixed', // 固定定位
            left: '0', // 确保侧边栏固定在左侧
            borderRadius: '30px',
            boxSizing: 'border-box', // 包括padding在内的宽度计算
        } as React.CSSProperties,
        sidebarTitle: (isActive: boolean) => ({
            fontSize: '28px',
            color: isActive ? '#FF7F50' : '#c67e38',
            fontWeight: 'bold',
            cursor: 'pointer',
        }) as React.CSSProperties,
        sidebarList: {
            listStyleType: 'none',
            padding: '0',
            margin: '0', // 移除默认的margin
        } as React.CSSProperties,
        sidebarItem: (isActive: boolean) => ({
            fontSize: '22px',
            color: isActive ? '#FF7F50' : '#c67e38',
            fontWeight: 'bold',
            marginBottom: '10px',
            cursor: 'pointer',
        }) as React.CSSProperties,
        mainContent: {
            width: '65%',
            marginLeft: '5%', // 添加左外边距，避免覆盖
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '30px',
            borderStyle: 'solid',
            borderWidth: '15px',
            borderColor: '#BC8C5B',
            borderHeight: '100%',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',  // 从顶部开始排列
            position: 'relative',  // 使用相对定位，便于调整
            boxSizing: 'border-box', // 包括padding在内的宽度计算
            height: '100%', // 确保主内容区域高度与容器一致
            overflow: 'auto', // 如果内容过多，启用滚动
        } as React.CSSProperties,
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
            textAlign: 'start',  // 文本左对齐
            fontSize: '18px',
            color: '#333',
        } as React.CSSProperties,
    };

    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <h3
                    style={styles.sidebarTitle(selectedItem.title === 'Overview')}
                    onClick={() => handleItemClick(overviewItem)}
                >
                    Overview
                </h3>
                <ul style={styles.sidebarList}>
                    {items.map((item) => (
                        <li
                            key={item.title} // 使用唯一的title作为key
                            onClick={() => handleItemClick(item)}
                            style={styles.sidebarItem(selectedItem.title === item.title)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </aside>

            <div style={styles.mainContent}>
                <img src={selectedItem.imageUrl} alt={selectedItem.title} style={styles.image} />
                <div style={styles.textBox}>{selectedItem.text}</div>
            </div>
        </div>
    );
};

export default SidebarContent;
