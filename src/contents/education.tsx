import { Link, Element } from 'react-scroll';
import ImageWithCaption from "../components/ImageWithCaption.tsx";
import { useState } from "react";
import BackToTopButton from '../components/BackButton.tsx';
// 使用内联样式
const styles = {
    container: {
        backgroundColor: '#FFF8F0',
        display: 'flex',
        //height从100vh改成auto即可实现点击滚动，原因就在于100vh是固定高度，不会随着内容的增加而增加，用视窗高度限制住了内容
        height: 'auto',
    },
    sidebar: {
        //使用position: sticky;实现侧边栏滚动到顶端固定，必须设置top/bottom等四边属性之一，属性值就是滚动的极限距离，而且父组件不可以设置未overflow:hidden/auto
        top: '70px',
        height: '300px',
        marginRight: '10px',
        marginLeft: '10px',
        width: '350px',
        backgroundColor: '#F0D6B4',
        borderRadius: '20px',
        padding: '20px',
        borderRight: '1px solid #ddd',
        position: 'sticky' as 'sticky',// 强制类型断言
    },
    sidebarItem: {
        marginBottom: '15px',
        fontSize: '22px',
        color: '#c67e38',
        fontWeight: 'bold',
    },
    content: {
        marginLeft: '30px',
        width: '100%',
        backgroundColor: '#fff8f0',
        border: '20px solid #BC8C5B', // 修改这里
        borderRadius: '20px',
        flex: 1,
        padding: '20px',
        overflowY: 'auto' as 'auto',// 强制类型断言

        //用负值的outline代替内圆角，而且radius是一样的

        outline: '5px solid #ffffff',
        outlineOffset: '-20px',
        // boxShadow: '0 0 0 30px #FFF8F0', // 模拟内侧圆角
    },

    section: {
        padding: '50px 0',
        borderBottom: '1px solid #ddd',
    },
    heading: {
        marginBottom: '15px',
        fontSize: '36px',
        color: '#c67e38',
        fontWeight: 'bold',
        textAlign: 'center' as const,
    },
    partheading: {
        marginBottom: '10px',
        fontSize: '30px',
        color: '#c67e38',
        fontWeight: 'bold',
        textAlign: 'center' as const,
    },
    paragraph: {
        lineHeight: 1.4,
        fontSize: '24px',
        textAlign: 'justify' as const,
    },
};

