import { Link, Element } from 'react-scroll';
import ImageWithCaption from "../components/ImageWithCaption.tsx";
import { useEffect, useState } from 'react';

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
      height: '170px',
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

export function Parts(): JSX.Element {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <main style={{ backgroundColor: '#FFF8F0', minHeight: '100vh' }}>
            <div style={{ overflow: 'hidden',backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', padding: '20px', position: 'relative' }}>
                <img
                    src="https://static.igem.wiki/teams/5376/logo1-2.png"
                    alt="Left Image"
                    style={{ maxWidth: '760px', height: 'auto', zIndex: 1 }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/parts/partlogo.png"
                    alt="TITLE"
                    style={{ width: 'auto', height: '250px', position: 'absolute', top: '45%', zIndex: 3 }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse3.png"
                    alt="Left Image"
                    style={{ position:'absolute',maxWidth: '250px',left:'150px',top:'270px', height: 'auto' }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse4.png"
                    alt="Left Image"
                    style={{  position:'absolute',maxWidth: '220px',right:'150px',top:'150px', height: 'auto' }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/bl2-1.png"
                    alt="Left Image"
                    style={{  position:'absolute',width: '200%',
                    right:`${-scrollY * 1.5-20}px`,top:'530px', height: 'auto' ,transform: 'rotate(0deg)',zIndex: 0}}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/bl1.png"
                    alt="Left Image"
                    style={{  position:'absolute',width: '150%',
                    right:`${-scrollY * 1.5}px`,top:'500px', height: 'auto' ,transform: 'rotate(0deg)',zIndex: 0}}
                />

            </div>
            <div style={styles.container}>
            <aside style={styles.sidebar}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {['Overview', 'Basic Part', 'Composite Part'].map((item, index) => (
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
            <main style={styles.content}>
                <Element name="section1" style={styles.section}>
                    <h2 style={styles.heading}>Overview</h2>
                    <p style={styles.paragraph}>
                    In synthetic biology, “parts” are the fundamental units for constructing more complex biological systems. They can be promoters, RNA, proteins, signaling pathways, etc. These components can be standardized and modularized, allowing them to be assembled like Lego bricks to build biological systems with specific functions. The standardization and predictability of parts are key to the successful implementation of synthetic biology because they allow scientists to design and construct reliable biological systems.
                    </p>
                    <p style={styles.paragraph}>
                    In the Spidey Microbe project, we have successfully constructed a series of synthetic biology parts that implement various functions in Escherichia coli Nissle 1917 (EcN) and Lactococcus lactis F44, including adhesion module, therapy module, quorum sensing module, and microbial community characterization. Here are some key parts and their functions in our project:
                    </p>
                    <p style={styles.paragraph}>
                    1.  <strong style={{ color: '#c67e38' }}>Adhesion Module</strong>: We designed and constructed a fusion protein of streptavidin (SA) and the adhesion protein binding protein (MBD93) to enhance the adhesion ability of EcN to the host intestinal epithelial cells. By changing the promoter and introducing an RFP tag, we optimized the expression of SA and successfully verified the binding of EcN to mucin.
                    </p>
                    <p style={styles.paragraph}>
                    2.  <strong style={{ color: '#c67e38' }}>Therapy Module</strong>:
                    </p>
                    <p style={styles.paragraph}>
                    Butyrate-EcN: By enhancing the carbon metabolic flow of EcN, we increased its butyrate production capacity, which is crucial for intestinal health.
                    </p>
                    <p style={styles.paragraph}>
                    L-DOPA-Lactococcus lactis F44: We successfully constructed a pathway for L-DOPA production, obtaining L-DOPA through a one-step decarboxylation of L-tyrosine, proving the feasibility of constructing this metabolic pathway in Lactococcus lactis F44.
                    </p>
                    <p style={styles.paragraph}>
                    Serotonin-Lactococcus lactis F44: By overexpressing the N-acetyltransferase, we enhanced the production of serotonin, an important neurotransmitter that has potential benefits for regulating intestinal function.
                    </p>
                    <p style={styles.paragraph}>3.  <strong style={{ color: '#c67e38' }}>Microbial Community Fluorescence Characterization</strong>: We used fluorescent proteins RFP, YFP, and BFP to label Lactococcus lactis F44 and EcN, and achieved real-time monitoring of the number and distribution of microbial communities through the measurement of fluorescence values.</p>
                    <p style={styles.paragraph}>4.  <strong style={{ color: '#c67e38' }}>Quorum Sensing Module</strong>: We constructed a communication system based on quorum sensing by expressing the lcnG gene under the control of the paraBAD promoter and the lagC immune gene under the control of the Pnis promoter, achieving molecular communication between EcN and Lactococcus lactis F44. This is significant for regulating community behavior and enhancing therapeutic effects.</p>
                    <p style={styles.paragraph}>The successful construction and functional verification of these parts demonstrate the potential of synthetic biology in microbial engineering and provide a solid foundation for the development of new microbial therapeutic strategies.</p>
                </Element>
                <Element name="section2" style={styles.section}>
                    <h2 style={styles.heading}>Basic Part</h2>
                  
                </Element>
                <Element name="section3" style={styles.section}>
                    <h2 style={styles.heading}>Composite Part</h2>
                    <table className="threeLine">
                        <thead>
                            <tr>
                                <th>Parts</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>    
                                <td>Adhesion Module</td>
                                <td>A </td>
                            </tr>
                        </tbody>
                    </table>
                </Element>
               
            </main>
        </div>
        </main>
        
    )
        ;
}




