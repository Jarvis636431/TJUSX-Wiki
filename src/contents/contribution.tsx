import { Link, Element } from 'react-scroll';
import BackToTopButton from '../components/BackButton.tsx';
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

export function Contribution(): JSX.Element {
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
                    src="https://static.igem.wiki/teams/5376/contribution/contributionlogo.png"
                    alt="TITLE"
                    style={{ maxWidth: 'auto', height: '200px', position: 'absolute', top: '45%', zIndex: 3 }}
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
                    {['Overview', 'New Components', 'Community Characterization', 'Modular Probiotics', 'Database and Support'].map((item, index) => (
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
            <BackToTopButton />
                <Element name="section1" style={styles.section}>
                    <h2 style={styles.heading}>Overview</h2>
                    <p style={styles.paragraph}>
                    In our project design, we have utilized databases for the
                     analysis of probiotics and achieved the scientific
                      construction of artificial probiotic communities.
                       We have developed relevant software and methods
                        for community interaction analysis based on <strong style={{ color: '#c67e38' }}>metabolic
                         products</strong>, and selected three strains of probiotics
                         : Escherichia coli Nissle 1917, Lactococcus lactis
                          F44, and Lactobacillus plantarum ATCC 8014. In wet
                           experiments, we genetically modified two of these
                            probiotics (Escherichia coli Nissle 1917 and
                             Lactococcus lactis F44) and constructed a
                              <strong style={{ color: '#c67e38' }}>mixed community system of engineered and
                               natural bacteria—"Spidey Microbe"</strong>.
                    </p>
                    <p style={styles.paragraph}>
                    "Spidey Microbe" consists of three main modules: <strong style={{ color: '#c67e38' }}>adhesion module, therapeutic module, and quorum sensing module</strong>. To further facilitate the characterization of microbial communities, we established a strain marking based on fluorescent proteins and <strong style={{ color: '#c67e38' }}>measured its effectiveness</strong>.
                    </p>
                    <p style={styles.paragraph}>
                    Our project's work has provided data support and assistance to other teams' projects.
                    </p>
                </Element>
                <Element name="section2" style={styles.section}>
                    <h2 style={styles.heading}>New Components</h2>
                    <br />
                    <h3 style={styles.partheading}>Adhesion Module</h3>
                    <p style={styles.paragraph}>
                    We have constructed <strong style={{ color: '#c67e38' }}>new components</strong>: <strong style={{ color: '#c67e38' }}>streptavidin and streptavidin-fusion with red fluorescent protein, core streptavidin and core streptavidin-fusion with red fluorescent protein</strong>. We determined the expression of streptavidin and core streptavidin fused with red fluorescent protein in EcN , measured their <strong style={{ color: '#c67e38' }}>expression curves</strong>, and found that the full-length streptavidin fused with red fluorescent protein could not express fluorescence normally, considering <strong style={{ color: '#c67e38' }}>structural abnormalities</strong> or <strong style={{ color: '#c67e38' }}>intracellular hydrolysis</strong>, thus ruling out faults for other teams.
                    </p>
                    <p style={styles.paragraph}>
                    We also constructed a module for the <strong style={{ color: '#c67e38' }}>surface display of core streptavidin</strong> in Gram-positive bacteria and measured it using red fluorescent protein.
                    </p>
                    <p style={styles.paragraph}>
                    These components will not only play an important role in our project context but also, due to the fusion of His-tag at the C-terminus of the proteins, can be greatly utilized in other  <strong style={{ color: '#c67e38' }}>biological measurements</strong> and  <strong style={{ color: '#c67e38' }}>biotin-related bioconjugation reactions</strong>.
                    </p>
                    <p style={styles.paragraph}>
                    We also tested microbial biotinylation, and after biotinylation of EcN, Lactococcus lactis F44 displaying streptavidin on the surface could aggregate with EcN, indicating that the <strong style={{ color: '#c67e38' }}>biotin-streptavidin-mediated aggregation</strong> of microorganisms is effective.
                    </p>
                    <p style={styles.paragraph}>
                    We also tested whether extracellularly secreted streptavidin could self-assemble on biotinylated cell surfaces. We observed this binding using a laser confocal microscope and found it is effective.
                    </p>
                    <p style={styles.paragraph}>
                    In this module, we also characterized an important domain of <strong style={{ color: '#c67e38' }}>mucin-binding protein MBD93</strong> and tested the display strategy of biotinylated cell surface-streptavidin labeled MBD93 for binding to Mucin. The results and data from these experiments will provide assistance and troubleshooting for other teams and similar research.
                    </p>

                    <h3 style={styles.partheading}>Therapeutic Module</h3>
                    <p style={styles.paragraph}>
                    In the therapeutic module, we attempted to produce <strong style={{ color: '#c67e38' }}>three therapeutic factors: butyrate, levodopa, and serotonin</strong>. We measured the impact of overexpressing acetyl-CoA acetyltransferase on cell growth to increase butyrate production.
                    </p>
                    <p style={styles.paragraph}>
                    We determined in EcN whether expressing 4-hydroxyphenylacetate-3-hydroxylase could generate levodopa and measured the impact of this enzyme expression on cell growth in Lactococcus lactis F44. We <strong style={{ color: '#c67e38' }}>emulated drug release curves</strong> to measure the production of levodopa at different times by the bacteria.
                    </p>
                    <p style={styles.paragraph}>
                    We also attempted the expression of serotonin, constructed a plasmid overexpressing N-acetyltransferase in Lactococcus lactis F44, and tested whether this approach could increase the serotonin production of Lactococcus lactis F44. We also measured the impact of this enzyme expression on cells and the drug release curve.
                    </p>

                    <h3 style={styles.partheading}>Quorum Sensing Module</h3>
                    <p style={styles.paragraph}>
                    In this module, we verified the <strong style={{ color: '#c67e38' }}>bactericidal effect</strong> of class II bacteriocin lcnG on Lactococcus lactis F44 and the <strong style={{ color: '#c67e38' }}>immune effect</strong> of lagC against this bactericidal action.
                    </p>
                    <p style={styles.paragraph}>
                    We constructed four system control strategies for Spidey Microbe through genetic circuits: <strong style={{ color: '#c67e38' }}>pause, start, switch, and end</strong>, which increased the regulation of the microbial community.
                    </p>
                    <p style={styles.paragraph}>
                    We combined the quorum sensing module with the adhesion module to ensure the safety of Spidey Microbe. Compared to previous teams using suicide modules for <strong style={{ color: '#c67e38' }}>safety</strong>, we constructed a process for the <strong style={{ color: '#c67e38' }}>lysis of bacterial communities</strong>. The constitutive expression of streptavidin on the surface of Lactococcus lactis F44, which displays streptavidin, determines that its adhesion to EcN is continuous. When we built the adhesion of EcN to the gut, we used inducible expression, so after the induction environment is removed, EcN will <strong style={{ color: '#c67e38' }}>detach from the gut</strong>, and Lactococcus lactis F44 adhering to it will also <strong style={{ color: '#c67e38' }}>detach from the gut</strong>. We utilized the quorum sensing system to construct lcnG in EcN, which can <strong style={{ color: '#c67e38' }}>kill Lactococcus lactis F44</strong> under arabinose-induced conditions, thus further ensuring safety. This strategy provides a reference for other teams designing safety components.
                    </p>
                </Element>
                <Element name="section3" style={styles.section}>
                    <h2 style={styles.heading}>Community Characterization</h2>
                    <p style={styles.paragraph}>
                    To establish a convenient method for microbial community characterization, we selected three fluorescent proteins from the iGEM 2024 Distribution, which not only <strong style={{ color: '#c67e38' }}>verified the great usability of the iGEM Distribution</strong> but also provided a reference for other teams to select iGEM Distribution.
                    </p>
                    <p style={styles.paragraph}>
                    We planned to use CRISPR for genome editing of EcN and Lactococcus lactis F44, but during the process, we found that Lactococcus lactis F44 is difficult to transform with large plasmids via electroporation. When we attempted to genetically manipulate another strain in the Spidey Microbe community, Lactobacillus plantarum ATCC 8014, we also encountered this problem; Lactobacillus plantarum ATCC 8014 could not even take up a plasmid of about 3000bp via electroporation. The thicker cell wall of Gram-positive probiotics severely <strong style={{ color: '#c67e38' }}>limits their engineering</strong>, indicating that it is very<strong style={{ color: '#c67e38' }}> necessary</strong> to develop more efficient genetic manipulation methods to deal with these situations, and we have ruled out faults for other teams and research using Lactobacillus genus microbes.
                    </p>
                    <p style={styles.paragraph}>
                    Subsequently, we attempted to construct fluorescent proteins on plasmids to achieve strain marking. We measured the relationship between OD values and fluorescence values when expressing TannenRFP (BBa_J97003) in EcN using J23111, and when expressing mTagBFP (BBa_K592100) and SYFP2 (BBa_K864100) in Lactococcus lactis F44 using the P32 promoter. We also found that the fluorescence intensity of fluorescent proteins in Lactococcus lactis F44 is low, considering the negative impact of its thicker cell wall. These explorations can provide references for other teams and research.
                    </p>
                </Element>
                <Element name="section4" style={styles.section}>
                    <h2 style={styles.heading}>Modular Probiotics</h2>
                    <p style={styles.paragraph}>
                    In our project, we <strong style={{ color: '#c67e38' }}>expanded the concept of modularization to bacteria</strong>, constructing EcN as a <strong style={{ color: '#c67e38' }}>modular probiotic</strong> that can be used to build other useful probiotic communities. This pattern can be used by other teams.
                    </p>
                    <p style={styles.paragraph}>
                    Our engineered EcN probiotic can secrete streptavidin and mucin-binding protein, biotinylate to display mucin-binding protein on the surface to adhere to the intestinal mucus layer, and other probiotics can aggregate with the engineered EcN probiotic by displaying streptavidin on the surface. This not only serves as <strong style={{ color: '#c67e38' }}>a bridge for other probiotics to adhere to the gut</strong> but also makes <strong style={{ color: '#c67e38' }}>the constructed artificial microbial community more stable</strong>.
                    </p>
                    <p style={styles.paragraph}>
                    At the same time, we also added a butyrate production module to the engineered EcN probiotic, which will further help to alleviate intestinal inflammatory responses. Butyrate can be applied in the treatment process of various diseases, <strong style={{ color: '#c67e38' }}>enhancing the function</strong> of the engineered EcN probiotic, making it not only have the role of adhesion.
                    </p>
                    <p style={styles.paragraph}>
                        We replaced the constitutive expression of lcnG in EcN with arabinose induction and constructed a nisin-inducible lagC (lcnG immune gene) gene expression circuit in the levodopa-producing bacteria.
                        Compared to the initial design, this change provides Spidey Microbe with a greater variety of regulatory strategies.
                    </p>
                    <p style={styles.paragraph}>
                    This provides <strong style={{ color: '#c67e38' }}>new ideas</strong> for other teams to construct artificial microbial communities.
                    </p>
                </Element>
                <Element name="section5" style={styles.section}>
                    <h2 style={styles.heading}>Database and Support</h2>
                    <p style={styles.paragraph}>
                    In the process of our project, in order to better <strong style={{ color: '#c67e38' }}>find strains suitable</strong> for constructing artificial microbial communities, we integrated existing databases to construct our <strong style={{ color: '#c67e38' }}>own probiotic database - ProMetab</strong> (Probiotic Metabolite), which includes probiotic strain information and strain-disease correspondence information, as well as metabolic data of probiotic strains and two types of nutritional deficiency data, providing help for wet experiments. We also developed it into an <strong style={{ color: '#c67e38' }}>interactive and easy-to-use retrieval website</strong> that can realize multiple information queries.
                    </p>
                    <p style={styles.paragraph}>
                    We developed a <strong style={{ color: '#c67e38' }}>batch processing tool for ProMetab graph database</strong> - ProMetab Tool. ProMetab Tool can help users better achieve direct interaction, calculation, and query operations with graph database data. The software has two interaction modes: <strong style={{ color: '#c67e38' }}>Python command line interface and graphical user interface (GUI) operation</strong>.
                    </p>
                    <p style={styles.paragraph}>
                    We also analyzed the <strong style={{ color: '#c67e38' }}>usability</strong> of these web pages and software, hoping to provide more convenient services for other teams and subsequent research.
                    </p>
                    <p style={styles.paragraph}>
                    In our wet experiments, we used the constructed database and website for analysis and verified the results, proving that this database and software play a positive role in the construction of artificial microbial communities, helping scientific researchers to <strong style={{ color: '#c67e38' }}>conveniently</strong> select microbial strains for constructing microbial communities.
                    </p>
                </Element>

            </main>
        </div>
        </main>
        
    )
        ;
}