export function Education(): JSX.Element {

    return (
        <main style={{ backgroundColor: '#FFF8F0', minHeight: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                <img
                    src="https://static.igem.wiki/teams/5376/viruse1.png"
                    alt="Left Image"
                    style={{ maxWidth: '200px', height: 'auto' }}
                />

                <img
                    src="https://static.igem.wiki/teams/5376/humanpractices/educationlogo.png"
                    alt="TITLE"
                    style={{ width: '513px', height: '150px', objectFit: 'cover' }}
                />


                <img
                    src="https://static.igem.wiki/teams/5376/viruse2.png"
                    alt="Right Image"
                    style={{ maxWidth: '200px', height: 'auto' }}
                />
            </div>
            <div style={styles.container}>
                <aside style={styles.sidebar}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {['Explanation of Science Popularization', 'Probiotic knowledge quiz', 'Microscopic Observation', 'Microbial Painting', 'Hands-on Cooperation'].map((item, index) => (
                            <li key={index} style={styles.sidebarItem}>
                                <div style={{ textDecoration: 'none', color: '#c67e38', cursor: 'pointer' }}>
                                    <Link
                                        to={`section${index + 1}`}
                                        smooth={true}
                                        duration={50}
                                        offset={-20}
                                        spy={true}
                                        activeClass="active"
                                        onMouseOver={(e) => e.currentTarget.style.color = '#955321'}
                                        onMouseOut={(e) => e.currentTarget.style.color = '#c67e38'}
                                    >
                                        {item}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>
                <BackToTopButton />
                <main style={styles.content}>
                    <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp1.png'}
                            caption={''}>
                        </ImageWithCaption>
                    <Element name="section1" style={styles.section}>
                        <h2 style={styles.heading}>Explanation of Science Popularization</h2>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp2-1.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We organized a scientific talk on <strong style={{ color: '#c67e38' }}>“Gut Health and Probiotics”</strong>. 
                        Through well-designed exhibition boards, we explained in detail the
                         biological roles and metabolic pathways of probiotics, and introduced
                          how to maintain intestinal health through diet and lifestyle in an 
                          easy-to-understand manner. We actively interacted with the audience and
                           answered their questions about probiotics, further promoting the popularization
                            of probiotic knowledge.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp3.png'}
                            caption={''}>
                        </ImageWithCaption>
                    </Element>
                    <Element name="section2" style={styles.section}>
                        <h2 style={styles.heading}>Probiotic knowledge quiz</h2>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp4.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We also conducted a <strong style={{ color: '#c67e38' }}>probiotic knowledge quiz with prizes</strong>, in which participants
                         tested their knowledge base by answering questions on the health benefits of
                          probiotics, metabolites and their effects. This session effectively increased
                           public participation and stimulated more people's interest in probiotics and
                            learning by setting up a reward mechanism.
                        </p>
                        
                    </Element>
                    <Element name="section3" style={styles.section}>
                        <h2 style={styles.heading}>Microscopic Observation</h2>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp5.jpg'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We brought <strong style={{ color: '#c67e38' }}>electron microscopes</strong> and prepared <strong style={{ color: '#c67e38' }}>hundreds of microscopical
                         sections</strong> for observation, allowing visitors to explore the world of
                          microorganisms in a fun way. A lot of children are participated in
                           this activity and we taught the children how to use the microscope.
                            This process raises the public's awareness of microorganisms and
                             allows them to learn more about microorganisms through microscopic
                              observation.
                        </p>
                    </Element>
                    <Element name="section4" style={styles.section}>
                        <h2 style={styles.heading}>Microbial Painting</h2>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp6.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We also brought along <strong style={{ color: '#c67e38' }}>drawings of microorganisms</strong> to 
                        introduce visitors to fluorescent proteins, colored
                         metabolic secretions, and other magical “drawing
                          gadgets” that show the infinite possibilities of
                           the world of microorganisms.
                        </p>
                    </Element>
                    <Element name="section5" style={styles.section}>
                        <h2 style={styles.heading}>Hands-on Cooperation</h2>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp7.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        The most widely spread probiotic food is <strong style={{ color: '#c67e38' }}>yogurt</strong>, and we designed a
                        <strong style={{ color: '#c67e38' }}>homemade yogurt experience</strong>. Many visitors were attracted to stop by
                          and taste and make yogurt themselves. With our assistance, visitors
                           experienced the joy of making yogurt with their own hands, tasted
                            the deliciousness of yogurt, and learned about the application and
                             benefits of probiotic flora.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp8.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        Finally, visitors <strong style={{ color: '#c67e38' }}>drew spring</strong> marks on the kites to express their
                         understanding of the microbial world in nature, harboring deep blessings
                          for our team and great expectations for the future development of
                           synthetic biology.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp9.png'}
                            caption={''}>
                        </ImageWithCaption>
                        
                    </Element>
                </main>
            </div>
        </main>
    );
}

const ChangePage = () => {
    const [currentPart, setCurrentPart] = useState(0);

    const parts = [
        {
            heading: "Part 1: Preliminary Design of Spidey Microbe",
            img: "https://static.igem.wiki/teams/5376/design/design14.png",
            content: [
                "In the early stages of project research and design, we constructed the gut microbiome metabolite database - ProMetab and analyzed it, selecting EcN and Lactococcus lactis F44 from the candidate probiotics.",
                "EcN only has the adhesion module and the preliminary quorum sensing module for expressing lcnG, while Lactococcus lactis F44 produces levodopa and can produce the lcnG immunity gene lagC under IPTG induction."
            ]
        },
        {
            heading: "Part 2: Improvement of Spidey Microbe",
            img: "https://static.igem.wiki/teams/5376/design/design15.png",
            content: [
                "We attended CCiC and communicated with Professor Liu Xingyin from Nanjing Medical University, realizing that having only levodopa in the system cannot further cope with the different stages of Parkinson's disease, and the effect may be poor.",
                "Based on the previous design, we added a strain of Lactococcus lactis F44 that produces serotonin, and 5-HTP can inhibit the motor disorders caused by levodopa in Parkinson's patients."
            ]
        },
        {
            heading: "Part 3: Restructuring of the Quorum Sensing in Spidey Microbe",
            img: "https://static.igem.wiki/teams/5376/design/design16.png",
            content: [
                "To enhance the control of the system, we changed the design of the quorum sensing module, constructed an arabinose-induced lcnG expression circuit in EcN.",
                "We replaced the IPTG-controlled immunity gene lagC expression circuit in Lactococcus lactis F44 with Nisin control, and removed the immunity gene expression circuit in the serotonin-producing bacteria."
            ]
        },
        {
            heading: "Part 4: Expansion of Spidey Microbe",
            img: "https://static.igem.wiki/teams/5376/design/design17.png",
            content: [
                "The dry experiment used the data from ProMetab to analyze the amino acid feeding situation of Lactobacillus plantarum.",
                "We tried to add Lactobacillus plantarum to the system, but due to its difficulty in genetic manipulation, we ultimately used natural Lactobacillus plantarum."
            ]
        }
    ];

    const handleNext = () => {
        if (currentPart < parts.length - 1) {
            setCurrentPart(currentPart + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPart > 0) {
            setCurrentPart(currentPart - 1);
        }
    };

    return (
        <div style={styles.section}>
            <h2 style={styles.heading}>Project Design Iteration</h2>
            <br />
            <h3 style={styles.partheading}>{parts[currentPart].heading}</h3>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div onClick={handlePrevious}
                    style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%', // 将箭头垂直居中
                        transform: 'translateY(-50%)', // 调整垂直位置
                        cursor: currentPart === 0 ? 'not-allowed' : 'pointer',
                        fontSize: '30px'
                    }}>
                    {currentPart > 0 ? '<' : '<'}
                </div>
                <img
                    alt=''
                    src={parts[currentPart].img}
                    style={{
                        display: 'block',
                        margin: '0 auto',
                        width: '85%',
                        borderRadius: '10px',
                    }}
                />
                <div onClick={handleNext}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%', // 将箭头垂直居中
                        transform: 'translateY(-50%)', // 调整垂直位置
                        cursor: currentPart === parts.length - 1 ? 'not-allowed' : 'pointer',
                        fontSize: '30px'
                    }}>
                    {currentPart < parts.length - 1 ? '>' : '>'}
                </div>
            </div>
            <br />
            {parts[currentPart].content.map((text, index) => (
                <p key={index} style={{ ...styles.paragraph, fontSize: '20px' }}>
                    {text}
                </p>
            ))}
        </div>
    );
};




