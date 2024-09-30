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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                <img
                    src="https://static.igem.wiki/teams/5376/viruse1.png"
                    alt="Left Image"
                    style={{ maxWidth: '200px', height: 'auto' }}
                />

                <img
                    src="https://static.igem.wiki/teams/5376/safety/safetylogo.png"
                    alt="TITLE"
                    style={{ width: '473px', height: '150px', objectFit: 'cover' }}
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
                    <BackToTopButton />
                    <Element name="section1" style={styles.section}>
                        <h2 style={styles.heading}>Overview</h2>
                        <p style={styles.paragraph}>
                            In this project, we aim to engineer the gut microbiota by
                            utilizing Escherichia coli to produce butyrate, while also
                            enabling Lactococcus lactis to generate levodopa and serotonin
                            . These metabolites will be delivered through the gut-brain
                            axis with the goal of achieving a combined treatment for
                            Parkinson's disease. Ensuring the safety of the project
                            is our top priority throughout this process. The following
                            sections will provide a detailed explanation of our
                            project from five aspects: project design safety,
                            laboratory safety, biosafety, human practice safety,
                            and risk identification and policy.
                        </p>
                    </Element>
                    <Element name="section2" style={styles.section}>
                        <h2 style={styles.heading}>Project Design Safety</h2>
                        <p style={styles.paragraph}>
                            During the project design phase, we have given full consideration to the safety of different aspects.
                        </p>
                        <p style={styles.paragraph}>
                            Firstly, in the selection of engineered bacterial strains
                            , we have prioritized strains that have been extensively
                            studied and are considered relatively<strong style={{ color: '#c67e38' }}> safe</strong>, such as E.
                            coli and Lactococcus lactis. We have chosen the E.
                            coli Nissle 1917 and Lactococcus lactis F44, which
                            have a long history of use in the food industry,
                            have a good safety record, and have been proven
                            to be <strong style={{ color: '#c67e38' }}>harmless</strong> to humans.
                        </p>
                        <p style={styles.paragraph}>
                            Secondly, we have designed the biosynthetic pathways to avoid the use or production of any known high-risk chemical substances, ensuring the purity and safety of the final product.
                        </p>
                        <p style={styles.paragraph}>
                            Furthermore, to prevent the spread of the microbiome to non-intestinal parts of the human body, such as the bloodstream, we have enhanced the colonization ability of the microbiome to the gut through genetic editing technology. At the same time, we have introduced an inducible promoter to control the synthesis of serotonin and levodopa. In addition, we have designed a quorum sensing module to directly kill Lactococcus lactis in emergency situations.
                        </p>
                    </Element>
                    <Element name="section3" style={styles.section}>
                        <h2 style={styles.heading}>Laboratory Safety</h2>
                        <p style={styles.paragraph}>
                            In terms of laboratory operations, we have established detailed laboratory safety protocols. All researchers involved in the project have undergone professional training and are familiar with biosafety standards and laboratory operation specifications. We strictly follow the following principles:
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Personal Protection</strong>: All researchers must wear appropriate personal protective equipment (PPE) in the laboratory, including lab coats, gloves, and goggles, to prevent direct contact with biological materials.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Waste Disposal</strong>: Biological waste generated during the experiment will be processed in accordance with biological hazard waste procedures to ensure that it does not pollute the environment.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Equipment Safety</strong>: All laboratory instruments and equipment are regularly inspected and maintained to ensure their proper operation and reduce the risk of accidents.
                        </p>
                    </Element>
                    <Element name="section4" style={styles.section}>
                        <h2 style={styles.heading}>Biosafety</h2>
                        <p style={styles.paragraph}>
                            For biosafety, we follow international and national biosafety standards and have conducted a comprehensive assessment. The microorganisms used in the project belong to a low-risk level and are restricted genomic. The main biosafety measures we take include:
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Isolation and Monitoring</strong>: We strictly store the strains in the laboratory to prevent the leakage of microorganisms and regularly inventory the chemicals to ensure safety.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Genetic Modification Control</strong>: The genetic modification operations involved in the project comply with ethical requirements. At the same time, the genetically modified strains are cultured outside the body to prevent any possible environmental release, including the killing of strains when disposing of waste.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Emergency Plan</strong>: In response to potential biosafety incidents, we have established an emergency response mechanism in reference to the "Tianjin University Laboratory Safety Management Measures," ensuring that problems can be dealt with quickly and effectively in the event of an accident.
                        </p>
                    </Element>
                    <Element name="section5" style={styles.section}>
                        <h2 style={styles.heading}>Human Practice Safety</h2>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Transparent Communication</strong>: Each stage of the project will disclose information to the public to ensure transparency and let the community understand the purpose and potential impact of our research.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Privacy Confidentiality</strong>: The results of all questionnaires are strictly confidential to ensure the privacy of participants. If a participant complains about a privacy leak, we will immediately withdraw the questionnaire information and further strengthen the confidentiality of private information.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Ethical Consideration</strong>: All research activities follow ethical principles to ensure that they do not have a negative impact on participants and the community, and respect their rights and opinions.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Education and Training</strong>: We will provide the community with educational activities on microbial engineering and its potential benefits to improve the public's understanding and support for our project.
                        </p>
                    </Element>
                    <Element name="section6" style={styles.section}>
                        <h2 style={styles.heading}>Risk Identification and Policy</h2>
                        <h3 style={styles.partheading}>
                            Risk Identification
                        </h3>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Technical Aspect</strong> <br />
                            Risk:<br />
                            Microbial engineering failure, engineered strains may not produce the desired metabolic products as expected. Harmful by-products may appear during the synthesis process, affecting product safety.<br />
                            Solution:<br />
                            Regular assessment, the project team will hold regular meetings to evaluate technical progress, communicate with instructors to identify and resolve technical bottlenecks in a timely manner. Analyze fermentation products to ensure no waste is produced.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Biosafety Aspect</strong> <br />
                            Risk:<br />
                            Strain leakage, microorganisms in the laboratory may be accidentally released into the environment. Samples from different experiments may contaminate each other, leading to inaccurate experimental results.<br />
                            Solution:<br />
                            Strict supervision, regularly review the implementation of laboratory operations and biosafety measures. Regularly train researchers on biosafety and conduct emergency drills to enhance the ability to respond to emergencies.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Legal and Ethical Aspect</strong> <br />
                            Risk:<br />
                            It may not meet the biosafety regulations and ethical review requirements of the country or region.<br />
                            Solution:<br />
                            Compliance review, ensure that all experimental activities comply with relevant laws and regulations, regularly communicate with legal advisors to maintain compliance. Fully conduct ethical supervision, review the design and implementation of experiments to ensure the ethical compliance of research.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Financial Risk Aspect</strong> <br />
                            Risk:<br />
                            Insufficient funds, the progress of project research and development may be hindered due to a break in the funding chain. Price fluctuations in some materials and equipment may lead to budget overruns.<br />
                            Solution:<br />
                            Budget monitoring, establish a financial monitoring mechanism, regularly review the implementation of the budget, and give early warnings of potential financial risks. Actively seek multiple sources of funding, including government grants, scientific research funds, and corporate cooperation.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Social Risk Aspect</strong> <br />
                            Risk:<br />
                            The public may have concerns about engineered probiotics, leading to a psychological resistance.<br />
                            Solution:<br />
                            We have strengthened the popularization of engineered probiotics, using the Internet and WeChat public accounts for social science popularization to enhance public understanding. At the same time, we continue to conduct social surveys to explore new uses for engineered probiotics.
                        </p>

                        <h3 style={styles.partheading}>
                            Policies and Regulations
                        </h3>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>EcN White Paper</strong> <br />
                            We participated in the EcN White Paper initiated by Peking University, improving the modification methods of EcN, expanding the applicable scenarios of EcN, and promoting the establishment of EcN-related regulations.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Tianjin Guidelines</strong> <br />
                            Tianjin University took the lead in compiling the "Tianjin Guidelines," advocating responsible biological research and standardizing the biosafety behavior of scientists. Our experiments strictly follow the provisions of the "Tianjin Guidelines."
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Tianjin University Laboratory Safety Management Measures</strong> <br />
                            Our experimental operations strictly follow the "Tianjin University Laboratory Safety Management Measures," standardizing the experimental operations of the experimenters and managing hazardous chemicals and experimental waste.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>The People's Republic of China Biosafety Law</strong> <br />
                            Our experiments strictly comply with the "People's Republic of China Biosafety Law," strictly following national standards and laboratory technical specifications and operating procedures, taking safety precautions. Strengthen the management of experimental waste, legally dispose of wastewater, exhaust gases, and other waste, and take measures to prevent pollution.
                        </p>
                    </Element>
                    <Element name="section7" style={styles.section}>
                        <h2 style={styles.heading}>Conclusion</h2>
                        <p style={styles.paragraph}>
                            In summary, this project has taken strict safety measures in design, laboratory operations, biosafety, human practice, risk identification, and legal policy to ensure that the research activities carried out do not pose potential hazards to participants, the environment, or society. We will continue to pay attention to safety issues, regularly assess the risks of the project, and make adjustments as needed to ensure the sustainable development of the project.
                        </p>
                    </Element>
                </main>
            </div>
        </main>

    )
        ;
}




