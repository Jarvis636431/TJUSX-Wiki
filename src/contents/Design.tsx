import { Link, Element } from 'react-scroll';

// 使用内联样式
const styles = {
    container: {
        backgroundColor: '#FFF8F0',
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
    },
    sidebar: {
        marginRight: '10px',
        marginLeft: '10px',
        width: '250px',
        backgroundColor: '#F0D6B4',
        borderRadius: '20px',
        padding: '20px',
        overflowY: 'auto',
        borderRight: '1px solid #ddd',
    },
    sidebarItem: {
        marginBottom: '15px',
    },
    content: {
        width: 'calc(100% - 350px)',
        backgroundColor: '#ffffff',
        border: '20px solid #BC8C5B', // 修改这里
        borderRadius: '20px',
        flex: 1,
        padding: '20px',
        overflowY: 'auto',

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
    paragraph: {
        lineHeight: 1.6,
    },
};

export function Design(): JSX.Element {

    const handleScrollTo = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <div style={styles.container}>

            <aside style={styles.sidebar}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {['Overview', 'Adhension Module', 'Therapeutic Modules', 'Quorum Sensing Module', 'Community Characterization Methods', 'Project Design Iteration', 'Reference'].map((item, index) => (
                        <li key={index} style={styles.sidebarItem}>
                            <Link
                                to={`section${index + 1}`}
                                smooth={true}
                                duration={500}
                                offset={-20}
                                spy={true}
                                activeClass="active"
                                style={{ textDecoration: 'none', color: '#333', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.color = '#C27529'}
                                onMouseOut={(e) => e.currentTarget.style.color = '#333'}
                            >
                                {item}
                            </Link>
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
                        {/*<img>*/}
                        {/*    src="https://static.igem.wiki/teams/5376/design/design1.png"*/}
                        {/*</img>*/}
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
                            Since EcN lacks T7 RNA polymerase, we constructed a T7 RNA polymerase (T7RNP) expression
                            framework using the Cloning Vector pJUMP27-1A(sfGFP) from the iGEM 2024 Distribution, which
                            has compatible biobrick restriction sites.
                            This expression plasmid has a replication origin of PSC101 and confers resistance to
                            kanamycin, making it compatible with most protein expression vectors (such as PET series),
                            thus expanding the available vectors for EcN and enabling transfer to other E. coli strains
                            that do not contain T7 RNA polymerase.
                        </p>
                        <p style={styles.paragraph}>
                            Under induced conditions, "spider silk" is secreted into the extracellular space of EcN,
                            self-assembling on the surface of biotinylated EcN through streptavidin.
                            The gut mucin-binding protein at one end of the "spider silk" promotes the colonization of
                            EcN on the gut mucus layer(which is rich in mucin).
                        </p>
                        <p style={styles.paragraph}>
                            This method also facilitates the aggregation of probiotic communities.
                            We constructed a gene circuit for streptavidin surface display based on cell wall
                            peptidoglycan binding in Lactococcus lactis F44 within the Spidey Microbe community.
                        </p>
                    </Element>
                    <Element name="section3" style={styles.section}>
                        <h2 style={styles.heading}>Therapeutic Modules</h2>
                        <p style={styles.paragraph}>

                        </p>
                    </Element>
                    <Element name="section4" style={styles.section}>
                        <h2 style={styles.heading}>Quorum Sensing Module</h2>
                        <p style={styles.paragraph}>这里是群体感应模块内容...</p>
                    </Element>
                    <Element name="section5" style={styles.section}>
                        <h2 style={styles.heading}>Community Characterization Methods</h2>
                        <p style={styles.paragraph}>这里是社区表征方法内容...</p>
                    </Element>
                    <Element name="section6" style={styles.section}>
                        <h2 style={styles.heading}>Project Design Iteration</h2>
                        <p style={styles.paragraph}>这里是项目设计迭代内容...</p>
                    </Element>
                    <Element name="section7" style={styles.section}>
                        <h2 style={styles.heading}>Reference</h2>
                        <p style={styles.paragraph}>这里是参考内容...</p>
                    </Element>
        </main>

</div>
)
    ;
}




