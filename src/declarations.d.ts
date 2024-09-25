// src/declarations.d.ts
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

// declarations.d.ts
declare module 'react-scroll' {
    // 声明Link组件的props类型
    import React from "react";

    export interface LinkProps {
        activeClass?: string,
        to: string,
        spy?: boolean,
        smooth?: boolean,
        offset?: number,
        duration?: number,
        delay?: number,
        isDynamic?: boolean,
        onSetActive?: () => void,
        onSetInactive?: () => void,
        ignoreCancelEvents?: boolean,
        containerId?: string,
        children?: React.ReactNode,
        onMouseOver?: (e) => string,
        onMouseOut?: (e) => string
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

