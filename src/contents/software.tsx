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
        height: '360px',
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

export function Software(): JSX.Element {

    return (
        <main style={{ backgroundColor: '#FFF8F0', minHeight: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                <img
                    src="https://static.igem.wiki/teams/5376/viruse1.png"
                    alt="Left Image"
                    style={{ maxWidth: '200px', height: 'auto' }}
                />

                <img
                    src="https://static.igem.wiki/teams/5376/software/softwarelogo.png"
                    alt="TITLE"
                    style={{ width: '660px', height: '150px', objectFit: 'cover' }}
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
                        {['Overview', 'Probiotic Metabolite—ProMetab', 'Software Package—ProMetab Tool', 'How does our software help with wet lab', 'Reference'].map((item, index) => (
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
                            In this project, the software part of the dry lab consists of the construction of
                            the probiotic database <strong style={{ color: '#c67e38' }}>ProMetab</strong> and the development of the software package <strong style={{ color: '#c67e38' }}>ProMetab Tool</strong>.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>ProMetab (Probiotic Metabolite)</strong> is a very useful probiotic database, mainly containing probiotic
                            metabolite data, corresponding data of probiotic strains and diseases they treat and the nutritional
                            deficiency data of amino acid and vitamin. For the public, they can use our database website to
                            look up probiotic species of interest and learn about probiotics and the diseases they can treat;
                            for wet Lab members and probiotic researchers, they can look up metabolites of the target probiotic
                            , amino acid deficiencies, vitamin deficiencies, etc by using the database. The data can help them
                            with needs such as rational design of probiotic use and optimization of probiotic composition.
                        </p>
                        <p style={styles.paragraph}>
                            By browsing the wiki of previous competitions, we found that there are quite a number of teams focusing on gut
                            health and probiotics as we do, so subsequent iGEM teams can also refer to our ProMetab data to rationally design
                            projects for medical engineering treatments with probiotics, for example, chassis selection based on probiotic metabolite data.
                        </p>
                        <p style={styles.paragraph}>
                            ProMetab Tool is a software tool developed by members of the dry lab for batch processing of strain interaction
                            data, designed to help users to easily carry out the work of importing graph databases and calculating and
                            evaluating strain interaction scores. Users can use the ProMetab database in conjunction with this software
                            tool for subsequent analysis, or organization of query data.
                        </p>
                        <p style={styles.paragraph}>
                            The address of the database and the software download package can be found at: <a href="https://gitlab.igem.org/2024/software-tools/tjusx" style={{ color: '#955321', fontSize: '24px' }}>Our code repository</a>
                        </p>
                    </Element>
                    <Element name="section2" style={styles.section}>
                        <h2 style={styles.heading}>Probiotic Metabolite—ProMetab</h2>
                        <br />
                        <h3 style={styles.partheading}>Preliminary Ideas</h3>
                        <p style={styles.paragraph}>
                            Our team's program is related to probiotics and gut health. While reading through iGEM's previous
                            competition projects, we found that different teams had conducted research related to different
                            diseases and probiotics, and we thought that a probiotic flora rational design tool might be
                            able to better guide protocols for engineering probiotic flora disease treatments. So the
                            project team firstly investigated the probiotic databases reported in the literature and found
                            <i>MicrobiomeHUB, Optibac Probiotics, BIDD Probio</i> <sup>[1]</sup>, etc. However, the existing databases all
                            only associate the related diseases and probiotics, and lack the prediction of metabolites of
                            the strains and the analysis of probiotic interactions. After some thought and discussion with
                            our instructors, we decided to make our own database——Probiotic Metabolite (ProMetab) to aid in
                            the design of probiotic flora treatment programs. The advantage of ProMetab is that it has a larger
                            volume of data and contains data not only limited to strains which are already on the market,
                            but also strains which are not on the market or have the potential to be probiotic. Specifically,
                            we also include<strong style={{ color: '#c67e38' }}> metabolite data</strong> of probiotics and analyze the <strong style={{ color: '#c67e38' }}>nutritional deficiencies of amino
                                acids and vitamins</strong> among them, which makes our database more specialized and can be used as a data
                            reference for wet-lab and probiotic researchers.
                        </p>
                        <br />
                        <h3 style={styles.partheading}>Data Collection</h3>

                        <p style={styles.paragraph}>
                            The database was constructed in terms of intestinal probiotic strains, and relevant information
                            was collected through open source databases.
                        </p>
                        <h3 style={{ ...styles.heading, textAlign: 'left' as const, fontSize: '28px' }}>Determination of the List of Probiotic Strains</h3>
                        <p style={styles.paragraph}>
                            Based on the <i>BIDD Probio's</i> list of probiotic strains, we combined data from major online open-source probiotic
                            databases as well as probiotic data published by official organizations (like <i>National Health Commission of the People's
                                Republic of China</i>) in the past few years. The strains we selected are not only limited to those already on the market, but
                            also include strains that are not on the market or have probiotic potential.
                        </p>
                        
                        <h3 style={{ ...styles.heading, textAlign: 'left' as const, fontSize: '28px' }}>Metabolite Data</h3>

                        <p style={styles.paragraph}>
                            Obtaining the EC numbers of the enzymes: For strains for which the complete EC number can be queried
                            on the <i>Uniport</i> database <sup>[2]</sup>, the EC numbers is directly crawled; for strains for which the EC numbers
                            cannot be retrieved, the gene sequence is utilized, and the protein sequence is obtained by operation
                            with tools such as <i>antiSMASH</i>, and then predicted to obtain the corresponding EC numbers by <i>CLEAN</i> <sup>[3]</sup>.
                        </p>

                        <p style={styles.paragraph}>
                            Obtaining metabolic reactions corresponding to EC numbers: different metabolic reactions corresponding to different EC
                            numbers were crawled through the <i>BRENDA</i> <sup>[4]</sup> database. The end products of the metabolic reactions are the metabolites of the strain.
                        </p>

                        <p style={styles.paragraph}>
                            At the beginning of the data crawling phase, we developed a standard operating procedure for crawling data and carried
                            out the data collection work in an organized manner. The figure below shows the team members who helped to participate in the data crawling:
                        </p>

                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/software/1.png'}
                            caption={'Figure 1 Pie Chart of Crawling Data Division of Labor'}
                            customWidth={'60%'}>
                        </ImageWithCaption>

                        <h3 style={{ ...styles.heading, textAlign: 'left' as const, fontSize: '28px' }}>Synthesis Capacity Data of Amino Acid and Vitamin</h3>
                        <p style={styles.paragraph}>
                            Amino acids and vitamins are two very important categories of probiotic metabolites, and they are
                            considered as the main metabolites exchanged between colonies and between colonies and the environment <sup>[5]</sup>. Therefore,
                            we analyzed the synthesis capacity of 18 amino acids and B vitamins of the strains, categorizing the data into two separate categories.
                        </p>
                        <p style={styles.paragraph}>
                            Vitamin synthesis ability data: common B vitamins (including derivatives) imported and exported by bacteria were selected for analysis, such as thiamin [B1], riboflavin [B2], niacin [B3], pantothenate [B5], pyridoxine [B6], and so on. If a particular type of B vitamin (including derivatives) cannot be found in the metabolite data of a strain, it means that the probiotic is unable to synthesize that type of B vitamin, and is a defective type of that vitamin.
                        </p>
                        <p style={styles.paragraph}>
                            Amino acid synthesis capacity data: Amino acid synthesis capacity was predicted using GapMind, an amino acid auxotroph prediction framework developed by Morgan Price et al <sup>[6]</sup>.<i>GapMind</i>specifically analyzes amino acid synthesis pathways, and the resulting amino acid auxotroph predictions are more comprehensive and accurate than our metabolite data. GapMind's input data is the strain's genome or proteome, and the output is a prediction of the synthesis capacity of 18 amino acids.
                        </p>

                        <h3 style={{ ...styles.heading, textAlign: 'left' as const, fontSize: '28px' }}>Corresponding Data of Probiotic Strains and Diseases They Treat</h3>
                        <p style={styles.paragraph}>
                            The data in this category are primarily referenced and integrated from <i>BIDD Probio, MicrobiomeHUB</i> and related references.
                        </p>
                        <br />
                        <h3 style={styles.partheading}>Database Structure Design & Search Platform Design</h3>

                        <h3 style={{ ...styles.heading, textAlign: 'left' as const, fontSize: '28px' }}>Database Structure Design</h3>
                        <p style={styles.paragraph}>
                            For database structure design, we use a <strong style={{ color: '#c67e38' }}>graph database</strong> <sup>[7]</sup> instead of a relational database to store data. The reason
                            we use a graph database is that ProMetab contains more complex data relationships, so it is difficult to maintain
                            multi-table consistency and transactional integrity if a relational database is used. In a graph database,
                            on the other hand, each entity (like strain, enzyme, metabolite, etc.) is a node, and the relationships
                            between them are represented by edges. Such a model makes it possible to jump directly from one node
                            to another when querying, without the need to realize it through table joins as in relational databases
                            . At the same time, graph databases are optimized for multi-hop queries and can easily handle complex
                            paths involving multiple entities and relationships. For highly interconnected datasets, graph databases
                            can efficiently track multi-step relationships without causing a dramatic drop in query performance.
                            Finally, graph databases are highly extensible due to the nature of their data storage, where new nodes
                            and relationships can be directly connected to the old data without having to consider issues such as consistency
                            , so we end up presenting our data in graph databases.
                        </p>
                        <p style={styles.paragraph}>
                            The data structure is shown below:
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/software/2.png'}
                            caption={'Figure 2 Database Structure Diagram'}
                            customWidth={'80%'}>
                        </ImageWithCaption>

                        <h3 style={{ ...styles.heading, textAlign: 'left' as const, fontSize: '28px' }}>Search Platform Design</h3>
                        <p style={styles.paragraph}>
                            We designed four interfaces for <strong style={{ color: '#c67e38' }}>ProMetab--HOME, OVERVIEW, SEARCH, and CONTACT</strong>.
                            In the SEARCH interface, six different entity queries are supported, including
                            strain, metabolite, disease, EC numbers, and amino acid vitamin deficiency queries.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/software/3.gif'}
                            caption={'Figure 3 GIF of Search Platform Display'}
                            customWidth={'80%'}>
                        </ImageWithCaption>
                    </Element>

                    <Element name="section3" style={styles.section}>
                        <h2 style={styles.heading}>Software Package—ProMetab Tool</h2>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>ProMetab Tool</strong> is a batch processing tool for microbial interaction data based on the ProMetab graph database, designed to facilitate direct interaction, computation, and query operations with the graph database. The tool offers two modes of interaction: a Python command-line interface and a Graphical User Interface (GUI).
                        </p>
                        <p style={styles.paragraph}>
                            Interface overview of ProMetab Tool:
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/software/4.png'}
                            caption={'Figure 4 Interface of ProMetab Tool'}
                            customWidth={'50%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            Brief Introduction to Software Usage:
                        </p>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <embed
                                src="https://static.igem.wiki/teams/5376/software/readme1.pdf"
                                type="application/pdf"
                                width="70%"
                                height="850px"
                            />
                        </div>
                        <br />
                        <p style={styles.paragraph}>
                            Features and Advantages of the Software:</p>
                        <p style={styles.paragraph}>(1) <strong>Quick Import</strong>: Capable of rapidly importing Excel data files into the graph database. The software utilizes a commonly accepted Excel file format, making it user-friendly for operation and browsing, and facilitating data addition and deletion. This feature encapsulates a series of Python methods using py2neo for data interaction.</p>
                        <p style={styles.paragraph}>(2) <strong>Categorized Filtering</strong>: Preliminary screening based on specific data nodes. Through the "Disease Dropdown Menu" in the software, one can view the types of diseases currently stored in the database. By selecting a disease, all strains associated with it can be retrieved for further screening.</p>
                        <p style={styles.paragraph}>(3) <strong>Interaction Algorithm</strong>: An algorithm for scoring and ranking selected strains. It scores based on the metabolic supply and demand relationships between strains. The algorithm includes two scores: Network Density and Minimum Feeding Quantity. Network Density refers to the total number of metabolic interaction lines between two strains, while Minimum Feeding Quantity refers to the minimum value of single-supply numbers between two strains. By comparing the values of them, we can obtain a list of strain combinations sorted in descending order of scores. </p>
                        <p style={styles.paragraph}>(4) <strong>Visualization of Results</strong>: The software visualizes the interaction situation and scores obtained from the calculations.</p>
                    </Element>

                    <Element name="section4" style={styles.section}>
                        <h2 style={styles.heading}>How does our software help with wet lab</h2>
                        <p style={styles.paragraph}>
                            At the initial stage of project design, focusing on the current challenges
                            and urgent needs in the treatment of mental diseases, we selected Parkinson's
                            disease as the target disease for our project. In line with the current disease
                            treatment needs, we referred to the ProMetab database for the rational selection
                            of probiotic chassis.
                        </p>
                        <p style={styles.paragraph}>
                            In the early stages of wet lab experiments, we decided to use two wild-type probiotics for synthetic biology
                            modification to construct our Spidey Microbe consortium, based on our database and software. After preliminary
                            screening in wet experiments, Escherichia coli and Lactococcus lactis were chosen for modification. There are
                            two E. coli strains available (M-17, Nissle 1917) and three L. lactis strains (F44, IL1403, KF147). By using
                            ProMetab Tool combined with ProMetab data, we conducted amino acid feeding analysis on six combinations, and
                            the highest-scoring strain combinations was <strong style={{ color: '#c67e38' }}>E.coli Nissle 1917 + L.lactis F44 or E.coli M-17 + L.lactis F44</strong>
                            — we believe that the more metabolic feeding interactions, the closer the relationship between the two bacteria
                            , meaning E. coli can provide a strong nutritional support for Lactococcus lactis, strengthening the connections
                            within the Spidey Microbe consortium.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/software/5.png'}
                            caption={'Figure 5 Score List for Strain Combinations'}
                            customWidth={'50%'}>
                        </ImageWithCaption>
                        <br />
                        <p style={styles.paragraph}>
                            Further selection of E. coli strains: For this two E. coli strains with similar amino acid synthesis
                            capabilities, Escherichia coli Nissle 1917 and Escherichia coli M-17, the probiotic-disease data in
                            the database was queried to select the Nissle 1917 probiotic strain with more therapeutic effects.
                            The reason is that strains with richer therapeutic effects are generally considered to have better
                            gut compatibility. At the same time, Nissle 1917 and F44 are easy to modify and common probiotic
                            strains. The combination <strong style={{ color: '#c67e38' }}>E.coli Nissle 1917 + L.lactis F44</strong> was ultimately chosen, considering
                            the difficulty of modification and the feasibility of wet experiments.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/software/6u.jpg'}
                            caption={'Figure 6 Probiotic-disease Data of Nissle 1917 (left) and M-17(right)'}
                            customWidth={'50%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            In the middle stage of the project, considering the smooth progress of the molecular biology
                            of the dual-bacterial relationship, we boldly proposed the idea of adding a third strain.
                            Through preliminary literature research, Lactobacillus plantarum was selected for addition.
                            We used ProMetab data to analyze the amino acid feeding situation after adding Lactobacillus
                            plantarum and found that this addition could also strengthen the amino acid feeding
                            relationships within the consortium. After database verification, we finally decided
                            to include the probiotic Lactobacillus plantarum ATCC 8014 in the consortium.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/software/7u.jpg'}
                            caption={'Figure 7 Metabolic Relationships Before (left) and After (right) the Addition of Lactobacillus Plantarum ATCC 8014'}
                            customWidth={'100%'}>
                        </ImageWithCaption>
                    </Element>

                    <Element name="section5" style={styles.section}>
                        <h2 style={styles.heading}>Reference</h2>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[1]    Taolin, Wang Bohua, et al. Database and Bioinformatics Studies of Probiotics[J]. JOURNAL OF AGRICULTURAL AND FOOD CHEMISTRY, 2017, 65(35): 7600-7603.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[2]    UniProt Consortium (2021). UniProt: the universal protein knowledgebase in 2021. Nucleic acids research, 49(D1), D480–D489.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[3]    Yu, Tianhao, Cui, Haiyang, Li, Jianan Canal, Luo, Yunan, Jiang, Guangde, & Zhao, Huimin. (2023). Enzyme function prediction using contrastive learning. Science, 379(6639), 1358-1363.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[4]    Schomburg, I., Jeske, L., Ulbrich, M., Placzek, S., Chang, A., & Schomburg, D. (2017). The BRENDA enzyme information system–From a database to an expert system. Journal of Biotechnology, 261, 194-206. </p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[5]    Elizabeth J. Culp, Andrew L. Goodman.Cross-feeding in the gut microbiome: Ecology and mechanisms[J]. CELL HOST & MICROBE, 2023, 31(4): 486-493.</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[6]    Morgan N. Price, Adam M. Deutschbauer, et al. GapMind: Automated Annotation of Amino Acid Biosynthesis[J]. MSYSTEMS, 2020, 5(3).</p>
                        <p style={{ ...styles.paragraph, fontSize: '15px' }}>[7]    Guia J, Soares V G, Bernardino J. Graph Databases: Neo4j Analysis [C/OL].In International Conference on Enterprise Information Systems, 2017.</p>
                    </Element>
                </main>
            </div>
        </main>

    )
        ;
}




