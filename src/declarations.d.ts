// src/declarations.d.ts
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

// declarations.d.ts
declare module 'react-scroll' {
    // 声明Link组件的props类型
    export interface LinkProps {
        activeClass?: string;       // 当元素在屏幕上时的类名
        to: string;                 // 滚动到的元素名称
        spy?: boolean;              // 是否监视元素并激活类名
        smooth?: boolean;           // 是否平滑滚动
        offset?: number;            // 滚动的偏移量
        duration?: number;          // 滚动持续的时间
        delay?: number;             // 滚动的延迟时间
        isDynamic?: boolean;        // 动态容器大小是否影响滚动
        onSetActive?: () => void;   // 当元素激活时的回调
        onSetInactive?: () => void; // 当元素不激活时的回调
        ignoreCancelEvents?: boolean; // 是否忽略滚动取消事件
        containerId?: string;       // 容器的ID
        children?: React.ReactNode; // 子元素
    }

    // 声明Element组件的props类型
    export interface ElementProps {
        name: string;               // 元素的名字（用来与Link对应）
        id?: string;                // 元素的ID
        className?: string;         // 元素的类名
        style?: React.CSSProperties; // 自定义样式
        children?: React.ReactNode; // 子元素
    }

    // 声明Link组件
    export const Link: React.ComponentType<LinkProps>;

    // 声明Element组件
    export const Element: React.ComponentType<ElementProps>;
}

