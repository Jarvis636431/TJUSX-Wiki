import { Link, Element } from 'react-scroll';
import ImageWithCaption from "../components/ImageWithCaption.tsx";

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
      height: '400px',
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

export function Safety(): JSX.Element {

    return (
        <main style={{ backgroundColor: '#FFF8F0', minHeight: '100vh' }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <img
                    src="https://static.igem.wiki/teams/5376/viruse1.png"
                    alt="Left Image"
                    style={{maxWidth: '200px', height: 'auto'}}
                />

                <img
                    src="https://static.igem.wiki/teams/5376/safety/safetylogo.png"
                    alt="TITLE"
                    style={{width: '473px', height: '150px', objectFit: 'cover'}}
                />


                <img
                    src="https://static.igem.wiki/teams/5376/viruse2.png"
                    alt="Right Image"
                    style={{maxWidth: '200px', height: 'auto'}}
                />
            </div>
            <div style={styles.container}>
            <aside style={styles.sidebar}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {['Overview', 'Adhension Module', 'Therapeutic Modules', 'Quorum Sensing Module', 'Community Characterization Methods', 'Project Design Iteration', 'Reference'].map((item, index) => (
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
                        To provide treatment for Parkinson's disease, we designed the Spidey Microbe consortium,
                        which consists of three main modules:adhesion module, quorum Sensing module, therapeutic
                        module.
                        Throughout the iterations of our project,
                        we continuously refined the Spidey Microbe consortium following the DBTL (Design, Build,
                        Test, Learn) framework recommended by iGEM.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design1.png'}
                        caption={'Figure 1 Flowchart of Wet Lab Experimental Design'}>
                    </ImageWithCaption>
                    <br />
                </Element>
                <Element name="section2" style={styles.section}>
                    <h2 style={styles.heading}>Adhension Module</h2>
                    <p style={styles.paragraph}>
                        The ability to colonize in the gut is crucial for probiotics’ effects. To further enhance
                        this ability and improve the controllability of colonization to reduce the risk of bacterial
                        translocation,
                        we designed a self-assembled system based on the binding of streptavidin and biotin. We used
                        N-hydroxysuccinimide biotin, a reagent that can be conjugated through primary amines (such
                        as the N-terminus and side chains of lysine residues in proteins and peptides),
                        to label the surface of Escherichia coli Nissle 1917 (EcN) cells[1]. We constructed an
                        inducible fusion protein of streptavidin and gut mucin-binding protein in EcN, termed
                        "silk," and used a signal peptide to localize this fusion protein to the extracellular
                        space[2].
                    </p>
                    <p style={styles.paragraph}>
                        Since EcN lacks T7 RNA polymerase, we constructed a T7 RNA polymerase (T7RNP) expression
                        framework using the Cloning Vector pJUMP27-1A(sfGFP) from the iGEM 2024 Distribution, which
                        has compatible biobrick restriction sites.
                        This expression plasmid has a replication origin of PSC101 and confers resistance to
                        kanamycin, making it compatible with most protein expression vectors (such as PET series),
                        thus expanding the available vectors for EcN and enabling transfer to other E. coli strains
                        that do not contain T7 RNA polymerase.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design2.png'}
                        caption={'Figure 2 The gene circuit for adhesion module of Escherichia coli Nissle 1917'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                        Under induced conditions, "spider silk" is secreted into the extracellular space of EcN,
                        self-assembling on the surface of biotinylated EcN through streptavidin.
                        The gut mucin-binding protein at one end of the "spider silk" promotes the colonization of
                        EcN on the gut mucus layer(which is rich in mucin).
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design3.png'}
                        caption={'Figure 3 The principal of intestinal adhesion of Escherichia coli Nissle 1917'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                        This method also facilitates the aggregation of probiotic communities.
                        We constructed a gene circuit for streptavidin surface display based on cell wall
                        peptidoglycan binding in Lactococcus lactis F44 within the Spidey Microbe community.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design4.png'}
                        caption={'Figure 4 The gene circuit for surface display of streptavidin in Lactococcus lactis F44'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                        By using USP45 to localize the protein to the extracellular space and fusing the 3LysM domain to the N-terminus of streptavidin, we achieved surface display of streptavidin in Lactococcus lactis F44[3].
                        Through the interaction between streptavidin and biotin, we can facilitate the aggregation of Lactococcus lactis F44 with biotinylated EcN.
                        This allows Lactococcus lactis F44 to be anchored in the gut via the “bridge” of EcN, promoting the aggregation of the Spidey Microbe community and enhancing its stability.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design5.png'}
                        caption={'Figure 5 The principal of mechanism of Lactococcus lactis F44 and Escherichia coli Nissle 1917 aggregation'}
                        customWidth={'40%'}>
                            
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                        Importantly, this adhesion module exhibits strong modularity and transferability.
                        EcN acts as a bindable "spider silk", allowing any probiotic to be anchored in the gut simply by displaying streptavidin on its surface.
                    </p>
                </Element>
                <Element name="section3" style={styles.section}>
                    <h2 style={styles.heading}>Therapeutic Modules</h2>
                    <p style={styles.paragraph}>
                        The project ultimately constructed three therapeutic components, which include a butyrate production part based on EcN, and parts for the production of serotonin and levodopa  based on Lactococcus lactis F44.
                    </p>
                    <br />
                    <h3 style={styles.partheading}>
                        Butyrate Production Part
                    </h3>
                    <br />
                    <p style={styles.paragraph}>
                        To further expand the capabilities of EcN and establish it as a module for colonization by intestinal probiotics , we enhanced its butyrate production capacity during subsequent iterations.
                        Butyrate, as a short-chain fatty acid, can reduce inflammatory responses by improving intestinal mucosal permeability and downregulating the expression of inflammatory factors.
                        It can also  excite  intestinal neurons, accelerate gut motility, promote hormone secretion, and inhibit the proliferation of pathogenic bacteria. Butyrate plays a significant role in maintaining the homeostasis of the intestinal environment and the dynamic balance of the gut microbiota[4].
                        We enhanced the carbon metabolic flux of acetyl-CoA to butyrate by expressing acetyl-CoA acetyltransferase (ACAT), thereby improving the butyrate synthesis capability of EcN[5].
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design6.png'}
                        caption={'Figure 6 Metabolic Pathway for Butyrate Production'}
                        customWidth={'40%'}>
                    </ImageWithCaption>
                    <br />
                    <h3 style={styles.partheading}>
                        Levodopa Production Part
                    </h3>
                    <br />
                    <p style={styles.paragraph}>
                        The primary medication for treating Parkinson's disease is levodopa (L-DOPA). Levodopa enters the brain and is converted to the neurotransmitter dopamine by aromatic amino acid decarboxylase (AADC) present in the body.
                        Dopamine cannot cross the blood-brain barrier, but levodopa can, and peripheral metabolism of levodopa significantly reduces its therapeutic efficacy[6].
                        To further reduce peripheral metabolism, we constructed a levodopa synthesis module in the probiotic Lactococcus lactis F44, which can produce levodopa upon oral administration, thereby minimizing  its peripheral metabolism.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design7.png'}
                        caption={'Figure 7 Metabolic Pathway for Levodopa Production'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                        To control the production of levodopa, we utilized a nisin-inducible Pnis promoter.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design8.png'}
                        caption={'Figure 8 Gene Circuit for Levodopa Production in Lactococcus lactis F44 '}>
                    </ImageWithCaption>
                    <br />
                    <h3 style={styles.partheading}>
                        Serotonin Production Part
                    </h3>
                    <br />
                    <p style={styles.paragraph}>
                        Serotonin is a neurotransmitter that plays a role in regulating various physiological processes in the central nervous system, such as mood, sleep, appetite, and memory, and can alleviate symptoms of motor impairment and emotional depression associated with Parkinson's disease[7].
                        In the later stages of the project, to further enhance the therapeutic effects of Spidey Microbe, we constructed a serotonin production module in another strain of Lactococcus lactis F44, achieving serotonin production by overexpressing N-acetyltransferase[8].
                        For expression control, we also employed a nisin-inducible Pnis promoter.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design9.png'}
                        caption={'Figure 9 Serotonin Biosynthetic Pathway in Lactococcus lactis F44 '}>
                    </ImageWithCaption>
                    <br />
                </Element>
                <Element name="section4" style={styles.section}>
                    <h2 style={styles.heading}>Quorum Sensing Module</h2>
                    <p style={styles.paragraph}>
                        Quorum sensing is a common mode of microbial cell communication, where nisin, produced by lactic acid bacteria, serves as a typical quorum sensing signal peptide.
                        It is a bacteriocin generated by a group of Gram-positive bacteria belonging to the genera Lactococcus and Streptococcus. As lcnG is a class II two-component bacteriocin which is toxic to Lactococcus lactis  F44.
                        The gene cluster includes five genes: lagA, lagB, lagC, lagD, and lagE. lagA, lagD, and lagE encode the precursor of the alpha peptide, the ABC transporter, and an accessory protein of the pathway, respectively, enabling the strain to synthesize and secrete the alpha subunit of lcnG. lagB encodes the beta subunit of lcnG, while lagC is the immunity gene for lcnG[9].
                    </p>
                    <p style={styles.paragraph}>
                        At the outset of the project, considering biosafety, we designed a dynamically regulated quorum sensing relationship, with EcN constitutively expressing the lcnG production gene cluster  and Lactococcus lactis F44 designed with a lacI-lacO-based lagC expression circuit.
                        Upon removal of the inducing environment, the relationship among the Spidey Microbe consortium would shift from cooperative to competitive.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design10.png'}
                        caption={'Figure 10 Initial Design Principle of the Quorum Sensing Module '}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                        Subsequently, due to the controllable induction expression of the adhesion system and the incorporation of serotonin-producing bacteria, we revised the design of the quorum sensing module, further regulating the expression of therapeutic factors while ensuring biosafety.
                    </p>
                    <p style={styles.paragraph}>
                        We replaced the constitutive expression of lcnG in EcN with arabinose induction and constructed a nisin-inducible lagC (lcnG immune gene) gene expression circuit in the levodopa-producing bacteria.
                        Compared to the initial design, this change provides Spidey Microbe with a greater variety of regulatory strategies.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design11.png'}
                        caption={'Figure 11 Improved Design of the Quorum Sensing Module Gene Circuit'}>
                    </ImageWithCaption>
                    <br />
                    <p style={styles.paragraph}>
                        Spidey Microbe possesses four regulatory strategies, enabling the system to pause, start, switch, and end, enhancing system controllability.
                    </p>
                    <p style={styles.paragraph}>
                        In the absence of  both arabinose and nisin, the system enters a paused state, producing only butyrate to alleviate inflammatory responses.
                        Upon the addition of nisin, the system initiates, producing butyrate, serotonin, and levodopa.
                    </p>
                    <p style={styles.paragraph}>
                        When both arabinose and nisin are present, the system switches to produce only levodopa in response to different stages of Parkinson's disease.
                    </p>
                    <p style={styles.paragraph}>
                        When both arabinose and nisin are present, the system switches to produce only levodopa in response to different stages of Parkinson's disease.
                    </p>
                    <p style={styles.paragraph}>
                        When the nisin environment is removed and arabinose is added, the Spidey Microbe system concludes, with the bacteria producing therapeutic components being killed , ensuring biosafety. Concurrently, by controllable regulation of the adhesion system, without IPTG induction, EcN loses its adherence to the gut, further ensuring safety.
                    </p>
                    <br />
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design12.png'}
                        caption={'Figure 12 Quorum Sensing Regulation Strategies and Their Outputs'}>
                    </ImageWithCaption>
                    <br />
                </Element>
                <Element name="section5" style={styles.section}>
                    <h2 style={styles.heading}>Community Characterization Methods</h2>
                    <p style={styles.paragraph}>
                        To characterize the growth of each bacterium in Spidey Microbe, we used three fluorescent proteins from the iGEM 2024 Distribution: TannenRFP, mTagBFP, and SYFP2.
                    </p>

                    {/*//放置表格*/}

                    <img alt="" src="https://static.igem.wiki/teams/5376/design/design13.png"
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '40%',
                            borderRadius: '10px',
                        }} />
                    <p style={styles.paragraph}>
                        We constructed the TannenRFP expression element on the T7 RNA polymerase expression vector of EcN, the mTagBFP on the adhesion module vector of the levodopa-producing bacteria, and the SYFP2 on the adhesion module vector of the serotonin-producing bacteria.
                    </p>
                    <ImageWithCaption
                        src={'https://static.igem.wiki/teams/5376/design/design13.png'}
                        caption={'Figure 13 Gene circuit of community fluorescence protein characterization'}>
                    </ImageWithCaption>
                </Element>
                <Element name="section6" style={styles.section}>
                    <h2 style={styles.heading}>Project Design Iteration</h2>
                    <h3 style={styles.partheading}>
                        Part 1: Preliminary Design of Spidey Microbe
                    </h3>
                    <img alt='' src='https://static.igem.wiki/teams/5376/design/design14.png'
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '85%',
                            borderRadius: '10px',
                        }} />
                    <p style={{...styles.paragraph,fontSize: '20px'}}>
                        In the early stages of project research and design, we constructed the gut microbiome metabolite database - ProMetab and analyzed it, selecting EcN and Lactococcus lactis F44 from the candidate probiotics.//(Jump link to the dry experiment page)
                    </p>
                    <p style={{...styles.paragraph,fontSize: '20px'}}>
                        EcN only has the adhesion module and the preliminary quorum sensing module for expressing lcnG, while Lactococcus lactis F44 produces levodopa and can produce the lcnG immunity gene lagC under IPTG induction.
                    </p>
                    <h3 style={styles.partheading}>
                        Part 2: Improvement of Spidey Microbe
                    </h3>
                    <img alt='' src='https://static.igem.wiki/teams/5376/design/design15.png'
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '85%',
                            borderRadius: '10px',
                        }} />
                    <p style={{...styles.paragraph,fontSize: '20px'}}>
                        We attended CCiC and communicated with Professor Liu Xingyin from Nanjing Medical University //(Jump link to the HP page), realizing that having only levodopa in the system cannot further cope with the different stages of Parkinson's disease, and the effect may be poor.
                        Based on the previous design, we added a strain of Lactococcus lactis F44 that produces serotonin, and 5-HTP can inhibit the motor disorders caused by levodopa in Parkinson's patients.
                    </p>
                    <p style={{...styles.paragraph,fontSize: '20px'}}>
                        We also interviewed Director Chen Lei, the person in charge of the Chinese Parkinson's Disease One-Stop Service Center and the Chinese Parkinson's Disease Diagnosis and Treatment Training Base at Tianjin Huanhu Hospital, and realized that for Parkinson's patients, symptoms of gut inflammatory reactions are also a thorny issue //(Jump to the HP page).
                        We tried to construct a butyric acid expression module in EcN, which makes EcN more modular and can be used for the treatment of various diseases with gut inflammatory reactions.
                    </p>
                    <h3 style={styles.partheading}>
                        Part 3: Restructuring of the Quorum Sensing in Spidey Microbe
                    </h3>
                    <img alt='' src='https://static.igem.wiki/teams/5376/design/design16.png'
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '85%',
                            borderRadius: '10px',
                        }} />
                    <p style={{...styles.paragraph,fontSize: '20px'}}>
                        To enhance the control of the system, we changed the design of the quorum sensing module, constructed an arabinose-induced lcnG expression circuit in EcN,
                        and replaced the IPTG-controlled immunity gene lagC expression circuit in Lactococcus lactis F44 with Nisin control, and removed the immunity gene expression circuit in the serotonin-producing bacteria,
                        thus achieving control over serotonin production.
                    </p>
                    <h3 style={styles.partheading}>
                        Part 4: Expansion of Spidey Microbe
                    </h3>
                    <img alt='' src='https://static.igem.wiki/teams/5376/design/design17.png'
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '85%',
                            borderRadius: '10px',
                        }} />
                    <p style={{...styles.paragraph,fontSize: '20px'}}>
                        The dry experiment used the data from ProMetab to analyze the amino acid feeding situation of Lactobacillus plantarum, and adding Lactobacillus plantarum can strengthen the amino acid feeding relationship of the community, thereby enhancing the stability of the community //(Jump link to the dry experiment page).
                        We tried to add Lactobacillus plantarum to the system, but due to its difficulty in genetic manipulation, we ultimately used natural Lactobacillus plantarum.
                    </p>
                </Element>
                <Element name="section7" style={styles.section}>
                    <h2 style={styles.heading}>Reference</h2>
                    <p style={{...styles.paragraph,fontSize: '15px'}}>[1]	Vargason, A. M., Santhosh, S. & Anselmo, A. C., Surface Modifications for Improved Delivery and Function of Therapeutic Bacteria. SMALL 16 e2001705 (2020).</p>
                    <p style={{...styles.paragraph,fontSize: '15px'}}>[2]	Zandsalimi, F., Hajihassan, Z. & Hamidi, R., Denovo designing : a novel signal peptide for tat translocation pathway to transport activin A to the periplasmic space of E . coli. BIOTECHNOL LETT 42 45 (2020).</p>
                    <p style={{...styles.paragraph,fontSize: '15px'}}>[3]	Lim SH,Jahanshiri F,Rahim RA,et al.Surfacedisplay of respiratory syncytial virus glycoproteins inLactococcus lactis NZ9000.Lett Appl Microbiol,2010,51:658-664.</p>
                    <p style={{...styles.paragraph,fontSize: '15px'}}>[4]	Deleu S, Machiels K, Raes J, et al. Short chain fatty acids and its producing organisms: an overlooked therapy for IBD?[J]. EBioMedicine, 2021,66:103293. </p>
                    <p style={{...styles.paragraph,fontSize: '15px'}}>[5]	JHA A K,LI J,YUAN Y,et al.A review on biobutyric acid production and its optimization[J].International Journal of Agriculture & Biology,2014,6(5):1019-1024.</p>
                    <p style={{...styles.paragraph,fontSize: '15px'}}>[6]	Rekdal, V. M., Bess, E. N., Bisanz, J. E., Turnbaugh, P. J. & Balskus, E. P., Discovery and inhibition of an interspecies gut bacterial pathway for Levodopa metabolism. SCIENCE 364 1055 (2019).</p>
                    <p style={{...styles.paragraph,fontSize: '15px'}}>[7]	Dong, X. L. et al., Polymannuronic acid prevents dopaminergic neuronal loss via brain-gut-microbiota  axis in Parkinson's disease model. INT J BIOL MACROMOL 164 994 (2020).</p>
                    <p style={{...styles.paragraph,fontSize: '15px'}}>[8]	TAN D X,HARDELAND R.The Reserve/Maximum Capacity of Melatonin's Synthetic Function for the Potential Dimorphism of Melatonin Production and Its Biological Significance in Mammals[J].Molecules,2021,26(23):7302.</p>
                    <p style={{...styles.paragraph,fontSize: '15px'}}>[9]	Liu, F. et al., Interaction variability shapes succession of synthetic microbial ecosystems. NAT COMMUN 11 309 (2020).</p>
                </Element>
            </main>
        </div>
        </main>
        
    )
        ;
}




