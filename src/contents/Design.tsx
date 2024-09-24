import { Link, Element } from 'react-scroll';
import styled from 'styled-components';

// 定义样式组件
const Container = styled.div`
    background-color: #FFF8F0;
    display: flex;
    height: 100vh;
    overflow: hidden;
`;
const Sidebar = styled.aside`
    width: 250px;
    background-color: #F0D6B4;
    border-radius: 20px;
    padding: 20px;
    overflow-y: auto;
    border-right: 1px solid #ddd;
    //position:fixed;

    @media (max-width: 768px) {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #ddd;
    }
`;
const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
`;
const SidebarItem = styled.li`
    margin-bottom: 15px;

    a {
        text-decoration: none;
        color: #333;
        cursor: pointer;

        &.active {
            font-weight: bold;
            color: #C27529;
        }

        &:hover {
            color: #C27529;
        }
    }
`;
const Content = styled.main`
    background-color: #ffffff;
    border-color: #BC8C5B;
    border-width: 30px;
    flex: 1;
    padding: 20px;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;
const Section = styled(Element)`
    padding: 50px 0;
    border-bottom: 1px solid #ddd;

    h2 {
        margin-bottom: 20px;
        font-size: 24px;
    }

    p {
        line-height: 1.6;
    }
`;

// 使用 export function 导出组件
export function Design(): JSX.Element {
    return (
        <Container>
            <Sidebar>
                <SidebarList>
                    <SidebarItem>
                        <Link
                            to="section1"
                            smooth={true}
                            duration={500}
                            offset={-20}
                            spy={true}
                            activeClass="active"
                        >
                            Overview
                        </Link>
                    </SidebarItem>
                    <SidebarItem>
                        <Link
                            to="section2"
                            smooth={true}
                            duration={500}
                            offset={-20}
                            spy={true}
                            activeClass="active"
                        >
                            Adhension Module
                        </Link>
                    </SidebarItem>
                    <SidebarItem>
                        <Link
                            to="section3"
                            smooth={true}
                            duration={500}
                            offset={-20}
                            spy={true}
                            activeClass="active"
                        >
                            Therapeutic Modules
                        </Link>
                    </SidebarItem>
                    <SidebarItem>
                        <Link
                            to="section4"
                            smooth={true}
                            duration={500}
                            offset={-20}
                            spy={true}
                            activeClass="active"
                        >
                            Quorum Sensing Module
                        </Link>
                    </SidebarItem>
                    <SidebarItem>
                        <Link
                            to="section5"
                            smooth={true}
                            duration={500}
                            offset={-20}
                            spy={true}
                            activeClass="active"
                        >
                            Community Characterization Methods
                        </Link>
                    </SidebarItem>
                    <SidebarItem>
                        <Link
                            to="section6"
                            smooth={true}
                            duration={500}
                            offset={-20}
                            spy={true}
                            activeClass="active"
                        >
                            Project Design Iteration
                        </Link>
                    </SidebarItem>
                    <SidebarItem>
                        <Link
                            to="section7"
                            smooth={true}
                            duration={500}
                            offset={-20}
                            spy={true}
                            activeClass="active"
                        >
                            Reference
                        </Link>
                    </SidebarItem>
                </SidebarList>
            </Sidebar>
            <Content>
                <Section name="section1">
                    <h2>Overview</h2>
                    <p>
                        To provide treatment for Parkinson's disease, we designed the Spidey Microbe consortium,
                        which consists of three main modules:adhesion module, quorum Sensing module, therapeutic module.
                        Throughout the iterations of our project,
                        we continuously refined the Spidey Microbe consortium following the DBTL (Design, Build, Test, Learn) framework recommended by iGEM.
                    </p>
                </Section>
                <Section name="section2">
                    <h2>Adhension Module</h2>
                    <p>
                        The ability to colonize in the gut is crucial for probiotics’ effects. To further enhance this ability and improve the controllability of colonization to reduce the risk of bacterial translocation,
                        we designed a self-assembled system based on the binding of streptavidin and biotin. We used N-hydroxysuccinimide biotin, a reagent that can be conjugated through primary amines (such as the N-terminus and side chains of lysine residues in proteins and peptides),
                        to label the surface of Escherichia coli Nissle 1917 (EcN) cells[1]. We constructed an inducible fusion protein of streptavidin and gut mucin-binding protein in EcN, termed "silk," and used a signal peptide to localize this fusion protein to the extracellular space[2].
                        Since EcN lacks T7 RNA polymerase, we constructed a T7 RNA polymerase (T7RNP) expression framework using the Cloning Vector pJUMP27-1A(sfGFP) from the iGEM 2024 Distribution, which has compatible biobrick restriction sites.
                        This expression plasmid has a replication origin of PSC101 and confers resistance to kanamycin, making it compatible with most protein expression vectors (such as PET series), thus expanding the available vectors for EcN and enabling transfer to other E. coli strains that do not contain T7 RNA polymerase.
                    </p>
                    <p>
                        Under induced conditions, "spider silk" is secreted into the extracellular space of EcN, self-assembling on the surface of biotinylated EcN through streptavidin.
                        The gut mucin-binding protein at one end of the "spider silk" promotes the colonization of EcN on the gut mucus layer(which is rich in mucin).
                    </p>
                    <p>
                        This method also facilitates the aggregation of probiotic communities.
                        We constructed a gene circuit for streptavidin surface display based on cell wall peptidoglycan binding in Lactococcus lactis F44 within the Spidey Microbe community.
                    </p>
                    <p>
                        By using USP45 to localize the protein to the extracellular space and fusing the 3LysM domain to the N-terminus of streptavidin, we achieved surface display of streptavidin in Lactococcus lactis F44[3].
                        Through the interaction between streptavidin and biotin, we can facilitate the aggregation of Lactococcus lactis F44 with biotinylated EcN.
                        This allows Lactococcus lactis F44 to be anchored in the gut via the “bridge” of EcN, promoting the aggregation of the Spidey Microbe community and enhancing its stability.
                    </p>
                    <p>
                        Importantly, this adhesion module exhibits strong modularity and transferability.
                        EcN acts as a bindable "spider silk", allowing any probiotic to be anchored in the gut simply by displaying streptavidin on its surface.
                    </p>
                </Section>
                <Section name="section3">
                    <h2>Therapeutic Modules</h2>
                    <p>
                        The project ultimately constructed three therapeutic components, which include a butyrate production part based on EcN, and parts for the production of serotonin and levodopa  based on Lactococcus lactis F44.
                    </p>
                    <h3>Butyrate Production Part</h3>
                    <p>
                        To further expand the capabilities of EcN and establish it as a module for colonization by intestinal probiotics , we enhanced its butyrate production capacity during subsequent iterations.
                        Butyrate, as a short-chain fatty acid, can reduce inflammatory responses by improving intestinal mucosal permeability and downregulating the expression of inflammatory factors.
                        It can also  excite  intestinal neurons, accelerate gut motility, promote hormone secretion, and inhibit the proliferation of pathogenic bacteria. Butyrate plays a significant role in maintaining the homeostasis of the intestinal environment and the dynamic balance of the gut microbiota[4].
                        We enhanced the carbon metabolic flux of acetyl-CoA to butyrate by expressing acetyl-CoA acetyltransferase (ACAT), thereby improving the butyrate synthesis capability of EcN[5].
                    </p>
                    <h3>Levodopa Production Part</h3>
                    <p>
                        The primary medication for treating Parkinson's disease is levodopa (L-DOPA). Levodopa enters the brain and is converted to the neurotransmitter dopamine by aromatic amino acid decarboxylase (AADC) present in the body.
                        Dopamine cannot cross the blood-brain barrier, but levodopa can, and peripheral metabolism of levodopa significantly reduces its therapeutic efficacy[6].
                        To further reduce peripheral metabolism, we constructed a levodopa synthesis module in the probiotic Lactococcus lactis F44, which can produce levodopa upon oral administration, thereby minimizing  its peripheral metabolism.
                    </p>
                    <p>
                        To control the production of levodopa, we utilized a nisin-inducible Pnis promoter.
                    </p>
                    <h3>Serotonin Production Part</h3>
                    <p>
                        Serotonin is a neurotransmitter that plays a role in regulating various physiological processes in the central nervous system, such as mood, sleep, appetite, and memory, and can alleviate symptoms of motor impairment and emotional depression associated with Parkinson's disease[7].
                        In the later stages of the project, to further enhance the therapeutic effects of Spidey Microbe, we constructed a serotonin production module in another strain of Lactococcus lactis F44, achieving serotonin production by overexpressing N-acetyltransferase[8].
                        For expression control, we also employed a nisin-inducible Pnis promoter.
                    </p>
                </Section>
                <Section name="section4">
                    <h2>Quorum Sensing Module</h2>
                    <p>Quorum sensing is a common mode of microbial cell communication, where nisin, produced by lactic acid bacteria, serves as a typical quorum sensing signal peptide.
                        It is a bacteriocin generated by a group of Gram-positive bacteria belonging to the genera Lactococcus and Streptococcus. As lcnG is a class II two-component bacteriocin which is toxic to Lactococcus lactis  F44.
                        The gene cluster includes five genes: lagA, lagB, lagC, lagD, and lagE. lagA, lagD, and lagE encode the precursor of the alpha peptide, the ABC transporter, and an accessory protein of the pathway, respectively, enabling the strain to synthesize and secrete the alpha subunit of lcnG. lagB encodes the beta subunit of lcnG, while lagC is the immunity gene for lcnG[9].
                        At the outset of the project, considering biosafety, we designed a dynamically regulated quorum sensing relationship, with EcN constitutively expressing the lcnG production gene cluster  and Lactococcus lactis F44 designed with a lacI-lacO-based lagC expression circuit.
                        Upon removal of the inducing environment, the relationship among the Spidey Microbe consortium would shift from cooperative to competitive.
                    </p>
                    <p>
                        Subsequently, due to the controllable induction expression of the adhesion system and the incorporation of serotonin-producing bacteria, we revised the design of the quorum sensing module, further regulating the expression of therapeutic factors while ensuring biosafety.
                    </p>
                    <p>
                        We replaced the constitutive expression of lcnG in EcN with arabinose induction and constructed a nisin-inducible lagC (lcnG immune gene) gene expression circuit in the levodopa-producing bacteria. Compared to the initial design, this change provides Spidey Microbe with a greater variety of regulatory strategies.
                    </p>
                    <p>
                        Spidey Microbe possesses four regulatory strategies, enabling the system to pause, start, switch, and end, enhancing system controllability.
                    </p>
                    <p>
                        In the absence of  both arabinose and nisin, the system enters a paused state, producing only butyrate to alleviate inflammatory responses. Upon the addition of nisin, the system initiates, producing butyrate, serotonin, and levodopa.
                    </p>
                    <p>
                        When both arabinose and nisin are present, the system switches to produce only levodopa in response to different stages of Parkinson's disease.
                    </p>
                    <p>
                        When the nisin environment is removed and arabinose is added, the Spidey Microbe system concludes, with the bacteria producing therapeutic components being killed , ensuring biosafety. Concurrently, by controllable regulation of the adhesion system, without IPTG induction, EcN loses its adherence to the gut, further ensuring safety.
                    </p>
                </Section>
                <Section name="section5">
                    <h2>Community Characterization Methods</h2>
                    <p>
                        To characterize the growth of each bacterium in Spidey Microbe, we used three fluorescent proteins from the iGEM 2024 Distribution: TannenRFP, mTagBFP, and SYFP2.
                    </p>
                    <p>
                        We constructed the TannenRFP expression element on the T7 RNA polymerase expression vector of EcN, the mTagBFP on the adhesion module vector of the levodopa-producing bacteria, and the SYFP2 on the adhesion module vector of the serotonin-producing bacteria.
                    </p>
                </Section>
                <Section name="section6">
                    <h2>Project Design Iteration</h2>
                    <h3>Part 1: Preliminary Design of Spidey Microbe</h3>
                    <p>
                        In the early stages of project research and design, we constructed the gut microbiome metabolite database - ProMetab and analyzed it, selecting EcN and Lactococcus lactis F44 from the candidate probiotics.(Jump link to the dry experiment page)
                    </p>
                    <p>
                        EcN only has the adhesion module and the preliminary quorum sensing module for expressing lcnG, while Lactococcus lactis F44 produces levodopa and can produce the lcnG immunity gene lagC under IPTG induction.
                    </p>
                    <h3>Part 2: Improvement of Spidey Microbe</h3>
                    <p>
                        We attended CCiC and communicated with Professor Liu Xingyin from Nanjing Medical University (Jump link to the HP page), realizing that having only levodopa in the system cannot further cope with the different stages of Parkinson's disease, and the effect may be poor.
                        Based on the previous design, we added a strain of Lactococcus lactis F44 that produces serotonin, and 5-HTP can inhibit the motor disorders caused by levodopa in Parkinson's patients.
                    </p>
                    <p>
                        We also interviewed Director Chen Lei, the person in charge of the Chinese Parkinson's Disease One-Stop Service Center and the Chinese Parkinson's Disease Diagnosis and Treatment Training Base at Tianjin Huanhu Hospital, and realized that for Parkinson's patients, symptoms of gut inflammatory reactions are also a thorny issue (Jump to the HP page).
                        We tried to construct a butyric acid expression module in EcN, which makes EcN more modular and can be used for the treatment of various diseases with gut inflammatory reactions.
                    </p>
                    <h3>Part 3: Restructuring of the Quorum Sensing in Spidey Microbe</h3>
                    <p>
                        To enhance the control of the system, we changed the design of the quorum sensing module, constructed an arabinose-induced lcnG expression circuit in EcN, and replaced the IPTG-controlled immunity gene lagC expression circuit in Lactococcus lactis F44 with Nisin control, and removed the immunity gene expression circuit in the serotonin-producing bacteria, thus achieving control over serotonin production.
                    </p>
                    <h3>Part 4: Expansion of Spidey Microbe</h3>
                    <p>
                        The mouse experiment group experimented with multiple probiotics and analyzed their treatment of Parkinson's disease, finding that Lactobacillus plantarum has a positive effect on the treatment of Parkinson's disease (Jump link to the mouse experiment page).
                        The dry experiment used the data from ProMetab to analyze the amino acid feeding situation of Lactobacillus plantarum, and adding Lactobacillus plantarum can strengthen the amino acid feeding relationship of the community, thereby enhancing the stability of the community (Jump link to the dry experiment page).
                        We tried to add Lactobacillus plantarum to the system, but due to its difficulty in genetic manipulation, we ultimately used natural Lactobacillus plantarum.
                    </p>
                </Section>
                <Section name="section7">
                    <h2>Reference</h2>
                    <p>[1]	Vargason, A. M., Santhosh, S. & Anselmo, A. C., Surface Modifications for Improved Delivery and Function of Therapeutic Bacteria. SMALL 16 e2001705 (2020).</p>
                    <p>[2]	Zandsalimi, F., Hajihassan, Z. & Hamidi, R., Denovo designing : a novel signal peptide for tat translocation pathway to transport activin A to the periplasmic space of E . coli. BIOTECHNOL LETT 42 45 (2020).</p>
                    <p>[3]	Lim SH,Jahanshiri F,Rahim RA,et al.Surfacedisplay of respiratory syncytial virus glycoproteins inLactococcus lactis NZ9000.Lett Appl Microbiol,2010,51:658-664.</p>
                    <p>[4]	Deleu S, Machiels K, Raes J, et al. Short chain fatty acids and its producing organisms: an overlooked therapy for IBD?[J]. EBioMedicine, 2021,66:103293. </p>
                    <p>[5]	JHA A K,LI J,YUAN Y,et al.A review on biobutyric acid production and its optimization[J].International Journal of Agriculture & Biology,2014,6(5):1019-1024.</p>
                    <p>[6]	Rekdal, V. M., Bess, E. N., Bisanz, J. E., Turnbaugh, P. J. & Balskus, E. P., Discovery and inhibition of an interspecies gut bacterial pathway for Levodopa metabolism. SCIENCE 364 1055 (2019).</p>
                    <p>[7]	Dong, X. L. et al., Polymannuronic acid prevents dopaminergic neuronal loss via brain-gut-microbiota  axis in Parkinson's disease model. INT J BIOL MACROMOL 164 994 (2020).</p>
                    <p>[8]	TAN D X,HARDELAND R.The Reserve/Maximum Capacity of Melatonin's Synthetic Function for the Potential Dimorphism of Melatonin Production and Its Biological Significance in Mammals[J].Molecules,2021,26(23):7302.</p>
                    <p>[9] Liu, F. et al., Interaction variability shapes succession of synthetic microbial ecosystems. NAT COMMUN 11 309 (2020).</p>
                </Section>
            </Content>
        </Container>
    );
}

