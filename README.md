# TJUSX 2024 iGEM 团队 Wiki

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.18.0-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](https://www.typescriptlang.org/)

> 🧬 TJUSX iGEM 2024 团队官方 Wiki 网站 - 使用现代 Web 技术展示我们的合成生物学项目。

## ✨ 功能特色

- 🎨 **现代化 UI/UX**：美观的响应式设计，配有视差滚动效果
- 📱 **移动端优先**：针对所有设备和屏幕尺寸进行优化
- ⚡ **高性能**：使用 Vite 构建，开发和构建速度极快
- 🧩 **组件化架构**：模块化 React 组件，易于维护
- 🎯 **类型安全**：完整的 TypeScript 支持，开发更稳健
- 🚀 **自动部署**：CI/CD 流水线，无缝部署到 iGEM 服务器
- 🎪 **交互元素**：动态 GIF 展示和流畅动画效果

## 📋 项目概述

本仓库包含 TJUSX 2024 iGEM 团队 wiki 的完整源代码，使用 React、TypeScript 和 Vite 等现代 Web 技术构建。该 wiki 全面展示了我们的合成生物学项目，涵盖团队信息、项目描述、实验结果、安全考虑等各个方面。

### 🎯 主要板块

- **首页**：具有视差效果的交互式着陆页
- **团队**：成员简介和贡献说明
- **项目**：详细的项目描述和贡献内容
- **湿实验**：工程成功案例、实验协议和结果
- **干实验**：数学建模和软件工具
- **人文实践**：社区参与和伦理考量
- **安全**：全面的安全协议和风险评估

## 🚀 快速开始

### 环境要求

- **Node.js**：版本 `^18.18.0` 或 `>=20.0.0`（推荐：`v18.20.0`）
- **Yarn**：包管理器（推荐）或 npm
- **Git**：版本控制工具

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://gitlab.igem.org/2024/tjusx
   cd tjusx
   ```

2. **安装依赖**
   ```bash
   yarn install
   # 或者
   npm install
   ```

3. **配置环境变量**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，配置团队特定的设置
   ```

4. **启动开发服务器**
   ```bash
   yarn dev
   # 或者
   npm run dev
   ```

5. **打开浏览器**
   访问 `http://localhost:5173` 查看你的 wiki！🎉

## 🛠️ 开发指南

### 项目结构

```
src/
├── components/          # 可复用的 UI 组件
│   ├── Navbar.tsx      # 导航栏
│   ├── Footer.tsx      # 页脚
│   ├── Card.tsx        # 内容卡片
│   └── ...
├── containers/
│   └── App/            # 主应用容器
├── contents/           # 页面内容组件
│   ├── home.tsx        # 带视差效果的首页
│   ├── Members.tsx     # 团队成员简介
│   ├── description.tsx # 项目描述
│   └── ...
├── utils/              # 工具函数
├── pages.ts            # 路由定义和页面映射
└── main.tsx           # 应用入口点
```

### 添加新页面

1. 在 `src/contents/` 中创建新组件
2. 从 `src/contents/index.tsx` 导出该组件
3. 在 `src/pages.ts` 中添加路由配置
4. 页面将自动出现在导航中

### 自定义组件

- **导航栏**：修改 `src/components/Navbar.tsx`
- **页脚**：编辑 `src/components/Footer.tsx`
- **样式**：更新组件特定的 CSS 或全局样式

### 可用脚本

```bash
# 开发
yarn dev          # 启动开发服务器
yarn build        # 构建生产版本
yarn preview      # 预览生产构建

# 代码质量
yarn lint         # 运行 ESLint
yarn format       # 使用 Prettier 格式化代码

# 部署
yarn deploy       # 部署到 iGEM 服务器（自动化）
```

## 🏗️ 技术架构

### 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| [React](https://reactjs.org) | 18.2.0 | 构建交互式界面的 UI 库 |
| [TypeScript](https://www.typescriptlang.org) | 5.2.2 | 类型安全的 JavaScript 开发 |
| [Vite](https://vitejs.dev) | 5.2.0 | 快速构建工具和开发服务器 |
| [React Router](https://reactrouter.com) | 6.23.0 | 客户端路由 |
| [Bootstrap](https://getbootstrap.com) | 5.3.3 | 响应式设计的 CSS 框架 |
| [React Bootstrap](https://react-bootstrap.github.io) | 2.10.2 | React 版本的 Bootstrap 组件 |
| [Styled Components](https://styled-components.com) | 6.1.13 | CSS-in-JS 样式解决方案 |
| [Tailwind CSS](https://tailwindcss.com) | 3.4.6 | 实用优先的 CSS 框架 |
| [Three.js](https://threejs.org) | 0.166.1 | 3D 图形库 |
| [ECharts](https://echarts.apache.org) | 5.5.1 | 数据可视化图表 |

### 核心功能实现

- **视差滚动**：首页自定义滚动效果
- **响应式设计**：基于 Bootstrap 网格的移动端优先方案
- **组件架构**：模块化、可复用的 React 组件
- **类型安全**：完整的 TypeScript 集成
- **性能优化**：使用 Vite 打包优化
- **SEO 友好**：合适的 meta 标签和语义化 HTML

## 📁 文件结构

```
TJUSX-Wiki/
├── 📄 README.md              # 项目文档
├── 📄 index.html             # 主 HTML 模板
├── 📄 package.json           # 依赖和脚本
├── 📄 vite.config.ts         # Vite 配置
├── 📄 tsconfig.json          # TypeScript 配置
├── 📄 .gitlab-ci.yml         # CI/CD 流水线
├── 📁 src/
│   ├── 📁 components/        # 可复用的 UI 组件
│   │   ├── Navbar.tsx        # 导航组件
│   │   ├── Footer.tsx        # 页脚组件
│   │   ├── Card.tsx          # 卡片组件
│   │   └── ...
│   ├── 📁 containers/
│   │   └── App/              # 主应用容器
│   ├── 📁 contents/          # 页面内容组件
│   │   ├── home.tsx          # 带动画的首页
│   │   ├── Members.tsx       # 团队成员页面
│   │   ├── description.tsx   # 项目描述
│   │   └── ...
│   ├── 📁 utils/             # 工具函数
│   ├── 📄 pages.ts           # 路由定义
│   └── 📄 main.tsx           # 应用入口点
└── 📁 public/                # 静态资源
```

## 🎨 设计系统

### 色彩方案
- 主色调：iGEM 品牌色彩
- 背景色：`#fff8f0`（暖白色）
- 不同板块的强调色

### 字体排版
- 现代、易读的字体
- 一致的标题层级
- 响应式文字大小

### 组件设计
- 一致的间距和内边距
- 悬停效果和过渡动画
- 无障碍设计模式

## 🚀 部署

### 自动部署
项目使用 GitLab CI/CD 进行自动部署：
1. 将更改推送到主分支
2. GitLab runner 构建项目
3. 自动部署到 iGEM 服务器
4. Wiki 在团队的 iGEM URL 上线

### 手动部署
```bash
# 构建项目
yarn build

# dist/ 文件夹包含构建文件
# 上传到你的托管服务商
```

## 📝 内容指南

### iGEM 要求
- 所有图片必须托管在 `static.igem.wiki`
- 视频必须从 [iGEM Video Universe](https://video.igem.org) 嵌入
- 遵循 iGEM wiki 指南和要求
- 确保所有内容原创或正确标注来源

### 最佳实践
- 保持内容简洁有趣
- 使用高质量的图片和图形
- 保持一致的语调和风格
- 在多种设备和浏览器上测试

## 🤝 贡献

1. **Fork** 本仓库
2. **创建** 功能分支 (`git checkout -b feature/amazing-feature`)
3. **提交** 你的更改 (`git commit -m 'Add amazing feature'`)
4. **推送** 到分支 (`git push origin feature/amazing-feature`)
5. **打开** Pull Request

## 📞 支持

- **iGEM 资源**：[competition.igem.org/deliverables/team-wiki](https://competition.igem.org/deliverables/team-wiki)
- **技术问题**：在本仓库中创建 issue
- **iGEM 工具**：[tools.igem.org](https://tools.igem.org)

## 📄 许可证

本项目采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- iGEM 基金会提供的竞赛平台
- TJUSX 团队成员的贡献
- 开源社区提供的优秀工具和库

---

**由 TJUSX iGEM 2024 团队用 ❤️ 制作**
