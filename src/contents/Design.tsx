import SidebarContent, {SidebarItem} from '../components/SidebarContent';

export function Design() {
    // 定义侧边栏的内容
    const sidebarItems: SidebarItem[] = [
        {
            title: 'Part1. Metabolite database of probiotics—MDOP',
            imageUrl: 'https://static.igem.wiki/teams/5376/overview.png',
            text: '这是关于益生菌代谢物数据库 MDOP 的详细介绍。',
        },
        {
            title: 'Part2. Software package—MDOP Tool',
            imageUrl: 'https://static.igem.wiki/teams/5376/tool.png',
            text: '这是关于 MDOP 工具包的软件部分的详细介绍。',
        },
        {
            title: 'Reference',
            imageUrl: 'https://static.igem.wiki/teams/5376/reference.png',
            text: '这是参考文献部分的详细介绍。',
        },
    ];

    return (
        <main style={{backgroundColor: '#FFF8F0', minHeight: '100vh'}}>
            {/* 头部区域 */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <img
                    src="https://static.igem.wiki/teams/5376/viruse1.png"
                    alt="Left Image"
                    style={{maxWidth: '100px', height: 'auto'}}
                />

                <img
                    src="https://static.igem.wiki/teams/5376/design.png"
                    alt="TITLE"
                    style={{width: '400px', height: '110px', objectFit: 'cover'}}
                />

                <img
                    src="https://static.igem.wiki/teams/5376/viruse2.png"
                    alt="Right Image"
                    style={{maxWidth: '100px', height: 'auto'}}
                />
            </div>

            <SidebarContent items={sidebarItems}/>
        </main>
    );
}

export default Design;
