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
      height: '820px',
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
        fontSize: '20px', 
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

export function Results(): JSX.Element {
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
                    src="https://static.igem.wiki/teams/5376/result/resultllogo.png"
                    alt="TITLE"
                    style={{ width: 'auto', height: '240px', position: 'absolute', top: '45%', zIndex: 3 }}
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
                    {['SA-RFP fluorescence characterization', 'CSA RFP fluorescence characterization', 'Measurement of T7 RNA polymerase module', 'Biotinylated EcN binds to streptavidin', 'The combination of engineering EcN and Mucin', 'Surface display of Lactococcus lactis F44', 'Aggregation of Lactobacillus F44 and EcN','Butyric acid production component','Levodopa production element','5-hydroxytryptamine production element','Microbial community characterization module'].map((item, index) => (
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
                    <h2 style={styles.heading}>SA-RFP fluorescence characterization</h2>
                    <p style={styles.paragraph}>
                    As shown in Engineering, we have successfully constructed EcN strains and BL21 (DE3) expressing the fusion protein of streptavidin and red fluorescent protein through DBTL cycle. We cultured these two engineering strains together with EcN containing pJUMP27-1A (DE3) plasmid (negative control) in a test tube containing 20ml LB at an initial OD=0.02, and measured their OD and fluorescence values every 2 hours to track and verify the expression of streptavidin in EcN.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re1.png'}
                        caption={'Figure 1 OD and fluorescence values of negative control and SA-RFP expressing EcN and BL21 (DE3) strains at different times'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                    We found that after adding inducers, the OD growth of the negative control group slowed down, suggesting that the expression of T7RNA polymerase may have caused weak growth inhibition in the strain. Meanwhile, we found that both the EcN group and BL21 (DE3) group showed no significant increase in fluorescence values compared to the negative control group.
                    </p>
                    <p style={styles.paragraph}>We consider truncating the full-length streptavidin to form the core streptavidin (cSA).</p>
                </Element>
                <Element name="section2" style={styles.section}>
                    <h2 style={styles.heading}>CSA RFP fluorescence characterization</h2>
                    <p style={styles.paragraph}>
                    We truncated the full-length streptavidin and reconstructed the fusion protein expression module of core streptavidin and red fluorescent protein, obtaining EcN strains and BL21 (DE3) expressing the fusion protein of core streptavidin and red fluorescent protein. We cultured these two engineered strains with EcN containing pJUMP27-1A (DE3) plasmid (negative control) in a test tube containing 20ml LB at an initial OD=0.02, and measured their OD and fluorescence values every 2 hours.
                    </p>
                    <p style={styles.paragraph}>
                    To verify its effectiveness, we attempted to induce two doses of 1mM and 5mM.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re2.png'}
                        caption={'Figure 2 shows the OD values (a, b) and fluorescence values (c, d) of the negative control and EcN and BL21 (DE3) strains expressing cSA RFP at different times'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                    We found that the fusion protein of core streptavidin and red fluorescent protein expressed well in EcN. Core streptavidin has stronger water solubility and is more likely to form a structurally correct fusion protein.
                    </p>
                    <p style={styles.paragraph}>
                    We hope to further analyze the expression of SA-RFP and cSA RFP. We will culture the EcN strains expressing SA-RFP and cSA RFP with EcN containing pJUMP27-1A (DE3) plasmid (negative control) in a test tube containing 20ml LB at an initial OD=0.02, and measure their OD and fluorescence values every 2 hours.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re3.png'}
                        caption={'Figure 3 OD and fluorescence values of negative control and EcN strains expressing cSA RFP and SA RFP at different times'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                    This result further confirms that cSA RFP has a better expression effect in EcN than SA-RFP.
                    </p>
                </Element>
                <Element name="section3" style={styles.section}>
                    <h2 style={styles.heading}>Measurement of T7 RNA polymerase module</h2>
                    <p style={styles.paragraph}>
                    In this project, in order to use the T7 promoter in EcN, we identified pJUMP27-1A (sfGFP) with a replication origin of PSC101 and kanamycin resistance in iGEM 2024 Distribution, and constructed the T7 RNA polymerase from BL21 (DE3) onto this plasmid. This plasmid is compatible with the commonly used pET series in Escherichia coli and is used for expressing various proteins and genes in EcN. Due to the fact that the T7 promoter is often used in conjunction with the lacI lacO system and expressed through IPTG induction, we selected the constructed cSA RFP for characterization.
                    </p>
                    <p style={styles.paragraph}>
                    We will culture EcN strains expressing cSA RFP, BL21 (DE3) strains expressing cSA RFP, and EcN with pJUMP27-1A (DE3) plasmid (negative control) in test tubes containing 20ml LB at an initial OD=0.02, and set up three groups of 0mM IPTG induction, 1mM IPTG induction, and 5mM IPTG induction to verify the expression level and leakage expression of this system. The OD and fluorescence values will be measured every 2 hours after induction.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re4-1.png'}
                        caption={'Figure 4 OD and fluorescence values of negative control and EcN and BL21 (DE3) strains expressing cSA RFP at different times'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                    From the results, it can be seen that the expression leakage of T7 RNA polymerase constructed on plasmids and edited on genomes (BL21 (DE3)) is similar. Due to the presence of multiple copies of plasmids, high expression of T7 RNA polymerase may squeeze the expression of the target gene. Therefore, EcN strains expressing cSA RFP have lower relative fluorescence values than BL21 (DE3), but the expression level is still considerable.
                    </p>
                    <p style={styles.paragraph}>
                    We have validated that this plasmid can be used in Escherichia coli strains lacking T7RNA polymerase, which not only broadens the available vectors for EcN, but also applies to other strains.
                    </p>
                    
                </Element>
                <Element name="section4" style={styles.section}>
                    <h2 style={styles.heading}>Biotinylated EcN binds to streptavidin</h2>
                    <p style={styles.paragraph}>
                    We designed a surface display system based on streptavidin biotin. To verify the effectiveness of this display system, we used a full-length streptavidin/core streptavidin expression module with red fluorescent protein and observed it through laser confocal microscopy.
                    </p>
                    <p style={styles.paragraph}>
                    We took a 24-hour fermentation broth of EcN strain induced to express cSA RFP with 1mM IPTG (cultured in 50ml LB conical flasks), and added 20 μ L of 50mg/ml N-hydroxysuccinimide biotin to EcN according to the method of adding 1 OD. We further incubated it with the fermentation broth for 1 hour, and then took 20 μ L for microscopic observation.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re5.png'}
                        caption={'Figure 5: Laser confocal photos of EcN strains expressing cSA RFP without biotinylation (a, b, c) and after biotinylation (d, e, f)'}
                        customWidth={'80%'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                    As shown in the figure, after biotinylation on the surface of EcN, the red fluorescence in its field of view significantly increased and was more concentrated, indicating that the surface display strategy using streptavidin biotin is effective.
                    </p>
                    <p style={styles.paragraph}>
                    We also further validated the EcN strain expressing SA-RFP.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re6.png'}
                        caption={'Figure 6: Laser confocal photos of the EcN strain expressing SA-RFP without biotinylation (a) and after biotinylation (b)'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                    It was found that there is almost no red fluorescence in the field of view, indicating that SA-RFP cannot emit light correctly, which is consistent with the previous experimental results.
                    </p>
                </Element>
                <Element name="section5" style={styles.section}>
                    <h2 style={styles.heading}>The combination of engineering EcN and Mucin</h2>
                    <p style={styles.paragraph}>
                    To verify whether displaying the MBD93 domain on the cell surface can enhance the binding of probiotics to the intestinal mucus layer protein Mucin, we coated a 96 well plate with pepsin (3mg/ml) and closed the wells with 1% skim milk.
                    </p>
                    <p style={styles.paragraph}>
                    Subsequently, we set up four groups of expression strains, MBD93-SA and MBD93 cSA (containing pJUMP27-1A (J23111-TannenRFP-DE3) plasmid), for biotinylation+induction, biotinylation+non induction, non biotinylation+induction, and non biotinylation/non induction.
                    </p>
                    <p style={styles.paragraph}>
                    After inoculation in a conical flask containing 50ml LB and cultivation for 6 hours, we induced it (IPTG=1mM), followed by further cultivation for 18 hours. Finally, the bacterial solution with equal OD (0.1, 0.3, 0.5, 0.7, 1) was biotinylated and incubated with the fermentation broth.
                    </p>
                    <p style={styles.paragraph}>
                    After incubation, we washed the plates twice with PBS buffer and incubated 200 μL each in a 3mg/ml coated plate and a non coated plate for 3 hours. Then, we washed the plates twice with PBS buffer and resuspended them in 200 μ L PBS buffer to measure their RFP fluorescence values.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re7.png'}
                        caption={'Figure 7 The binding effect of MBD93-SA on Mucin'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    From the results, it can be seen that MBD93-SA's adhesion to Mucin increases after biotinylation and also increases after the addition of inducers. This trend is more pronounced with the increase of OD value, but there is a significant decrease overall in the OD=1 group.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re8.png'}
                        caption={'Figure 8 The binding effect of MBD93 cSA on Mucin'}
                        customWidth={'100%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    Whether the MBD93-cSA group is induced has little effect on its adhesion effect, and whether biotinylation has a certain impact on it, with enhanced adhesion ability after biotinylation.
                    </p>
                    <p style={styles.paragraph}>
                    To further improve the effect, we attempted to replace the N-terminus and C-terminus of the fusion protein. We tested the SA-MBD93 group and cSA-MBD93 group using the same strategy.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re9.png'}
                        caption={'Figure 9 The binding effect of SA-MBD93 on Mucin'}
                        customWidth={'100%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    From the results, it can be seen that SA-MBD93 has an adhesive effect on gastric mucosal membrane protein (3mg/ml) coated plates, but whether it is biotinylated or not does not affect its adhesive effect. On the contrary, whether an inducer is added has a significant impact on its adhesion (the adhesion ability is enhanced after the inducer is added). Based on previous results, we speculate that the SA domain of SA-MBD93 may not be expressed normally and is cleaved by enzymes inside the cell, so whether it is biotinylated has almost no effect on its adhesion. However, the MBD93 domain is expressed normally. Therefore, the adhesion ability of Mucin before and after the addition of inducer is significantly different, and this trend becomes more obvious with the increase of OD value.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re10.png'}
                        caption={'Figure 10 The binding effect of cSA-MBD93 on Mucin'}
                        customWidth={'100%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    The adhesion of cSA-MBD93 group to Mucin increased after biotinylation, and also increased after the addition of inducers. This trend became more pronounced with the increase of OD value, which proves the effectiveness of our strategy.
                    </p>
                </Element>
                <Element name="section6" style={styles.section}>
                    <h2 style={styles.heading}>Surface display of Lactococcus lactis F44</h2>
                    <p style={styles.paragraph}>
                    We hope to verify the effectiveness of the surface display strategy using Usp45 signal peptide and 3LysM domain in Lactococcus lactis F44. Following the engineering construction, we inoculated Lactococcus lactis F44 expressing cSA RFP into a culture medium containing 50ml F44 seeds for 24 hours, and took 1ml of the final fermentation broth. After washing twice with PBS buffer, it was resuspended in 1ml PBS buffer and 20 μ L was observed under a laser confocal microscope.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re11-1.png'}
                        caption={'Figure 11 shows the fluorescence confocal photograph of Streptococcus lactis F44 with cSA RFP surface display'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    As can be seen from the figure, the red fluorescence shows an aggregated state, indicating that our surface display strategy is effective.
                    </p>
                </Element>
                <Element name="section7" style={styles.section}>
                    <h2 style={styles.heading}>Aggregation of Lactobacillus F44 and EcN</h2>
                    <p style={styles.paragraph}>
                    We need to further verify whether Streptococcus pneumoniae F44, which displays streptavidin on its surface, can aggregate with EcN of biotin. We selected Streptococcus pneumoniae F44, which displays cSA and SA on its surface, and EcN expressing cSA MBD93 (without RFP labeling) for cultivation. EcN expressing cSA-MBD93 was induced at OD=0.6 by adding a final concentration of 1mM IPTG.
                    </p>
                    <p style={styles.paragraph}>
                    After EcN biotinylation and washing twice with PBS buffer, resuspended in PBS buffer, mixed with equal OD (1OD) lactobacilli F44 washed twice with PBS buffer and resuspended in PBS buffer for three hours, followed by Gram staining observation.
                    </p>
                    <p style={styles.paragraph}>
                    (1) Lactic acid lactobacilli displaying SA on the surface and non biotinylated EcN
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re12.png'}
                        caption={'Figure 12: Gram staining image of SA lactobacillus and non biotinylated EcN aggregation on the surface'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    (2) Surface display of SA lactobacilli and biotinylated EcN
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re13.png'}
                        caption={'Figure 13: Gram staining image of SA lactobacillus and biotinylated EcN aggregation on the surface'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    (3) Lactic acid lactobacilli displaying cSA on the surface and non biotinylated EcN
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re14.png'}
                        caption={'Figure 14: Gram staining images of cSA lactobacilli and non biotinylated EcN aggregates on the surface'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    (4) Lactic acid lactobacilli displaying cSA on the surface and biotinylated EcN
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re15.png'}
                        caption={'Figure 15: Gram staining image of SA lactobacillus and non biotinylated EcN aggregation on the surface'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    After EcN biotinylation, lactobacilli F44 exhibiting cSA on the surface can also aggregate with EcN.
                    </p>
                </Element>
                <Element name="section8" style={styles.section}>
                    <h2 style={styles.heading}>Butyric acid production component</h2>
                    <p style={styles.paragraph}>
                    Based on our design and construction, we obtained an EcN strain overexpressing acetyl CoA acetyltransferase. We inoculated it into a conical flask containing 50 ml LB and cultured it for 48 hours. We measured its OD every 2 hours until the plateau stage and extracted its final product for high-performance liquid chromatography analysis.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re16.png'}
                        caption={''}>
                    </ImageWithCaption>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re16-2.png'}
                        caption={'Figure 16 OD values and final product gas chromatography-mass spectrometry of negative control and butyric acid producing bacteria at different times'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    We also measured the pH of the final fermentation broth and found that the pH of the fermentation broth of butyric acid producing bacteria was lower than that of the blank group, about 7.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re17-1.png'}
                        caption={'Figure 17 Negative control and pH of fermentation broth of butyric acid producing bacteria'}
                        customWidth={'30%'}>
                    </ImageWithCaption>
                </Element>
                <Element name="section9" style={styles.section}>
                    <h2 style={styles.heading}>Levodopa production element</h2>
                    <p style={styles.paragraph}>
                    We first constructed a levodopa production module in EcN for validation. After adding IPTG, the fermentation broth turned purple red within 48 hours, suggesting that it can generate levodopa, which oxidizes and changes color upon contact with air.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re18.jpg'}
                        caption={'Figure 18 Fermentation broth of Escherichia coli Nissle1917 for the production of levodopa'}
                        customWidth={'40%'}
                        >
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    We constructed this module in Lactococcus lactis F44, and inoculated this strain into a conical flask containing 50ml F44 seed culture medium, fermented for 48 hours, and measured its OD every two hours until the platform stage. We found that the construction of this metabolic pathway has certain growth inhibition on the strain, and under the induction of 50 mg/L nisin, it will have a significant toxic effect on the bacterial cells.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re19.png'}
                        caption={'Figure 19 OD values of negative control and levodopa producing bacteria at different times'}>
                    </ImageWithCaption>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re20.png'}
                        caption={'Figure 20 High performance liquid chromatography results of standard samples and fermentation broth of levodopa producing bacteria'}
                        customWidth={'100%'}>
                    </ImageWithCaption>
                </Element>
                <Element name="section10" style={styles.section}>
                    <h2 style={styles.heading}>5-hydroxytryptamine production element</h2>
                    <p style={styles.paragraph}>
                    According to the design iteration, we constructed a serotonin production element in Lactococcus lactis F44 and inoculated this strain into a conical flask containing 50ml F44 seed culture medium. Fermentation lasted for 48 hours, and its OD was measured every two hours until the plateau period.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re21.png'}
                        caption={'Figure 21 OD values of negative control and 5-hydroxytryptamine producing bacteria at different times'}>
                    </ImageWithCaption>
                </Element>
                <Element name="section11" style={styles.section}>
                    <h2 style={styles.heading}>Microbial community characterization module</h2>
                    <p style={styles.paragraph}>
                    In our project, we used three fluorescent proteins from iGEM 2024 Distribution: TannenRFP (BBa_J97003), mTagBFP (BBa_K592100), and SYFP2 (BBa_K864100) to measure the quorum sensing module of the Spidey Microbe microbiota.
                    </p>
                    <p style={styles.paragraph}>
                    We selected the plasmid pJUMP27-1A (J23111-TannenRFP-DE3) expressing T7 RNA polymerase and assembled the TannenRFP expression box onto this plasmid using the BioBrick assembly method.
                    </p>
                    <p style={styles.paragraph}>
                    We characterized the relationship between its fluorescence and OD values over time.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re22-1.png'}
                        caption={'Figure 22 OD and fluorescence values of Escherichia coli Nissle1917 labeled with TannenRFP at different times'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    We found that the fluorescent protein labeling method can be used to measure Escherichia coli Nissle1917, but during the logarithmic growth phase, the fluorescence value increases slowly, while the OD value increases rapidly.
                    </p>
                    <p style={styles.paragraph}>
                    For Lactobacillus, we chose to construct the fluorescent protein on the plasmid of the adhesion module, namely pLEB124-P45-USP45-3LysM-cSA plasmid. We assembled the BFP and YFP expression boxes on these two plasmids, obtaining pLEB124-P45-USP45-3LysM-cSA-P32-BFP and pLEB124-P45-USP45-3LysM-cSA-P32-YFP plasmids.
                    <br /> We also characterized it.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re23-1.png'}
                        caption={'Figure 23 OD and fluorescence values of Streptococcus pneumoniae F44 labeled with SYFP2 and mTagBFP at different times'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    We found that YFP hardly produces fluorescence except for BFP, considering the influence of the thick cell wall of Lactococcus lactis.
                    </p>
                    <p style={styles.paragraph}>
                    We constructed lcnG gene controlled by paraBAD promoter in EcN, and lcnG immune gene lagC gene controlled by Pnis promoter in Lactococcus lactis F44 producing L-dopa. We characterized this module. We mixed EcN with Lactococcus lactis F44 with equal OD (1OD), and measured its OD value and red fluorescent protein value.
                        </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/result/re24.png'}
                        caption={'Figure 24 OD value and red fluorescent protein value of mixed bacterial system'}
                        customWidth={'90%'}>
                    </ImageWithCaption>
                    <p style={styles.paragraph}>
                    (a) Add Arabic sugar and Nisin (b) Add Arabic sugar, do not add Nisin (c) Do not add Arabic sugar, add and Nisin (d) Add Arabic sugar and Nisin
                    </p>
                    <p style={styles.paragraph}>
                    We found that after mixing EcN with Lactococcus lactis F44, the fluorescence values decreased while the OD values increased, indicating that the growth of Lactococcus lactis F44 was better. Subsequently, the OD and fluorescence values tended to stabilize, indicating that this mixed bacterial system is feasible.
                    </p>
                    <p style={styles.paragraph}>
                    When adding arabinose and Nisin, the fluorescence value decreases more slowly, while without Nisin, the fluorescence value decreases faster. The surface lcnG has a certain toxic effect on Lactococcus lactis F44, and lagC can alleviate this toxic effect, but the effect is not significant and further verification is needed.
                    </p>
                </Element>
            </main>
        </div>
        </main>
        
    )
        ;
}




