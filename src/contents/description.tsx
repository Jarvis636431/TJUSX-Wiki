import { Link, Element } from 'react-scroll';
import ImageWithCaption from "../components/ImageWithCaption.tsx";
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
        height: '165px',
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

export function Description(): JSX.Element {
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
                    src="https://static.igem.wiki/teams/5376/description/descriptionlogo.png"
                    alt="TITLE"
                    style={{ width: 'auto', height: '220px', position: 'absolute', top: '45%', zIndex: 3 }}
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
                        {['Background', 'Our solution', 'Reference'].map((item, index) => (
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
                        <h2 style={styles.heading}>Background</h2>
                        <br />
                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>Parkinson's Disease</h2>
                        <p style={styles.paragraph}>
                            Parkinson's disease (PD) is a serious <strong style={{ color: '#c67e38' }}>neurological</strong> condition that progresses gradually.
                            The main pathological change is the degeneration and death of dopaminergic neurons in
                            the substantia nigra of the midbrain, which results in decreased dopamine levels in
                            the striatum <sup>[1]</sup>. The primary symptoms include resting tremors, rigidity, and bradykinesia,
                            culminating in unstable gait and posture.<strong style={{ color: '#c67e38' }}> There are no effective cure methods to date</strong><sup>[2]</sup>.
                            Currently, therapies focus on restoring dopaminergic activity in the brain and slowing
                            disease progression with <strong style={{ color: '#c67e38' }}>levodopa combined with carbidopa and/or other medications</strong>,
                            such as dopamine agonists, MAO-B inhibitors, and amantadine <sup>[3]</sup>.
                        </p>
                        <p style={styles.paragraph}>
                            The World Health Organization (WHO) reports that the prevalence of PD has doubled over
                            the past 25 years. As of 2024, approximately <strong style={{ color: '#c67e38' }}>10 million individuals</strong> globally
                            are <strong style={{ color: '#c67e38' }}>living with PD</strong>, including 3 million in China. Projections for 2030 estimate
                            5 million PD patients in China, with a global increase to <strong style={{ color: '#c67e38' }}>120 to 170 million</strong>
                            by 2040. The aging global population will likely lead to a continuous rise
                            in PD incidence, increasing the demand for healthcare resources and
                            exacerbating the burden on the global healthcare system.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description1.jpg'}
                            caption={'Figure 1: Temporal trend of the age-adjusted prevalence of Parkinson\'s disease'}>
                        </ImageWithCaption>
                    
                        <br />

                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>Microbiota-Gut-Brain Axis</h2>
                        <p style={styles.paragraph}>
                            The brain and the gut engage in a bidirectional communication relationship. The brain regulates intestinal
                            function via the <strong style={{ color: '#c67e38' }}>hypothalamic-pituitary-adrenal (HPA) axis</strong> and the <strong style={{ color: '#c67e38' }}>autonomic nervous system</strong>, while the
                            gut influences the central nervous system through a range of microbial-derived <strong style={{ color: '#c67e38' }}>metabolites</strong>,  <strong style={{ color: '#c67e38' }}>neuroactive
                                substances</strong>, and <strong style={{ color: '#c67e38' }}>intestinal hormones</strong> <sup>[4]</sup>.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description2.jpg'}
                            caption={'Figure 2 Microbiota-Gut-Brain Axis'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            In the pathogenesis of Parkinson's disease, the <strong style={{ color: '#c67e38' }}>gut-brain axis</strong> plays
                            a critically important role. Pathological processes of gut microbiota
                            likely disseminate from the gut to the brain via this axis, contributing
                            to the onset and progression of Parkinson's disease <sup>[5]</sup>. The mechanisms
                            of the gut-brain axis in Parkinson's pathology can be broadly categorized
                            into three aspects:
                        </p>
                        <p style={styles.paragraph}>
                            (1) <strong style={{ color: '#c67e38' }}>Inflammatory Process</strong>: In the gastrointestinal intestinal
                            tract affected by Parkinson's, pathogenic bacteria secrete pro-inflammatory
                            chemokines and cytokines, initiating and amplifying immune responses, which
                            are linked to gastrointestinal intestinal symptoms in over 80% of Parkinson's
                            patients, such as constipation and intestinal inflammation <sup>[6]</sup>. Additionally
                            , short-chain fatty acids (SCFAs) like butyrate, produced by beneficial gut
                            microbes, modulate the expression of tight junction proteins in the
                            intestinal epithelial barrier and balance downstream inflammatory
                            responses <sup>[7]</sup>.
                        </p>
                        <p style={styles.paragraph}>
                            (2) <strong style={{ color: '#c67e38' }}>Neuroendocrine Pathway</strong>: Pathogenic gut
                            bacteria, particularly Gram-negative species, produce endotoxins that
                            , at high levels, activate afferent vagal neurons, leading to diminished
                            swallowing function (reduced food intake and eating behavior) and weight
                            loss—common non-motor symptoms of PD <sup>[8]</sup>. Neurotransmitters such as
                            serotonin and γ-aminobutyric acid (GABA) are released by enteric
                            neurons and other cells within the gut, modulating the gut microbiota.
                            Neurotransmitters (serotonin and gamma-aminobutyric acid, GABA) are
                            released from neurons, immune cells, and intestinal mucosal cells
                            into the intestinal lumen, regulating the balance of the gut
                            microbiota. An imbalance in the gut microbiota can compromise
                            the intestinal barrier, leading to systemic inflammation
                            that may further impair the blood-brain barrier and promote
                            neuroinflammation <sup>[6]</sup>.
                        </p>
                        <p style={styles.paragraph}>
                            (3) <strong style={{ color: '#c67e38' }}>Vagus Nerve Pathway</strong>: Amyloid proteins in the gut, such as
                            α-synuclein, can reach the central nervous system, where
                            misfolded α-synuclein aggregates contribute to the
                            degeneration of dopaminergic neurons. Dopamine supplementation
                            is an effective therapeutic approach for this pathway <sup>[6]</sup>.
                        </p>
                        <br />
                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>Utilizing Gut Microbiota for Parkinson's Treatment</h2>
                        <p style={styles.paragraph}>
                            Research has shown that natural probiotics can treat Parkinson's
                            disease, suggesting that targeting the gut-brain axis is a
                            viable treatment strategy [9]. However, the complex community
                            dynamics of natural probiotics and their limited therapeutic
                            potential necessitate consideration of their survival and
                            competitive ability in the human gut. Synthetic biology
                            can enhance probiotics with stronger colonization and
                            therapeutic capabilities, regulated through genetic
                            engineering. Based on these insights, we propose
                            a novel treatment approach termed <strong style={{ color: '#c67e38' }}>"Spidey Microbe"</strong>.
                        </p>
                    </Element>
                    <Element name="section2" style={styles.section}>
                        <br />
                        <h2 style={styles.heading}>Our solution</h2>
                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>"ProMetab" Database and Software</h2>
                        <p style={styles.paragraph}>
                            In the early stages of the project, we needed to screen
                            probiotic strains suitable for constructing Spidey Microbe.
                            Given the complex metabolic and community relationships
                            among probiotics, we attempted to construct a probiotic
                            metabolic database. By analyzing community relationships
                            through metabolic complementarity, we selected suitable
                            probiotic strains for wet experiment.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description3.gif'}
                            caption={'Figure 3 Example of Probiotic Metabolite Database'}>
                        </ImageWithCaption>

                        <p style={styles.paragraph}>
                            Referring to the structure and style of existing probiotic
                            databases, we designed and built our own probiotic
                            database—ProMetab (Probiotic Metabolite). ProMetab not only
                            includes information on probiotic strains and strain-disease
                            correspondence but also contains metabolic data of probiotic
                            strains and two types of nutritional deficiency data,
                            aiding wet lab experiments.
                        </p>
                        <p style={styles.paragraph}>
                            We designed an interactive and user-friendly search website
                            for ProMetab, capable of supporting queries on six different
                            entities: strains, metabolites, diseases, and EC number.<a href="https://gitlab.igem.org/2024/software-tools/tjusx">(Click to jump to ProMetab)</a>
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description4.png'}
                            caption={'Figure 4 Schematic Diagram of ProMetab Database'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            Additionally, to further expand its usability, we developed ProMetab Tool, an operational tool for batch processing of species interaction data in the ProMetab graph database. ProMetab Tool assists users in achieving direct interaction, computation, and query operations with graph database data. The software offers two modes of interaction: Python command-line interface and Graphical User Interface (GUI) operations.
                        </p>
                        <br />

                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '30px' }}>Spidey Microbe Community</h2>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description5.png'}
                            caption={'Figure 5 Spidey Microbe'}>
                        </ImageWithCaption>
                        <br />
                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>Mucin-binding Protein</h2>
                        <p style={styles.paragraph}>
                            To enhance the probiotic's intestinal capabilities,
                            we envisioned displaying factors on their surface
                            that can bind to the intestinal surface. Our research
                            revealed that the human gastrointestinal tract is
                            lined with a mucus layer, which is the primary site
                            for probiotic colonization. This mucus layer is rich
                            in mucin (an acid-resistant glycoprotein composed
                            of mucopolysaccharides) <sup>[10]</sup>. Researchers
                            identified a domain of mucin-binding protein
                            (MBD93) in E. coli, and purified MBD93 was
                            proven to bind to mucin and exhibit strong affinity
                            for mucin oligosaccharides expressed at the
                            mucin termini (N-acetylgalactosamine,
                            N-acetylglucosamine, galactose) <sup>[11]</sup>.
                            We selected this substance as a factor for
                            probiotics to adhere to the intestine and
                            attempted to display it on the surface of the
                            EcN using a novel method.
                        </p>
                        <br />
                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>Streptavidin and Biotin</h2>
                        <p style={styles.paragraph}>
                        Biotin is commonly used in bioconjugation reactions due
                         to its strong specific interaction with streptavidin,
                          and it is also recognized as a safe substance. We used
                           N-hydroxysuccinimide biotin, which can react with primary
                            amines on the surface of probiotics to label the surface
                             of EcN <sup>[12]</sup>.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description6-1.png'}
                            caption={'Figure 6 Biotinylation of Cell Surface and Adhesion Principle'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We constructed a fusion protein of mucin-binding protein and streptavidin
                        , hoping that this fusion protein can be excreted by EcN. After the surface
                         of EcN is labeled with N-hydroxysuccinimide biotin, MBD93 with streptavidin
                          can be successfully displayed on the engineered EcN surface, enhancing
                           its ability to colonize the intestine. To regulate this process, the
                            fusion protein ("spider silk") was designed for inducible expression.
                        </p>
                        <br />
                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>NDSP Signal Peptide</h2>
                        <p style={styles.paragraph}>
                        To enhance the secretion of the mucin-binding protein and streptavidin fusion protein in EcN, we investigated the secretion pathways of E. coli and sought a more efficient method.
                        </p>
                        <p style={styles.paragraph}>
                        There are three secretion pathways in E. coli: the general secretion pathway
                         (Sec pathway), the signal recognition particle pathway (Srp pathway),
                          and the twin-arginine translocation pathway (Tat pathway) <sup>[13]</sup>. Both
                           the Sec pathway and Srp pathway transport proteins to the periplasm
                            before they are fully post-translationally modified, while the Tat
                             pathway mediates transport after proteins have achieved partial 
                             folding, which is more conducive to the secretion of proteins forming 
                             the correct structure.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description7.jpg'}
                            caption={'Figure 7 Three Protein Secretion Pathways in Escherichia coli '}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        Researchers used the ClustalW program and HADDOCK and other computational simulation methods to optimize the Tat transport signal peptide of E. coli, designing the NDSP signal peptide, which achieved a transport efficiency of up to approximately 70% for recombinant activin A [14]. We selected this signal peptide to mediate the transport of the mucin-binding protein and streptavidin fusion protein.
                        </p>
                        <br />
                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>Surface display</h2>
                        <p style={styles.paragraph}>
                        The use of streptavidin and biotin to display mucin binding proteins on the surface
                         of EcN has modular characteristics. At the same time, we attempted to <strong style={{ color: '#c67e38' }}>display
                          streptavidin on the surface</strong> of Lactococcus lactis F44 in Spidey Microbe, so
                           that Lactococcus lactis F44 can bind to the biotinylated EcN and <strong style={{ color: '#c67e38' }}>colonize the
                            intestine with EcN</strong>.
                        </p>
                        <p style={styles.paragraph}>
                        The surface display strategy of lactic acid bacteria
                         mainly uses signal peptides to transport to the
                          periplasmic space, and locates proteins in the
                           cell wall peptidoglycan layer through the peptidoglycan
                            binding domain of peptidoglycan hydrolase <sup>[15]</sup>.
                        </p>
                        <p style={styles.paragraph}>
                        The commonly used transport signal peptide in
                         lactobacilli is <strong style={{ color: '#c67e38' }}>Usp45</strong>, and the peptidoglycan-binding
                          domain often utilizes three repeats of <strong style={{ color: '#c67e38' }}>the Lys M
                           motif</strong> from lactobacillus peptidoglycan hydrolase
                            Acm A, known as 3Lys M. Each 3Lys M motif consists
                             of 45 highly conserved amino acids, with repeat
                              sequences separated by Ser, Thr, and Asp residues
                              , forming flexible hinges that enable bidirectional
                               anchoring <sup>[16]</sup>
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description8.png'}
                            caption={'Figure 8 Schematic diagram of surface display of Lactobacillus F44'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We constructed the Usp45 signal peptide and 3Lys M motif
                         at the N-terminus of streptavidin, which can mediate
                          the display of streptavidin on the surface of
                           Lactococcus lactis F44, thereby allowing
                            it to aggregate with EcN. This process
                             not only allows Lactococcus lactis F44
                              to bind to the intestine through engineered EcN,
                               but also enhances the stability between the Spidey
                                Microbe microbiota. For detailed design, please
                                 visit the
                        </p>
                        <br />

                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>Therapeutic factors</h2>
                        <p style={styles.paragraph}>
                        In terms of treatment, as Parkinson's disease involves
                         many symptoms, we expect to adopt a combination therapy
                          of multiple drugs similar to “cocktail therapy”.
                           Finally, we selected three therapeutic drugs: <strong style={{ color: '#c67e38' }}>butyric
                            acid</strong> (EcN), <strong style={{ color: '#c67e38' }}>levodopa</strong> (F44), and <strong style={{ color: '#c67e38' }}>serotonin</strong> (F44).
                        </p>
                        <p style={styles.paragraph}>
                        The main drug used to treat Parkinson's disease is levodopa, which is used
                         to control motor symptoms caused by the loss of dopaminergic neurons
                          in the substantia nigra. After passing through the blood-brain barrier
                          , levodopa is decarboxylated by aromatic amino acid decarboxylase to
                           produce the active therapeutic drug dopamine. However, the peripheral
                            decarboxylation of levodopa to dopamine cannot pass through the blood-brain barrier
                             <sup>[17]</sup>. We use Lactococcus lactis F44 to produce levodopa and reduce its peripheral
                              decarboxylation through oral administration of probiotics.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description9.png'}
                            caption={'Figure 9 Treatment principle of levodopa'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        The biosynthetic pathway of levodopa is mainly based on the production of
                         L-tyrosine by cells, which can be hydroxylated to <strong style={{ color: '#c67e38' }}>L-tyrosine</strong> by
                          3-hydroxyphenylacetate 3-hydroxylase or tyrosinase <sup>[18]</sup>. The gene
                           cluster composed of two genes,<strong style={{ color: '#c67e38' }}> hpaB and hpaC</strong>, can jointly express
                            4-hydroxyphenylacetate-3-hydroxylase. We heterologously expressed
                             this gene cluster in Lactococcus lactis F44 and used the Nisin
                              induced Pnis promoter to regulate gene expression.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description10.png'}
                            caption={'Figure 10  Treatment Module and Gene Circuit of Lactococcus lactis F44'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        Serotonin can inhibit motor disorders in Parkinson's patients
                         caused by levodopa. In order to further cooperate with levodopa
                          treatment for motor symptoms in patients, we constructed a
                           serotonin production element in another strain of Lactobacillus
                            F44, which enhances serotonin production by overexpressing
                             <strong style={{ color: '#c67e38' }}>N-acetyltransferase</strong>. This process is also regulated by the
                              nisin induced Pnis promoter to regulate gene expression.
                        </p>
                        <p style={styles.paragraph}>
                        Parkinson's patients often experience gastrointestinal
                         inflammation. To further alleviate this symptom, we
                          have considered butyric acid, a short chain fatty 
                          acid, which has a good effect on reducing inflammation
                           and inhibiting the proliferation of pathogens.
                            We overexpressed <strong style={{ color: '#c67e38' }}>acetyl CoA acetyltransferase</strong>,
                             enhancing the carbon metabolism flow of acetyl CoA 
                             to butyric acid and improving the butyric acid
                              production capacity of EcN. This also enhances
                               the probiotic and therapeutic effects of engineering
                                probiotic EcN as a bridge for probiotic group
                                 adhesion, making EcN a module for constructing
                                  and maintaining gut health probiotic groups.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description11.png'}
                            caption={'Figure 11 EcN treatment module and gene circuit'}>
                        </ImageWithCaption>
                        <br />
                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>Quorum sensing</h2>
                        <p style={styles.paragraph}>
                        Quorum sensing(QS)is a way for microbial communities to communicate and exchange information. Different microorganisms can communicate and transmit information through quorum sensing signal molecules. QS is also a way to regulate the growth density of different bacteria in the microbial community. For lactic acid bacteria, bacteriocins are a key part of their quorum sensing.
                        </p>
                        <p style={styles.paragraph}>
                        <strong style={{ color: '#c67e38' }}>LcnG</strong> is a second-class dual subunit lactobacilli
                         bacteriocin that can inhibit the growth of
                          Lactococcus lactis F44. If Lactococcus
                           lactis F44 contains <strong style={{ color: '#c67e38' }}>lagC</strong>, this inhibition
                            can be relieved <sup>[19]</sup>.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/description/description12-1.png'}
                            caption={'Figure 12 Schematic diagram of the interaction between lcnG and lagC'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        In order to regulate the microbiota, we designed and constructed QS elements, constructed arabinose induced lcnG gene expression pathways in EcN, and constructed nisin induced lagC gene expression pathways in lactobacilli producing levodopa.
                        </p>
                        <p style={styles.paragraph}>
                        Our QS element is based on arabinose and nisin, which
                         can achieve four control strategies for the Spidey Mirobe
                          system: <strong style={{ color: '#c67e38' }}>pause, start, switch, and end</strong>. For detailed design
                          , please visit the background page (redirect to the design page).
                        </p>
                        <br />
                        <h2 style={{ ...styles.heading, textAlign: 'center' as const, fontSize: '28px' }}>Measuring method</h2>
                        <p style={styles.paragraph}>
                        One of the major challenges in building a microbial
                         community is how to quantify and measure different
                          bacteria in the community. In our project, we used
                           three fluorescent proteins from iGEM 2024 Distribution
                           : <strong style={{ color: '#c67e38' }}>TannenRFP</strong> <a href='https://parts.igem.org/Part:BBa_J97003'>(BBa_J97003)</a>, <strong style={{ color: '#c67e38' }}>mTagBFP</strong> <a href='https://parts.igem.org/Part:BBa_K592100'>(BBa_K592100)</a>, and
                            <strong style={{ color: '#c67e38' }}>SYFP2</strong> <a href='https://parts.igem.org/Part:BBa_K864100'>(BBa_K864100)</a> to measure the Spidey Microbe
                             microbial community. For detailed design,you can
                              browse the design page (redirect to design page).
                            </p>

                    </Element>
                    <Element name="section3" style={styles.section}>
                        <h2 style={styles.heading}>Reference</h2>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[1]	Fernandez, H. H., 2015 Update on Parkinson disease. CLEV CLIN J MED 82 563 (2015).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[2]	Braak, H. et al., Staging of brain pathology related to sporadic Parkinson ' s disease. NEUROBIOL AGING 24 197 (2003).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[3]	Willis, A. W. et al., Incidence of Parkinson disease in North America. NPJ PARKINSONS DISEASE 8 (2022).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[4]	Liu, L., Huh, J. R. & Shah, K., Microbiota and the gut-brain-axis : Implications for new therapeutic design in the CNS. EBIOMEDICINE 77 (2022). </p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[5]	Mulak, A. & Bonaz, B., Brain-gut-microbiota axis in Parkinson's disease. World J Gastroenterol 21 10609 (2015).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[6]	Dong, X. et al., Polymannuronic acid prevents dopaminergic neuronal loss via brain-gut-microbiota axis in Parkinson's disease model. INT J BIOL MACROMOL 164 994 (2020).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[7]	Lenoir, M. et al., Butyrate mediates anti-inflammatory effects of Faecalibacterium prausnitzii in  intestinal epithelial cells through Dact3. Gut Microbes 12 1 (2020).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[8]	Gakis, G. et al., Neuronal activation in the nucleus of the solitary tract following jejunal  lipopolysaccharide in the rat. Auton Neurosci 148 63 (2009).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[9]	Barichella, M. et al., Unraveling gut microbiota in Parkinson's disease and atypical parkinsonism. Mov Disord 34 396 (2019).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[10]	Tailford, L. E., Crost, E. H., Kavanaugh, D. & Juge, N., Mucin glycan foraging in the human gut microbiome. FRONT GENET 6 81 (2015).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[11]	Chatterjee, M. et al., Understanding the adhesion mechanism of a mucin binding domain from Lactobacillus  fermentum and its role in enteropathogen exclusion. INT J BIOL MACROMOL 110 598 (2018).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[12]	Vargason, A. M., Santhosh, S. & Anselmo, A. C., Surface Modifications for Improved Delivery and Function of Therapeutic Bacteria. SMALL 16 e2001705 (2020).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[13]	Kleiner-Grote, G., Risse, J. M. & Friehs, K., Secretion of recombinant proteins from E. coli. ENG LIFE SCI 18 532 (2018). </p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[14]	Zandsalimi, F., Hajihassan, Z. & Hamidi, R., Denovo designing : a novel signal peptide for tat translocation pathway to transport activin A to the periplasmic space of E . coli. BIOTECHNOL LETT 42 45 (2020).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[15]	Borrero, J. et al., Use of the usp45 lactococcal secretion signal sequence to drive the secretion and  functional expression of enterococcal bacteriocins in Lactococcus lactis. Appl Microbiol Biotechnol 89 131 (2011).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[16]	Steen, A. et al., AcmA of Lactococcus lactis is an N - acetylglucosaminidase with an optimal number of LysM domains for proper functioning. FEBS J 272 2854 (2005).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[17]	Maini, R. V., Bess, E. N., Bisanz, J. E., Turnbaugh, P. J. & Balskus, E. P., Discovery and inhibition of an interspecies gut bacterial pathway for Levodopa  metabolism. SCIENCE 364 (2019).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[18]	Fordjour, E., Adipah, F. K., Zhou, S., Du G & Zhou, J., Metabolic engineering of Escherichia coli BL21 (DE3) for de novo production of  L-DOPA from D-glucose. MICROB CELL FACT 18 74 (2019).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[19]	Mirkovic, N. et al., Lactococcus lactis LMG2081 Produces Two Bacteriocins , a Nonlantibiotic and a Novel Lantibiotic. APPL ENVIRON MICROB 82 2555 (2016).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[20]	Zhu, J. et al., Temporal trends in the prevalence of Parkinson's disease from 1980 to 2023 : a systematic review and meta-analysis. LANCET HEALTHY LONGEVITY 5 (2024).
</p>
                    </Element>
                </main>
            </div>
        </main>

    )
        ;
}




