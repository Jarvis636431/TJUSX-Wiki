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

export function Description(): JSX.Element {
    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {['Overview', 'Adhension Module', 'Therapeutic Modules', 'Quorum Sensing Module', 'Community Characterization Methods', 'Project Design Iteration', 'Reference'].map((item, index) => (
                        <li key={index} style={styles.sidebarItem}>
                            <div style={{ textDecoration: 'none', color: '#333', cursor: 'pointer' }}>
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
                    <h2 style={styles.partheading}>Project Description</h2>
                    <p>
                        The probiotic microbiota holds great potential for treating and alleviating gastrointestinal and
                        gut-brain axis-related diseases. However, its limited intestinal colonization ability and
                        complex microbial interactions restrict its therapeutic application. To overcome these
                        limitations, we have engineered a superhero—<strong>Microbe Spidey</strong>, comprising <i>Escherichia
                        coli Nissle</i> 1917(EcN) and <i>Lactococcus lactis</i> F44. This includes a biotin-affinity
                        based <strong>gut adhesion system</strong> and a quorum sensing-based <strong>interaction
                        system</strong>, allowing the probiotics to <strong>"weave webs" </strong>and adhere the gut as
                        well as Spider-man. We aim to design genetic circuits to control the expression of mucin binding
                        protein in EcN and facilitate inter-probiotic adhesion to control Microbe Spidey's <strong>"spider
                        silk"</strong> in the gut. Additionally, we plan to endow Microbe Spidey with enhanced
                        superpowers, so we are developing cell factories in <i>Lactococcus lactis</i> F44 to express
                        various therapeutic agents. Microbe Spidey will challenge the disease “monsters”—<strong>Parkinson's
                        Disease</strong> (PD) and <strong>Inflammatory Bowel Disease</strong> (IBD) to validate its
                        efficacy.
                    </p>
                </Element>
                <Element name="section2" style={styles.section}></Element>
                <Element name="section3" style={styles.section}></Element>
                <Element name="section4" style={styles.section}></Element>
                <Element name="section5" style={styles.section}></Element>
                <Element name="section6" style={styles.section}></Element>
                <Element name="section7" style={styles.section}></Element>
            </main>
        </div>
    );
}




