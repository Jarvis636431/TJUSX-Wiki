import { Link, Element } from 'react-scroll';
//import ImageWithCaption from "../components/ImageWithCaption.tsx";

// 使用内联样式
const styles = {
    container: {
        backgroundColor: '#FFF8F0',
        display: 'flex',

        //height从100vh改成auto即可实现点击滚动，原因就在于100vh是固定高度，不会随着内容的增加而增加，用视窗高度限制住了内容

        height: 'auto',
        overflow: 'hidden',
    },
    sidebar: {
        marginRight: '10px',
        marginLeft: '10px',
        width: '250px',
        backgroundColor: '#F0D6B4',
        borderRadius: '20px',
        padding: '20px',
        borderRight: '1px solid #ddd',
        position:'fixed' as 'fixed',// 强制类型断言
    },
    sidebarItem: {
        marginBottom: '15px',
    },
    content: {
        marginLeft: '270px',
        width: '100%',
        backgroundColor: '#ffffff',
        border: '20px solid #BC8C5B', // 修改这里
        borderRadius: '20px',
        flex: 1,
        padding: '20px',
        overflowY: 'auto' as 'auto',// 强制类型断言

        //用负值的outline代替内圆角，而且radius是一样的

        outline:'5px solid #ffffff',
        outlineOffset: '-20px',
        // boxShadow: '0 0 0 30px #FFF8F0', // 模拟内侧圆角
    },

    section: {
        padding: '50px 0',
        borderBottom: '1px solid #ddd',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
    },
    partheading: {
        marginBottom: '10px',
        fontSize: '20px',
    },
    paragraph: {
        lineHeight: 1.6,
    },
};

export function Software() {
    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <ul style={{listStyle: 'none', padding: 0}}>
                    {['Overview', 'Part 1. Probiotic Metabolite—ProMetab', 'Part2. Software package—ProMetab Tool', 'Part3. How does our software help with wet lab', 'Reference'].map((item, index) => (
                        <li key={index} style={styles.sidebarItem}>
                            <div style={{textDecoration: 'none', color: '#333', cursor: 'pointer'}}>
                                <Link
                                    to={`section${index + 1}`}
                                    smooth={true}
                                    duration={50}
                                    offset={-20}
                                    spy={true}
                                    activeClass="active"
                                    onMouseOver={(e) => e.currentTarget.style.color = '#C27529'}
                                    onMouseOut={(e) => e.currentTarget.style.color = '#333'}
                                >
                                    {item}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </aside>
            <main style={styles.content}>
                <Element name="section1" style={styles.section}>
                    <h2 style={styles.partheading}>Overview</h2>
                </Element>
                <Element name="section2" style={styles.section}>
                    <h2 style={styles.partheading}>Part 1. Probiotic Metabolite—ProMetab</h2>
                </Element>
                <Element name="section3" style={styles.section}>
                    <h2 style={styles.partheading}>Part2. Software package—ProMetab Tool</h2>
                </Element>
                <Element name="section4" style={styles.section}>
                    <h2 style={styles.partheading}>Part3. How does our software help with wet lab</h2>
                </Element>
                <Element name="section5" style={styles.section}>
                    <h2 style={styles.partheading}>Reference</h2>
                    <p style={styles.paragraph}>[1] Taolin, Wang Bohua, et al. Database and Bioinformatics Studies of Probiotics[J]. JOURNAL OF AGRICULTURAL AND FOOD CHEMISTRY, 2017, 65(35): 7600-7603.</p>
                    <p style={styles.paragraph}>[2] UniProt Consortium (2021). UniProt: the universal protein knowledgebase in 2021. Nucleic acids research, 49(D1), D480–D489.</p>
                    <p style={styles.paragraph}>[3] Yu, Tianhao, Cui, Haiyang, Li, Jianan Canal, Luo, Yunan, Jiang, Guangde, & Zhao, Huimin. (2023). Enzyme function prediction using contrastive learning. Science, 379(6639), 1358-1363.</p>
                    <p style={styles.paragraph}>[4] Schomburg, I., Jeske, L., Ulbrich, M., Placzek, S., Chang, A., & Schomburg, D. (2017). The BRENDA enzyme information system–From a database to an expert system. Journal of Biotechnology, 261, 194-206. </p>
                    <p style={styles.paragraph}>[5] Elizabeth J. Culp, Andrew L. Goodman.Cross-feeding in the gut microbiome: Ecology and mechanisms[J]. CELL HOST & MICROBE, 2023, 31(4): 486-493.</p>
                    <p style={styles.paragraph}>[6] Morgan N. Price, Adam M. Deutschbauer, et al. GapMind: Automated Annotation of Amino Acid Biosynthesis[J]. MSYSTEMS, 2020, 5(3).</p>
                    <p style={styles.paragraph}>[7] Guia J, Soares V G, Bernardino J. Graph Databases: Neo4j Analysis [C/OL]. In International Conference on Enterprise Information Systems, 2017.</p>
                </Element>
            </main>
        </div>);
}
