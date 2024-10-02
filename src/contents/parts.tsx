import { Link, Element } from 'react-scroll';
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
            <div style={{ overflow: 'hidden', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', padding: '20px', position: 'relative' }}>
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
                    style={{ position: 'absolute', maxWidth: '250px', left: '150px', top: '270px', height: 'auto' }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse4.png"
                    alt="Left Image"
                    style={{ position: 'absolute', maxWidth: '220px', right: '150px', top: '150px', height: 'auto' }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/bl2-1.png"
                    alt="Left Image"
                    style={{
                        position: 'absolute', width: '200%',
                        right: `${-scrollY * 1.5 - 20}px`, top: '530px', height: 'auto', transform: 'rotate(0deg)', zIndex: 0
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/bl1.png"
                    alt="Left Image"
                    style={{
                        position: 'absolute', width: '150%',
                        right: `${-scrollY * 1.5}px`, top: '500px', height: 'auto', transform: 'rotate(0deg)', zIndex: 0
                    }}
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
                        <h2 style={styles.heading}>Part</h2>
                        <table className="threeLine">
                            <thead>
                                <tr>
                                    <th>Part name</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>More</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_J97003'>BBa_J97003</a></td>
                                    <td>RFP</td>
                                    <td>TannenRFP, red fluorescent protein used to characterize Escherichia coli</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K864100'>BBa_K864100</a></td>
                                    <td>YFP</td>
                                    <td>SYFP2, yellow fluorescent protein used to characterize Lactococcus lactis</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K592100'>BBa_K592100</a></td>
                                    <td>BFP</td>
                                    <td>mTagBFP, blue fluorescent protein used to characterize Lactococcus lactis</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_E1010'>BBa_E1010</a></td>
                                    <td>mRFP</td>
                                    <td>mRFP, red fluorescent protein used to characterize Escherichia coli</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_I719005'>BBa_I719005</a></td>
                                    <td>T7</td>
                                    <td>T7 is a strong promoter from T7 bacteriophage that can specifically react to T7 RNA polymerase. When placed in front of the LacO element (sequence), it forms the T7 lac promoter</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K2361008'>BBa_K2361008</a></td>
                                    <td>P32</td>
                                    <td>Lactococcus lactis constitutive expression promoter</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376004'>BBa_K5376004</a></td>
                                    <td>P45</td>
                                    <td>Lactococcus lactis expression type promoter</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_J23111'>BBa_J23111</a></td>
                                    <td>J23111</td>
                                    <td>Transcription of the promoter of butyric acid production elements based on EcN</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K1830001'>BBa_K1830001</a></td>
                                    <td>Pnis</td>
                                    <td>Nisin induced Lactococcus lactis promoter</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_I0500'>BBa_I0500</a></td>
                                    <td>Inducible pBad/araC promoter</td>
                                    <td>PA BAD is a kind of E. coli promoter that is controlled by the inducer arabinose and repressor araC to manipulate the expression of the lcnG gene</td>
                                    <td>Exist</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376001'>BBa_K5376001</a></td>
                                    <td>SA</td>
                                    <td>Streptavidin</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376003'>BBa_K5376003</a></td>
                                    <td>CSA</td>
                                    <td>Core streptavidin</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376001'>BBa_K5376001</a></td>
                                    <td>mbd93</td>
                                    <td>Intestinal mucus binding protein</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376005'>BBa_K5376005</a></td>
                                    <td>NDSP</td>
                                    <td>Localization of Escherichia coli proteins to the extracellular space</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376006'>BBa_K5376006</a></td>
                                    <td>Usp45</td>
                                    <td>Localization of proteins from Lactococcus lactis to the extracellular space</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376007'>BBa_K5376007</a></td>
                                    <td>3LySM</td>
                                    <td>As a structural domain, it binds to the N-terminus of streptavidin, thereby achieving the display of streptavidin on the surface of F44</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376008'>BBa_K5376008</a></td>
                                    <td>cat1</td>
                                    <td>Expressing acetyl CoA acetyltransferase</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376009'>BBa_K5376009</a></td>
                                    <td>lagC</td>
                                    <td>LcnG immune gene</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376013'>BBa_K5376013</a></td>
                                    <td>NDSP-MBD93-cSA</td>
                                    <td>The C-terminal is connected to MBD93 (a binding protein for intestinal mucin), which is the core streptavidin</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376014'>BBa_K5376014</a></td>
                                    <td>NDSP-SA-MBD93</td>
                                    <td>MBD93 (a binding protein for intestinal mucin) with streptavidin at the N-terminus</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376015'>BBa_K5376015</a></td>
                                    <td>NDSP-MBD93-SA</td>
                                    <td>The C-terminal is connected to MBD93 (a binding protein for intestinal mucin) of streptavidin</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376016'>BBa_K5376016</a></td>
                                    <td>NDSP-cSA-MBD93</td>
                                    <td>MBD93 (a binding protein for intestinal mucin) with core streptavidin connected to the N-terminus</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376017'>BBa_K5376017</a></td>
                                    <td>cSA-mRFP</td>
                                    <td>Core streptavidin fused with red fluorescent protein at C-terminus</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376018'>BBa_K5376018</a></td>
                                    <td>Pnis-hpaBC</td>
                                    <td>Inducing the expression of hppaBC</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376019'>BBa_K5376019</a></td>
                                    <td>araC-paraBAD-lcnG</td>
                                    <td>Nisin induced, second-class dual subunit lactobacilli bacteriocin, toxic to lactic acid bacteria</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376021'>BBa_K5376021</a></td>
                                    <td>hpaBC</td>
                                    <td>Encoding generates 4-hydroxyphenylacetacid-3-hydroxylase, which catalyzes the hydroxylation and decarboxylation of L-tyrosine to obtain levodopamine</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376022'>BBa_K5376022</a></td>
                                    <td>lcnG</td>
                                    <td>Class II dual subunit lactobacilli bacteriocins</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376023'>BBa_K5376023</a></td>
                                    <td>Pnis-NAT</td>
                                    <td>Inducing the expression of N-acetyltransferase</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376024'>BBa_K5376024</a></td>
                                    <td>NAT</td>
                                    <td>Encoding produces N-acetyltransferase, enhancing the production of serotonin</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376025'>BBa_K5376025</a></td>
                                    <td>Usp45-3LysM-cSA-mRFP</td>
                                    <td>Surface display of cSA RFP in Lactococcus lactis</td>
                                    <td>New</td>
                                </tr>
                                <tr>
                                    <td><a href='https://parts.igem.org/Part:BBa_K5376026'>BBa_K5376026</a></td>
                                    <td>Usp45-3LysM-cSA</td>
                                    <td>Surface display of cSA in Lactococcus lactis</td>
                                    <td>New</td>
                                </tr>

                            </tbody>
                        </table>
                    </Element>
                    <Element name="section3" style={styles.section}>
                        <h2 style={styles.heading}>Composite Part</h2>
                        <table className="threeLine">
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>Name</th>
                                    <th>Resistance Marker</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>pETDuet-1-J23119</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>pETDuet-1-J23119-SA</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>pETDuet-1-J23119-MBD93</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>pETDuet-1-T7-SA-RFP</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>pJUMP27-1A(DE3)</td>
                                    <td>Kanamycin</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>pETDuet-1-T7-SA</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>pETDuet-1-T7-cSA</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>pETDuet-1-T7-cSA-RFP</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>pETDuet-1-T7-MBD93-SA</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>pETDuet-1-T7-MBD93-cSA</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>pETDuet-1-T7-MBD93</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>pJUMP27-1A(DE3-J23111-RFP)</td>
                                    <td>Kanamycin</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>pETDuet-1-T7-SA-MBD93</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>pETDuet-1-T7-cSA-MBD93</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>pLEB124-P45-USP45-3LysM-cSA-mRFP</td>
                                    <td>Erythromycin</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>pJUMP26-1A(J23111-cat1)</td>
                                    <td>Kanamycin</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>pETDuet-1-T7-hpaBC</td>
                                    <td>chloramphenicol</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>pNZ8148-Pnis-hpaBC</td>
                                    <td>chloramphenicol</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>pNZ8148-Pnis-NAT</td>
                                    <td>chloramphenicol</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>pRGB-F44-sg1</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>21</td>
                                    <td>pRGB-F44-sg2</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>pRGB-F44-sg3</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <td>pRGB-1917-sg1</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <td>pRGB-1917-sg2</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <td>pRGB-1917-sg3</td>
                                    <td>Ampicillin</td>
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <td>pLEB124-P45-USP45-3LysM-SA</td>
                                    <td>Erythromycin</td>
                                </tr>
                                <tr>
                                    <td>27</td>
                                    <td>pLEB124-P45-USP45-3LysM-cSA</td>
                                    <td>Erythromycin</td>
                                </tr>
                                <tr>
                                    <td>28</td>
                                    <td>pNZ8148-Pnis-hpaBC-lagC</td>
                                    <td>chloramphenicol</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>pLEB124-P45-USP45-3LysM-cSA-P32-BFP</td>
                                    <td>Erythromycin</td>
                                </tr>
                                <tr>
                                    <td>30</td>
                                    <td>pJUMP27-1A(J23111-TannenRFP-DE3)</td>
                                    <td>Kanamycin</td>
                                </tr>
                                <tr>
                                    <td>31</td>
                                    <td>pJUMP26-1A(J23111-cat1-paraBAD-lcnG)</td>
                                    <td>Kanamycin</td>
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




