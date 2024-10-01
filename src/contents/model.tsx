import { Link, Element } from 'react-scroll';
import ImageWithCaption from "../components/ImageWithCaption.tsx";
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
        height: '420px',
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

export function Model(): JSX.Element {

    return (
        <main style={{ backgroundColor: '#FFF8F0', minHeight: '100vh' }}>
            <div style={{ "backgroundImage": "url('https://static.igem.wiki/teams/5376/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', padding: '20px', position: 'relative' }}>
                <img
                    src="https://static.igem.wiki/teams/5376/logo1-2.png"
                    alt="Left Image"
                    style={{ maxWidth: '750px', height: 'auto', zIndex: 0 }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/model/modellogo.png"
                    alt="TITLE"
                    style={{ maxWidth: '750px', height: 'auto', position: 'absolute', top: '45%', zIndex: 1 }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse3.png"
                    alt="Left Image"
                    style={{ position:'absolute',maxWidth: '220px',left:'100px',top:'120px', height: 'auto' }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse4.png"
                    alt="Left Image"
                    style={{  position:'absolute',maxWidth: '220px',right:'80px',top:'200px', height: 'auto' }}
                />
            </div>
            <div style={styles.container}>
                <aside style={styles.sidebar}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {['Overview', 'Simulation of Biofilm Growth in Gut', 'Optimizer Program Based on SVM Model', 'Reference'].map((item, index) => (
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
                            In our model section, we have done two parts of work.<br />
                            Firstly, we want to know the actual growth of the constructed Spidey Microbe in the intestine. Based on the metabolic relationships of three strains, We used an IBM model to simulate the growth of biofilm in the intestine.
                        </p>

                        <p style={styles.paragraph}>
                            Meanwhile, after communicating with teammates in wet lab, we knew they hoped to optimize the expression of genes in Lactococcus lactis F44. Therefore, we have developed a gene expression optimization program using SVM model. This algorithm is based on transcriptome analysis of codons, and achieves the output of optimized sequences with the input CDS sequence to be optimized. Students in wet lab utilized the model to optimize the sequence of L.lactis F44 and provided nice feedback. The tool and methods can also provide assistance to other teams.
                        </p>
                    </Element>
                    <Element name="section2" style={styles.section}>
                        <h2 style={styles.heading}>Simulation of Biofilm Growth in Gut</h2>
                        <br />
                        <h3 style={styles.partheading}>McComedy and IBM</h3>
                        <br />
                        <p style={styles.paragraph}>
                            Individual-based modeling(IBM) is a widely applied discipline that allows ecologists to
                            explore, using computer simulations, how properties of populations and ecosystems might evolve
                            from the characteristics and behaviors of individual organisms. In such models, the population
                            or community dynamics emerge from the behavior and interplay of individual entities, which
                            are simulated according to a predefined set of rules. These models perform particularly
                            well in recapitulating actual ecological dynamics. However, implementation of IBM is
                            time-consuming and requires proficiency in programming, which is difficult for ordinary
                            researchers. Here we use McComedy<sup>[1]</sup>, a modeling tool designed for individual-base
                            d modeling of microbial consumer-resource systems. This tool allows flexibly combining
                            pre-implemented building blocks that represent physical and biological processes.
                        </p>
                        <p style={styles.paragraph}>
                            In the intestine, probiotics do not directly come into contact with intestinal cells,
                            but adhere through interaction with the mucus layer of the intestine<sup>[2]</sup>. Assuming
                            that the mucus layer is flat, it can be approximated that the colonized probiotic
                            community grows in the form of biofilm.
                        </p>
                        <p style={styles.paragraph}>
                            By using McComedy, we simulated the biofilm growth of three selected probiotics in the gut.
                        </p>
                        <br />
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/1.jpg'}
                            caption={'Figure 1 Initial Page of McComedy'}
                            customWidth={'60%'}>
                        </ImageWithCaption>
                        <br />
                        <h3 style={styles.partheading}>Modeling Process and Results</h3>
                        <p style={styles.paragraph}>
                            In Spidey Microbe, three probiotic strains are used: Escherichia coli Nissle
                            1917, Lactobacillus plantarum ATCC 8014, and Lactococcus lactis F44. The
                            data from <strong style={{ color: '#c67e38' }}>ProMetab</strong> (we constructed this database in our software part)
                            shows that these three strains(represented as A, B, C) have amino acid
                            feeding relationships, as shown in Figure 2.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/2.jpg'}
                            caption={'Figure 2 Amino Acid Feeding Relationships'}
                            customWidth={'60%'}>
                        </ImageWithCaption>

                        <p style={styles.paragraph}>
                            Here we make a simplified assumption: only consider the metabolic exchange of amino acids.
                            Design two sorts of metabolic exchange scenarios under this assumption <sup>[3]</sup>
                        </p>
                        <p style={styles.paragraph}>
                            (1) The environment lacks various amino acids, which need to be produced by A and B. This scenario simulate the growth of flora under conditions of resource scarcity and feeding relationships.
                        </p>
                        <p style={styles.paragraph}>
                            (2) There is a lack of various amino acids in the environment, but at this point, the feeding relationships of the bacteria disappears, meaning that amino acids will not be secreted into the environment. This scenario simulate the growth of flora under conditions of resource scarcity and no feeding relationships.
                        </p>
                        <p style={styles.paragraph}>
                            The feeding relationships of the strains is set through the consumes resource and release resource options of the Microbes module.
                        </p>
                        <p style={styles.paragraph}>
                            Referring to the official parameter recommendation document, we set parameters in each module of McComedy. Both simulations introduced the Biofilm module: The bacteria grew upwards from a single layer, and the biofilm gradually thickened, simulating to some extent the continued growth and reproduction of the strain after successful adhesion - that is, the formation of the biofilm. The color parameters of bacteria A、B and C are set to red, green, and blue, respectively. The parameters set for each module can be found in our <a href='https://gitlab.igem.org/2024/software-tools/tjusx'>Gitlab</a>.
                        </p>
                        <p style={styles.paragraph}>
                            After simulation, we can obtain the motion diagrams for two scenarios, Result 1 and Result 2, as follows:
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/3-result-1.gif'}
                            caption={'Figure 3 Result 1'}
                            customWidth={'50%'}>
                        </ImageWithCaption>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/4-result-2.gif'}
                            caption={'Figure 4 Result 2'}
                            customWidth={'50%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            Conclusion: With feeding relationships, B and C can still grow well and form biofilm quickly when resources are scarce; Without feeding relationships, B and C grow slowly, and it is even difficult to form a biofilm as a whole. The simulation results verifies that, under the condition of external amino acid deficiency, the combination of strains with feeding relationships grow better in the intestine than the combination of strains without feeding relationships, reflecting the advantage of our Spidey Microbe.
                        </p>
                        <p style={styles.paragraph}>
                            The simulated data results can also be found in our team’s <a href='https://gitlab.igem.org/2024/software-tools/tjusx'>Gitlab</a>.
                        </p>
                    </Element>
                    <Element name="section3" style={styles.section}>
                        <h2 style={styles.heading}>Optimizer Program Based on SVM Model</h2>
                        <br />
                        <h3 style={styles.partheading}>
                            About Condons
                        </h3>
                        <br />
                        <p style={styles.paragraph}>
                            Codons are the basic corresponding units between nucleic acid sequences that carry information and protein sequences, and codons encoding the same amino acid are called synonymous codons. Although the probability of using synonymous codons in protein synthesis varies, a species or gene typically tends to use one or a few specific synonymous codons, known as optimal codons, a phenomenon known as codon preference<sup>[4]</sup>. The frequency of codons in DNA sequences is positively correlated with the number of corresponding tRNAs in cells, and the concentration of tRNAs determines the number of amino acids available for protein translation extension, which in turn affects the efficiency of protein synthesis <sup>[5]</sup>. Therefore, the expression level of proteins is highly correlated with codon usage. Rare codons often reduce translation rates and even lead to translation errors. So codon optimization is a key determinant of increasing protein expression in heterologous expression systems. We considered this influencing factor and incorporated it into the gene expression optimization modeling.
                        </p>
                        <p style={styles.paragraph}>
                            The codon optimization process maximizes the expression of proteins from heterologous genes by changing the codon preference of the sequence. Most optimization strategies use high-frequency codons to replace low-frequency codons <sup>[6]</sup>, but this method is unstable. Because there are slow translation regions in protein sequences that play a decisive role in folding formation <sup>[7]</sup>, and higher translation rates can affect the formation of these structures, leading to a large accumulation of non functional proteins and toxic effects on cells.
                        </p>
                        <p style={styles.paragraph}>
                            The Codon Adaptation Index (CAI) is a primary indicator for predicting gene expression levels, as it indicates the extent to which codons encoding sequences are used in the host's body, but it’s not a comprehensive indicator. That’s why we use a strategy that combines machine learning and indexing methods to optimize the heterologous expression sequence of L.lactis F44.
                        </p>
                        <br />
                        <h3 style={styles.partheading}>
                            Transcriptome Analysis
                        </h3>
                        <br />
                        <p style={styles.paragraph}>
                            A transcriptome analysis of L. lactis F44 was run to extract real and highly expressed genes’ CDS sequences as positive example dataset. Pair-end sequencing raw data was downloaded from NCBI SRA (ID: SRR16318540), and reference genome with annotaions was also fetched from NCBI (ID: NZ_CP024954.1). Cutadapt 4.9 was used to cut off sequencing adapters to get clean data while using FastQC 0.11.9 to verify the process. HISAT2 2.2.1 and SAMtools 1.17 were used to map clean RNA reads to reference genome while using IGV 2.17.4 to verify the process. Cufflinks 2.2.1 and in-house Python scripts were used to assemble transcripts and annotate them, and calculate metrics including Fragments Per Kilobase per Million (FPKM), Transcripts Per Kilobase per Million mapped reads (TPM) and ln(TPM).
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/5.png'}
                            caption={'Figure 5 ln(TPM) Distribution Curve'}>
                        </ImageWithCaption>
                    </Element>
                    <Element name="section4" style={styles.section}>
                        <h2 style={styles.heading}>Machine Learning</h2>
                        <br />
                        <h3 style={styles.partheading}>
                            Dataset Establishment
                        </h3>
                        <p style={styles.paragraph}>
                            Fig. 5 shows a ln(TPM) distribution curve and it is composed of three broken lines obviously, and we believes they represents the low expression region, the medium expression region and the high expression region. CDS sequences with no frameshift in medium and high expression region (ln(TPM) &gt; 2.11) were extracted from reference genome to build positive example dataset, whose final size is 1853. The negative examples were derived from positive examples by shuffling CDS sequence sufficiently to completely destroy coding function. Consequently, the negative examples have the same length and (G+C)%, but with different base composition.
                        </p>
                        <h3 style={styles.partheading}>
                            Coding Method
                        </h3>
                        <p style={styles.paragraph}>
                            Classical machine learning models can only accept equal-length numerical vectors as inputs, so an algorithm that can encode DNA sequences is necessary while minimizing information loss as much as possible. The Z-Curve transformation is a powerful tool developed by Academician Chun-Ting Zhang<sup>[8]</sup> when solving such problems, which is now widely used in replication origin recognition, genome annotation, etc. The normal Z-Curve transformation method (NT) is defined as Formula (1), which is able to convert any DNA sequence into a 3-dimensional vector.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/gs4.png'}
                            caption={''}
                            customWidth={'60%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            In Formula (1), the a, g, c and t represent the content of adenine (A), guanine (G), cytosine (C) and thymine (T) in the DNA sequence respectively. Chemically, A and G are purine bases (R) while C and T are pyrimidine bases (Y), so the x represents the R-Y disparity of the sequence; A and C are amino bases (M) while G and T are keto bases (K), so the y represents the M-K disparity of the sequence; A and T are bases that form weak hydrogen bonds (W) while G and C are bases that form strong hydrogen bonds (S), so the z represents the W-S disparity of the sequence.
                        </p>
                        <p style={styles.paragraph}>
                            All the organisms use triplet codons, so the features of bases in first, second and third positions respectively have a significant impact on translation process, especially the G or C bases in the third position of synonymous codons, and finally influence heterologous expression. Therefore, three-phase-dependent Z-Curve transformation (PT) was introduced, which is defined as Formula (2) and able to convert any DNA sequence into a 9-dimensional vector.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/gs1.png'}
                            caption={''}
                            customWidth={'50%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            In Formula (2), the a<sub>i</sub>, g<sub>i</sub>, c<sub>i</sub> and t<sub>i</sub> represent the content of A, G, C and T at position i in the DNA sequence respectively, so x<sub>i</sub>, y<sub>i</sub> and z<sub>i</sub> represent R-Y disparity, M-K disparity and W-S disparity at position i of the sequence respectively.
                        </p>
                        <p style={styles.paragraph}>
                            Base-stacking is a key determinant of nucleic acid structure, even playing a greater role than hydrogen bonding in double helix structures, and affects the binding of protein complexes (e.g. RNA polymerases) to DNA, so it is also a feature worth considering in our machine learning model. To extract such features from DNA sequences, the third coding method, di-nucleotide Z-Curve transformation, was introduced and defined as Formula (3), which enables to convert any DNA sequence into a 12-dimensional vector.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/gs2.png'}
                            caption={''}
                            customWidth={'60%'}
                        >
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            In Formula (3), the p(NA), p(NG), p(NT) and p(NC) represent the corresponding 2-mer content in the DNA sequence. If all the Z-Curve transformation method are combined, any DNA sequence is able to be converted into a unique 24-dimensional vector for model trainning usage.
                        </p>

                        <h3 style={styles.partheading}>
                            Model Trainning
                        </h3>
                        <p style={styles.paragraph}>
                            A Support Vector Machine (SVM) model (supported by Python package scikit-learn) is trainned to evaluate whether a CDS will have medium to high expression or not in L. lactis F44. Radial Basis Function (RBF) was selected as kernel function of SVM classifier, and γ value is set to 1.00. Receiver Operating Characteristic (ROC) and Area Under Curve (AUC) were used as metrics to verify the classification effect.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/6.jpg'}
                            caption={
                                <>
                                    Figure 6 The Classification Performance of SVM Models <br />
                                    (a) Visualization of SVM performance. The Component I and Component II are two components of 24-dimensional vector that can reflect the situation in higher dimensional space.
                                    (b) AUCs of SVM models. DT is the model using di-nucleotide Z-Curve transformation to code sequences, and the same goes for others.
                                </>
                            }
                            customWidth={'50%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            The result shows that the AUC of PT model is higher than that of DT model, which means a better classification performance, and their combination reaches the highest AUC. We note that although NT does not perform well when used alone (not shown in Fig. 6), its introduction can improve the performance of other models. In this experiment, the introduction of NT increased the AUC of the three models on the test dataset by 0.38%, 0.29% and 0.12% respectively. So the final model we used reaches an AUC of 0.995 on the test dataset.
                        </p>
                    </Element>
                    <Element name="section5" style={styles.section}>
                        <h2 style={styles.heading}>Optimizer Program</h2>
                        <br />
                        <h3 style={styles.partheading}>
                            CAI Calculation
                        </h3>
                        <p style={styles.paragraph}>
                            Codon Adaptation Index (CAI) refers to the degree of consistency between the frequency of using synonymous codons and the optimal codon in the encoding area, and its value ranges from 0 to 1. CAI can be used to evaluate the expression level of exogenous genes in the host, and it is generally agreed that the higher the CAI, the higher the expression level of exogenous genes in the host. We collected the 1853 CDS sequences and calculated CAI for synonymous codons, which is shown in Fig. 7.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/7.png'}
                            caption={'Figure 7 Codon Table in L. lactis F44 with CAI'}
                            customWidth={'50%'}>
                        </ImageWithCaption>
                        <h3 style={styles.partheading}>
                            Monte Carlo Method
                        </h3>
                        <p style={styles.paragraph}>
                            The CAI of CDS sequence is calculated by Formula (4):
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/gs3.png'}
                            caption={''}
                            customWidth={'35%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            In Formula (4), CAIi represents the CAI value of the i-th codon and n represents the total number of codons owned by the CDS sequence. In order to simplify the algorithm and improve the performance as much as possible, we developed a Monte Carlo method to generate a large number of synonymous CDS sequences that are likely to have a high CAI in a short period of time. First, CAI values of synonymous codons are normalized so that they can be used as probabilities. Second, the input DNA sequence will be converted into polypeptide sequence based on the Bacterial, Archaeal and Plant Plastid Code Table (Table 11). Third, the algorithm will extend a codon (three bases) at once according to the polypeptide sequence and probabilities calculated above, eventually forming a synonymous CDS sequence.
                        </p>

                        <h3 style={styles.partheading}>
                            Hard filtration
                        </h3>
                        <p style={styles.paragraph}>
                            In this process, the final output will be filtered out layer by layer from candidate sequences. First, the sequences with CAI value below the CAI of original input CDS will be eliminated. Second, the sequences containing BioBrick restriction enzyme (EcoRI, XbaI, SpeI and PstI) cleavage sites will be dropped. Third, the SVM model will be used to determine whether the sequence will be a medium to high expression CDS in the host. Finally, sequence that has passed the three filters and has a highest CAI score will be the final output of the program.
                        </p>
                    </Element>
                    <Element name="section6" style={styles.section}>
                        <h2 style={styles.heading}>Optimize Results</h2>
                        <p style={styles.paragraph}>
                            We used this program to optimize six genes from two plasmids of L. lactis F44 and provided the optimized sequences to wet experiment. Taking the lagA gene as an example: As shown in the figure below, we successfully optimized the CAI value of the lagA gene from 0.85 to 0.93.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/model/8.png'}
                            caption={'Figure 8 Optimization Results of lagA '}
                            customWidth={'50%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            The code of the model was stored in our <a href='https://gitlab.igem.org/2024/software-tools/tjusx'>Gitlab</a>.
                        </p>
                    </Element>
                    <Element name="section7" style={styles.section}>
                        <h2 style={styles.heading}>Reference</h2>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[1]    Andre´ Bogdanowski, Thomas Banitz, et al. McComedy: A user-friendly tool for next generation individual-based modeling of microbial consumer-resource systems[J]. Plos Computational Biology, 2022, 18(1).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[2]    Shengyi Han, Yanmeng Lu, et al. Probiotic Gastrointestinal Transit and Colonization After Oral Administration: A Long Journey[J]. FRONTIERS IN CELLULAR AND INFECTION MICROBIOLOGY, 2021, 11.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[3]    Babak Momeni, Adam James Waite, et al. Spatial self-organization favors heterotypic cooperation over cheating[J]. ELIFE, 2013, 2.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[4]    Hershberg R, Petrov DA. Selection on codon bias. Annu Rev Genet. 2008;42:287-99.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[5]    Gustafsson C, Govindarajan S, Minshull J. Codon bias and heterologous protein expression. Trends Biotechnol. 2004 Jul;22(7):346-53.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[6]    Al-Hawash, A. B., Zhang, X. & Ma, F. Strategies of codon optimization for high-level heterologous protein expression in microbial expression systems. Gene Rep. 2017 Dec;9:46-53.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[7]    Angov E, Hillier CJ, Kincaid RL, Lyon JA. Heterologous protein expression is enhanced by harmonizing the codon usage frequencies of the target gene with those of the expression host. PLoS One. 2008 May 14;3(5):e2189.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[8]    Zhang R, Zhang CT. A Brief Review: The Z-curve Theory and its Application in Genome Analysis. Curr Genomics. 2014 Apr;15(2):78-94.</p>
                    </Element>
                </main>
            </div>
        </main>

    )
        ;
}