// import SidebarContent, {SidebarItem} from '../components/SidebarContent';
//export function Design() {
// 定义侧边栏的内容
// const sidebarItems: SidebarItem[] = [
//     {
//         title: 'Part1. Metabolite database of probiotics—MDOP',
//         imageUrl: 'https://static.igem.wiki/teams/5376/overview.png',
//         text: '这是关于益生菌代谢物数据库 MDOP 的详细介绍。',
//     },
//     {
//         title: 'Part2. Software package—MDOP Tool',
//         imageUrl: 'https://static.igem.wiki/teams/5376/tool.png',
//         text: '这是关于 MDOP 工具包的软件部分的详细介绍。',
//     },
//     {
//         title: 'Reference',
//         imageUrl: 'https://static.igem.wiki/teams/5376/reference.png',
//         text: '这是参考文献部分的详细介绍。',
//     },
// ];
// return (
//     <main style={{backgroundColor: '#FFF8F0', minHeight: '100vh'}}>
//         {/* 头部区域 */}
//         <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
//             <img
//                 src="https://static.igem.wiki/teams/5376/viruse1.png"
//                 alt="Left Image"
//                 style={{maxWidth: '100px', height: 'auto'}}
//             />
//{/*<SidebarContent items={sidebarItems}/>*/}

