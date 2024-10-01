import { Link, Element } from 'react-scroll';
import BackToTopButton from '../components/BackButton.tsx';
import ImageWithCaption from "../components/ImageWithCaption.tsx";
import QuizQuestion from "../components/QuizQuestion.tsx";

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
        height: '500px',
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
export function HumanPractices(): JSX.Element {

    return (
        <main style={{ backgroundColor: '#FFF8F0', minHeight: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                <img
                    src="https://static.igem.wiki/teams/5376/viruse1.png"
                    alt="Left Image"
                    style={{ maxWidth: '200px', height: 'auto' }}
                />

                <img
                    src="https://static.igem.wiki/teams/5376/humanpractices/humanpracticeslogo.png"
                    alt="TITLE"
                    style={{ width: '1062px', height: '150px', objectFit: 'cover' }}
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
                        {['Questionnaire', 'Market Research', 'China gut festival', 'CCiC Conference', 'Dialogue with Experts', 'Dialogues with Doctors', 'RDialogue with Patients','International Symposia','“ProMetab” Database','Education'].map((item, index) => (
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
                        <h2 style={styles.heading}>Public Questionnaire</h2>
                        <p style={styles.paragraph}>
                            During the promotion of the festival, we released a
                            questionnaire “<strong style={{ color: '#c67e38' }}>The Impact of Probiotics on People's
                                Lives</strong>” to find out the popularity of probiotics in
                            people's lives, their usage habits and attitudes,
                            and their expected functions in the future.
                        </p>
                        <h3 style={styles.partheading}>Survey Methods</h3>
                        <p style={styles.paragraph}>
                            A total of <strong style={{ color: '#c67e38' }}>529 questionnaires</strong> were collected and analyzed using
                            the <strong style={{ color: '#c67e38' }}>KABP (Knowledge, Attitude, Belief, Practice) method</strong> under
                            the guidance of <strong style={{ color: '#c67e38' }}>Chunxia Cao</strong>, Associate Professor at the Medical
                            School of Tianjin University and Director of the Emergency
                            Epidemiology Laboratory, aiming to gain an in-depth
                            understanding of the level of hygiene knowledge, attitudes
                            , beliefs, and behaviors of the people.
                        </p>
                        <h3 style={styles.partheading}>Survey Content</h3>
                        <br />
                        <h4 style={{ ...styles.partheading, fontSize: '28px' }}>Knowledge</h4>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp10.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            The results of the first part of the research show that the
                            public group has a relatively <strong style={{ color: '#c67e38' }}>high level</strong> of <strong style={{ color: '#c67e38' }}>knowledge about
                                probiotics</strong>, with a popularity of 76.94%. They not only know
                            the existence of probiotics, but also have some knowledge
                            of their functions, of which 56.14% understand that probiotics
                            can promote digestion and absorption, 55.39% know that
                            probiotics are involved in immune regulation, and the
                            same proportion of people realize that probiotics
                            help to improve the intestinal environment and
                            ecological balance. These data indicate that the
                            public population has a more comprehensive understanding
                            of the basics of probiotics, which may be related to
                            their stronger health awareness and interest in
                            emerging health products.
                        </p>
                        <h4 style={{ ...styles.partheading, fontSize: '28px' }}>Current Practice</h4>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp11.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            The results of the research show that the public population has
                            a high <strong style={{ color: '#c67e38' }}>awareness and acceptance</strong> of probiotics, which indicates
                            that they have a strong health awareness and curiosity about
                            emerging health products. They usually pursue convenient
                            and novel product forms, such as <strong style={{ color: '#c67e38' }}>oral capsules, solid beverage
                                powders</strong>, or <strong style={{ color: '#c67e38' }}>food supplements</strong> that are integrated with their
                            daily diet.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp12.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            The main reasons for choosing probiotic products in conjunction
                            with the probiotic products usually chosen above show that the
                            public population has a <strong style={{ color: '#c67e38' }}>certain scientific basis</strong> for their
                            choice of probiotic products, reflecting their positive attitudes
                            towards healthy diet and lifestyle.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp13.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            In addition, <strong style={{ color: '#c67e38' }}>network science</strong> is one of the main ways for publics to
                            obtain information about probiotics, so social media and network
                            platforms can be utilized for publicity and promotion to attract
                            the attention of publics through interactive and diverse content.
                        </p>
                        <h4 style={{ ...styles.partheading, fontSize: '28px' }}>Attitude Belief</h4>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp14.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            For the attitudes and beliefs section of the research
                            , it was revealed that people held different views and
                            concerns about modified engineered bacteria and naturally
                            fermented probiotics. For the modified engineered bacteria,
                            respondents were mainly concerned about <strong style={{ color: '#c67e38' }}>the safety of
                                genetic modification</strong>, including the possibility of
                            genetic mutation and unknown pitfalls, and whether
                            such modification would affect the original
                            structure and function of the engineered bacteria
                            , and they were also worried about the potential
                            side effects and unhealthy effects of the bacteria
                            on the body, including the consideration of the
                            price cost.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp15.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            At the end of the survey, publics expressed their expectations and
                            prospects for the new effects probiotics may bring in the future.
                            In addition to the expectations for the existing functions of
                            probiotics, such as improving the intestinal tract and promoting
                            digestion, the respondents also raised expectations for the new
                            functions of <strong style={{ color: '#c67e38' }}>cosmetic enhancement, fat reduction and weight loss</strong>.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp16.png'}
                            caption={''}>
                        </ImageWithCaption>

                        <h3 style={styles.partheading}>Survey Summary</h3>
                        <p style={styles.paragraph}>
                            After this questionnaire survey, we can see that the public group generally has a higher awareness and acceptance of probiotics, which reflects that they have a better sense of health and curiosity about healthy products.
                        </p>
                        <p style={styles.paragraph}>
                            Regarding products, this group tends to pursue <strong style={{ color: '#c67e38' }}>convenient and innovative product</strong> formats such as easy-to-carry oral capsules and solid beverage powders, suggesting that product design needs to take into account the lifestyles and preferences of young consumers.
                        </p>
                        <p style={styles.paragraph}>
                            Currently publics may be wary of modified engineered bacteria when choosing probiotic products, so the safety and naturalness of the products need to be emphasized in promotion to reduce potential resistance.
                        </p>
                        <p style={styles.paragraph}>
                            Regarding channels, <strong style={{ color: '#c67e38' }}>online science</strong> and <strong style={{ color: '#c67e38' }}>social media</strong> are the main ways they get information about probiotics, which provides an effective channel for online marketing of probiotic products. The research also revealed the importance of educational and popularization activities, which are recommended to increase awareness and acceptance of the therapeutic potential of probiotics among university students.
                        </p>
                        <p style={styles.paragraph}>
                            Finally, the research found that publics have high expectations for the possible new effects of probiotics in the future, which provides a new direction for the innovation of probiotic products, especially the potential application in <strong style={{ color: '#c67e38' }}>the treatment of psychiatric disorders</strong> and so on. The results of this research provide valuable guidance for the starting point of our project design, and with the help of this questionnaire, we have popularized probiotics to the public group and enhanced their understanding of probiotics, which is an extremely important part of our exploration in human practice.
                        </p>
                    </Element>
                    <Element name="section2" style={styles.section}>
                        <h2 style={styles.heading}>Market Research</h2>
                        <br />
                        <h3 style={styles.partheading}>Market Research of Probiotics</h3>
                        <p style={styles.paragraph}>
                            At the beginning of the project, we conducted an in-depth analysis of the probiotics market.<br />
                            We found that the segment has been growing rapidly in recent years, especially in terms of improving intestinal health, enhancing immunity, and regulating the balance of the microbiota, and <strong style={{ color: '#c67e38' }}>probiotic drugs</strong> have gradually become the focus of attention. With increasing health awareness, more and more consumers have started to use probiotic products as part of their daily health management.
                        </p>
                        <p style={styles.paragraph}>
                            Notably, the market's focus on probiotic drugs has expanded from traditional gastrointestinal health to <strong style={{ color: '#c67e38' }}>online science</strong> and <strong style={{ color: '#c67e38' }}>other more complex health areas</strong>, including potential applications for neurological disorders.
                        </p>
                        <p style={styles.paragraph}>
                            We have learned through our research that the application of probiotics in neurological diseases is still innovative, but as research on the impact of gut microbes on neurological health progressively deepens, this direction shows great potential for application.
                        </p>
                        <p style={styles.paragraph}>
                            Market research also reveals that consumers have high expectations for <strong style={{ color: '#c67e38' }}>probiotic products that offer targeted health solutions</strong>, especially those that alleviate the symptoms of specific diseases. This opens up a whole new market opportunity for innovative programs such as probiotics for neurological disorders.
                        </p>
                        <p style={styles.paragraph}>
                            The technical barriers to probiotic products are relatively low, but consumers are more inclined to choose products that <strong style={{ color: '#c67e38' }}>have been rigorously scientifically validated and have clear efficacy</strong>, so the therapeutic probiotics we develop will have a clear competitive advantage in the market.
                        </p>
                        <p style={styles.paragraph}>
                            Through this market research, we have confirmed the potential application of probiotics in the treatment of neurological diseases. The broad prospect of this innovative field provides strong support for future research and development and opens up new opportunities for the application of probiotic drugs in the field of precision medicine. Meanwhile, our project design is more focused on how to use probiotics to treat related diseases.
                        </p>
                    </Element>
                    <Element name="section3" style={styles.section}>
                        <h2 style={styles.heading}>China gut festival</h2>
                        <br />
                        <h3 style={styles.partheading}>China gut festival": Directions for Intestinal Therapy in Parkinson's Disease</h3>
                        <p style={styles.paragraph}>
                            Prior to our involvement in the "China gut festival", our focus gradually shifted from the broader use of gut therapies to <strong style={{ color: '#c67e38' }}>a disease-specific orientation</strong>. Through in-depth discussions as well as literature research, we particularly focused on the strong link between Parkinson's disease and gut health.
                        </p>
                        <p style={styles.paragraph}>
                            During the course of the <strong style={{ color: '#c67e38' }}>"China gut festival"</strong>, experts detailed how the <strong style={{ color: '#c67e38' }}>gut-brain axis</strong> theory plays a role in the treatment of neurodegenerative diseases, particularly Parkinson's disease. This theory reveals the interplay between the gut microbiota and brain function, and that the state of gut health can have a direct impact on the balance of the nervous system.
                        </p>
                        <p style={styles.paragraph}>
                            We spoke in depth with experts in the field who mentioned gut therapy for Parkinson's disease. Studies have shown that many Parkinson's patients develop <strong style={{ color: '#c67e38' }}>bowel problems</strong>, such as constipation or intestinal dysbiosis, early in the course of the disease. These symptoms are often early signs of the disease, suggesting that the gut may play an important role in disease progression. Experts have suggested that by regulating the gut microbiome, it may be possible to slow down the disease process and even improve patients' quality of life.
                        </p>
                        <p style={styles.paragraph}>
                            We have further clarified the potential for future exploration of the gut pathway in the treatment of Parkinson's disease. This is not only complementary to traditional treatments, but also promises to be a completely new treatment modality.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}> Modulating gut flora and improving gut health</strong> may provide a non-invasive and sustainable treatment option for Parkinson's patients.
                        </p>
                        <p style={styles.paragraph}>
                            Finally, after careful consideration and discussions with multiple experts, we have determined the focus of our future work: <strong style={{ color: '#c67e38' }}>the direction of intestinal therapy for Parkinson's disease</strong>. This therapeutic direction will focus on improving the intestinal microecology of patients, exploring how to slow down the progression of Parkinson's disease and improve the quality of life of patients through probiotics, dietary interventions, and other means of regulating intestinal function.
                        </p>
                        <p style={styles.paragraph}>
                            This meeting not only helped us broaden our horizons, but also clarified our future research paths. Next, we will focus on intestinal intervention therapy for Parkinson's disease and maintain close collaboration with scholars and clinicians in related fields to promote research and practice in this direction.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp17.jpg'}
                            caption={''}
                            customWidth={'70%'}>
                        </ImageWithCaption>
                    </Element>
                    <Element name="section4" style={styles.section}>
                        <h2 style={styles.heading}>CCiC Conference</h2>
                        <br />
                        <h3 style={styles.partheading}>CCiC Conference: Inspiration from Prof. Xingyin Liu</h3>
                        <p style={styles.paragraph}>
                            The initial design of the project is to produce Parkinson's therapeutic drug <strong style={{ color: '#c67e38' }}>L-DOPA</strong> using engineered probiotics. During the CCiC conference, we had an in-depth discussion with Prof. <strong style={{ color: '#c67e38' }}>Xingyin Liu</strong> from Nanjing Medical University to ask about more effective means of Parkinson's treatment, and she introduced us to the two main causative mechanisms of Parkinson's disease:
                        </p>
                        <p style={styles.paragraph}>
                            1. An <strong style={{ color: '#c67e38' }}>immune response</strong> mediated by T cells in the leukocytes attacks neurons and causes irreversible damage;
                        </p>
                        <p style={styles.paragraph}>
                            2. Accumulation of <strong style={{ color: '#c67e38' }}>brain amyloid (such as α-Syn)</strong> produced in the gut in neurons also causes damage to neurons. We are aware of the limitations of existing L-DOPA treatment regimens in coping with the different courses of Parkinson's disease, especially after prolonged use, which may lead to side effects such as dyskinesia.
                        </p>
                        <p style={styles.paragraph}>
                            Based on these etiological explorations, we revisited the existing treatment design and decided to optimize the original regimen by adding a strain of Lactococcus lactis F44 that is capable of producing <strong style={{ color: '#c67e38' }}>5-hydroxytryptamine (5-HTP)</strong>.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp18.jpg'}
                            caption={''}
                            customWidth={'60%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            5-HTP is an important neurotransmitter precursor that can help regulate motor function in Parkinson's disease patients, especially inhibiting <strong style={{ color: '#c67e38' }}>dyskinesia</strong> triggered by L-DOPA. Studies have shown that 5-hydroxytryptophan has an important role in regulating motor function, so we believe that 5-HTP production by Lactococcus lactis F44 can significantly improve the motor symptoms of patients and alleviate the side effects of levodopa.
                        </p>
                        <p style={styles.paragraph}>
                            Parkinson's disease is closely linked to gut health. Imbalances in the gut microbiome may play an important role in the onset and progression of the disease. Therefore, our design aims not only to modulate neurotransmitters via 5-HTP, but also to improve the gut microbial environment via Lactococcus lactis, thereby reducing the negative impact of the gut-brain axis on the nervous system. By modulating the gut microbiome, neuronal damage is further slowed down.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp19.jpg'}
                            caption={''}
                            customWidth={'60%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            The brain amyloid mechanism may also be considered in the subsequent research and design of the participating teams to explore whether the abnormally aggregated amyloid proteins can be eliminated by monoclonal antibodies, etc., to further optimize the treatment options for Parkinson's disease.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp20.jpg'}
                            caption={''}
                            customWidth={'60%'}>
                        </ImageWithCaption>
                    </Element>
                    <Element name="section5" style={styles.section}>
                        <h2 style={styles.heading}>Dialogue with Experts</h2>
                        <br />
                        <h3 style={styles.partheading}>Dialogue with Prof. Huaping Dong: Relationship between Probiotic Therapy and Drug Therapy</h3>
                        <p style={styles.paragraph}>
                            In order to explore the possibility of engineered probiotics as drugs, we spoke with Prof. Huaping Dong of the School of Pharmacy in Shaoxing university.
                        </p>
                        <p style={styles.paragraph}>
                            In our discussion with Prof. Huaping Dong, he mentioned that drugs may be more direct and effective in situations where rapid relief of intestinal problems or dysbiosis is needed. However, in order to maintain long-term intestinal health and promote the restoration of beneficial flora, <strong style={{ color: '#c67e38' }}>the combination of probiotics and drugs</strong> is a more desirable option. Probiotics play an important role in health maintenance, but their role cannot be equated with that of drugs. With the growth of market demand and technological development, probiotics will be used in a wider range of applications. However, probiotics still need to be combined with drugs in the treatment of diseases in order to achieve the best results.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp21.jpg'}
                            caption={''}
                            customWidth={'60%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Engineered probiotics</strong> can combine the characteristics of both to further improve therapeutic efficacy, but <strong style={{ color: '#c67e38' }}>potential biosafety concerns</strong> still need to be addressed.
                        </p>
                    </Element>
                    <Element name="section6" style={styles.section}>
                        <h2 style={styles.heading}>Dialogues with Doctors</h2>
                        <br />
                        <h3 style={styles.partheading}>Interview with Dr. Lei Chen: An Insight into the Clinical Diagnosis and Treatment of Parkinson's Disease</h3>
                        <p style={styles.paragraph}>
                            After speaking with the experts, we wanted to explore the program from the doctor's perspective as well as the patient's perspective to improve the Spidey Microbe.
                        </p>
                        <p style={styles.paragraph}>
                            <strong style={{ color: '#c67e38' }}>Director Chen Lei</strong>, as the head of the <strong style={{ color: '#c67e38' }}>Tianjin Huanhu Hospital Center</strong>, China's one-stop Parkinson's Disease Center and China's Parkinson's Disease Training Center, has been working in the field of Parkinson's Disease for many years, and has a wealth of experience and unique insights. So we contacted Director Chen Lei and had an in-depth conversation, which greatly remedied our shortcomings in hospital-patient communication and helped us to think more deeply from the level of the application end of treatment.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp22.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            Director Chen gave us a detailed overview of the <strong style={{ color: '#c67e38' }}>current clinical process for diagnosing Parkinson's disease</strong>. She pointed out that the existing means of assessment can lead to a diagnostic accuracy of more than 92.5%, which is a very high probability in the diagnosis of various diseases. This high level of accuracy is due to the comprehensive use of a variety of tools such as history taking, physical examination and imaging.
                        </p>
                        <p style={styles.paragraph}>
                            In terms of treatment means, Director Chen mentioned the <strong style={{ color: '#c67e38' }}>monoclonal antibody treatment</strong> that has been applied on a large scale abroad and is now also entering phase III clinical trials in China. As for most patients, the preliminary stage will be targeted to give drugs <strong style={{ color: '#c67e38' }}>according to different situations</strong>. The treatment process of Parkinson's disease usually lasts for more than ten years, which requires stable communication and cooperation between doctors and patients to ensure the continuity and effectiveness of treatment.
                        </p>
                        <p style={styles.paragraph}>
                            Of particular note, Director Chen talked about <strong style={{ color: '#c67e38' }}>constipation</strong>, a prominent intestinal symptom of Parkinson's disease. She noted that patients may experience severe constipation decades before the onset of the disease, a symptom for which doctors usually recommend diet. This coincides with our team's research direction of treating Parkinson's through gut flora, further validating the potential value of our study. At the same time, we also pondered whether we could add a strain of engineered bacteria <strong style={{ color: '#c67e38' }}>producing short-chain fatty acids</strong> to the existing Spidey Microbe flora to further reduce intestinal discomfort.
                        </p>
                        <p style={styles.paragraph}>
                            Director Chen also shared the <strong style={{ color: '#c67e38' }}>emotional changes</strong> of patients during the treatment process. Usually during the initial diagnosis stage, patients experience significant mood swings due to a lack of knowledge related to Parkinson's. However, during the diagnosis and treatment process, the professional help of doctors and the good effect of drugs can gradually alleviate these emotional problems. This reveals that we need to pay attention to the patient's experience during the R&D process, and provide drugs with good experience and significant therapeutic effects as much as possible.
                        </p>
                        <p style={styles.paragraph}>
                            After the interview, we further inquired about the intestinal symptoms of Parkinson's disease, and found that in addition to the intestinal dysfunction triggered by the autonomic nervous system, commonly used drugs, such as levodopa or dopamine agonists, can also cause anorexia, nausea, vomiting, and other side effects, and therefore the release of these drugs needs to be more accurately controlled, which suggests that we need to take into account the release of drugs and <strong style={{ color: '#c67e38' }}>their control in the construction of the mixed bacterial system</strong>. Meanwhile, the engineered probiotics need to be removed in the human body if necessary, and we conducted the design of the <strong style={{ color: '#c67e38' }}>safety components</strong> and <strong style={{ color: '#c67e38' }}>related experiments</strong> in the wet experiment section.
                        </p>
                    </Element>
                    <Element name="section7" style={styles.section}>
                        <h2 style={styles.heading}>Dialogue with Patients</h2>
                        <br />
                        <h3 style={styles.partheading}>Communication and Feedback with Patients with Parkinson's Disease</h3>
                        <p style={styles.paragraph}>
                            After speaking with Director Lei Chen, we wanted to further explore the needs of our patients. We collected many valuable comments and this feedback provided important guidance for program improvement.
                        </p>
                        <p style={styles.paragraph}>
                            Parkinson's disease has a profound impact on patients' quality of life, especially in terms of mobility, fine motor control, and emotional management. Based on the feedback from patients, we are not only focusing on the treatment of the disease, but also focusing more on how we can provide substantial help and support to patients by <strong style={{ color: '#c67e38' }}>improving their quality of life</strong> in a comprehensive way through technology.
                        </p>
                        <p style={styles.paragraph}>
                            Patients also mentioned that the existing treatment programs are effective in the short term, but as time goes by, the effect of the medication gradually diminishes and the side effects become more obvious. In this regard, we are aware of the limitations of the treatments, therefore, one of the focuses of the project is to <strong style={{ color: '#c67e38' }}>optimize the durability and efficacy of the existing treatments</strong>, while minimizing the side effects and making the treatments more stable. In the case of Spidey Microbe, which can be colonized on the intestines, the durability can be further prolonged, and we are considering the novel delivery modes of the probiotic therapies as well.
                        </p>
                        <p style={styles.paragraph}>
                            Some patients specifically mentioned that psychological support and mental health management are equally important, which inspired us to explore how we can help patients improve their emotional and psychological state through technology and provide integrated, holistic support. For probiotic medications, we are considering whether they can be made in forms such as <strong style={{ color: '#c67e38' }}>yogurt</strong> to further <strong style={{ color: '#c67e38' }}>enhance the experience</strong> of Parkinson's patients taking their medications and <strong style={{ color: '#c67e38' }}>reduce the psychological stress</strong> associated with their treatment.
                        </p>
                        <p style={styles.paragraph}>
                            Many patients are interested in new technologies (e.g. gene therapy, cell therapy), but are also concerned about their <strong style={{ color: '#c67e38' }}>safety and long-term effects</strong>. In our project, we pay more attention to the safety and long-term research of new therapies to ensure that future treatment options are not only effective, but also psychologically reassuring to patients and provide real benefits in long-term use. Therefore, we have conducted in-depth discussions on the safety of probiotics for our project, and hope to optimize it further to reduce the public's concerns about it.
                        </p>
                        <p style={styles.paragraph}>
                            Through these exchanges, we have gained a deeper understanding of the actual needs of Parkinson's patients and ensured that the program is not only dedicated to the treatment of the disease, but also can bring positive and sustainable improvements and breakthroughs in patients' lives.
                        </p>
                    </Element>
                    <Element name="section8" style={styles.section}>
                        <h2 style={styles.heading}>International Symposia and Biological White Papers</h2>
                        <br />
                        <h3 style={styles.partheading}>Participation in International Symposia: Advancing the Research and Application of Escherichia Coli Nissle 1917</h3>
                        <p style={styles.paragraph}>
                            In the dialogue between the therapeutic field and the patient field, we found that the biosafety of the engineered bacterium was a common concern. As the iGEM team, we were honored to participate in <strong style={{ color: '#c67e38' }}>The First “Escherichia coli Nissle 1917 Application and Safety International Symposium”</strong>, which was jointly hosted by the Department of Medicine of Peking University and the School of Biological and Pharmaceutical Engineering of Nanjing University of Technology. The symposium brought together scientists, research teams, and industry experts with in-depth research and practical applications of <strong style={{ color: '#c67e38' }}>Escherichia coli Nissle 1917 (EcN)</strong> from all over the world, aiming at discussing the latest research progress of EcN strains, challenges in practical applications, and future development directions.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp23.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                            The meeting focused on the core topics of <strong style={{ color: '#c67e38' }}>EcN strain characteristics, protein expression, related modification and application prospects</strong>. In this meeting, our team exchanged and shared with several experts in the field <strong style={{ color: '#c67e38' }}>about the safety of probiotics and their prospects in therapeutic applications</strong>, and actively discussed the potential of EcN strains in <strong style={{ color: '#c67e38' }}>genetic modification, metabolic engineering, and interactions with the host</strong>.
                        </p>
                        <p style={styles.paragraph}>
                            For engineered probiotics, we need to remain <strong style={{ color: '#c67e38' }}>positive and at the same time cautious</strong>, analyzing their <strong style={{ color: '#c67e38' }}>safety</strong> and considering the <strong style={{ color: '#c67e38' }}>potential impact</strong> that probiotic preparations may have when performing therapeutic procedures. For new metabolic pathways, the safety of potential by-products needs to be ensured, and biosafety preparations need to be used for the encapsulation of probiotics. For the flora we are going to construct, it is even more necessary to further analyze the stability and robustness of the mixed-bacteria system.
                        </p>
                        <p style={styles.paragraph}>
                            In addition, as part of the symposium, we jointly participated in the writing of <strong style={{ color: '#c67e38' }}>a white paper on EcN strains</strong>.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <embed
                            src="https://static.igem.wiki/teams/5376/humanpractices/ecn-en.pdf"
                            type="application/pdf"
                            width="75%"
                            height="800px"
                        />
          </div>
                        
                        <p style={styles.paragraph}>
                            Through the release of this white paper, we hope to provide a more systematic guide for global researchers, promote the widespread use of EcN strains in scientific research and clinical applications, and further facilitate the development of engineered probiotic drugs.
                        </p>
                    </Element>
                    <Element name="section9" style={styles.section}>
                        <h2 style={styles.heading}>“ProMetab” Database</h2>
                        <br />
                        <h3 style={styles.partheading}>Probiotic Metabolic Pathway Database: Providing a Solid Foundation for Research</h3>
                        <p style={styles.paragraph}>
                            In the construction of the mixed-bacteria system, <strong style={{ color: '#c67e38' }}>what strains to select</strong> is a very important issue, in order to provide a reliable method as well as help to other teams as well as researchers, we collected and organized the relevant data based on existing probiotic databases, and constructed <strong style={{ color: '#c67e38' }}>a specialized database of intestinal probiotics</strong>. On this basis, we further constructed an interactions model between probiotics based on metabolic networks, and comprehensively analyzed the metabolic interactions between different probiotics.
                        </p>
                        <p style={styles.paragraph}>
                            Meanwhile, for the mixed-bacteria treatment of diseases, we further added the <strong style={{ color: '#c67e38' }}>disease data</strong>, hoping that it could help for the subsequent research.
                        </p>
                        <p style={styles.paragraph}>
                        In order to verify the effectiveness of this software and database, we analyzed these metabolic networks in depth in wet experiments, and <strong style={{ color: '#c67e38' }}>successfully screened out</strong> those probiotic groups with better therapeutic effects and showed positive interactions in metabolic interactions.

                        </p>
                        <p style={styles.paragraph}>
                        For the logic of using the software and the database, we invited people from different majors on the campus of Tianjin University to <strong style={{ color: '#c67e38' }}>access, download, query and use</strong> the database and the software in the hope of further optimizing the usability of the software of the database.
                        </p>
                        <p style={styles.paragraph}>
                        Our instructors, <strong style={{ color: '#c67e38' }}>Mr. Qiao Jianjun</strong> as well as <strong style={{ color: '#c67e38' }}>Mr. Wu Shengbo</strong>, provided guidance throughout. They helped us establish a rigorous scientific mindset in the study of probiotic metabolic pathways. Through their professional guidance, we ensured that the data in the database were highly scientific and systematic, and covered multiple aspects of probiotic metabolic pathways. Our discussions with Mr. Shengbo Wu not only deepened our understanding of probiotic metabolism, but also enabled the database to more comprehensively support research needs in different dimensions.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp24.jpg'}
                            caption={''}
                            customWidth={'60%'}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        The construction of this database provides a basic framework of metabolic patterns, which provides new ideas for screening probiotics with better therapeutic effects, and will further <strong style={{ color: '#c67e38' }}>assist</strong> the development of probiotic flora drinks and drugs.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp25.png'}
                            caption={''}
                            customWidth={'50%'}>
                        </ImageWithCaption>
                    </Element>
                    <Element name="section10" style={styles.section}>
                        <h2 style={styles.heading}>Education</h2>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp1.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <h3 style={styles.partheading}>Explanation of Science Popularization</h3>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp2-1.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We organized a scientific talk on <strong style={{ color: '#c67e38' }}>“Gut Health and Probiotics”</strong>. 
                        Through well-designed exhibition boards, we explained in detail the
                         biological roles and metabolic pathways of probiotics, and introduced
                          how to maintain intestinal health through diet and lifestyle in an 
                          easy-to-understand manner. We actively interacted with the audience and
                           answered their questions about probiotics, further promoting the popularization
                            of probiotic knowledge.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp3.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <h3 style={styles.partheading}>Probiotic knowledge quiz</h3>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp4.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We also conducted a <strong style={{ color: '#c67e38' }}>probiotic knowledge quiz with prizes</strong>, in which participants
                         tested their knowledge base by answering questions on the health benefits of
                          probiotics, metabolites and their effects. This session effectively increased
                           public participation and stimulated more people's interest in probiotics and
                            learning by setting up a reward mechanism.
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                            <QuizQuestion></QuizQuestion>
                        </div>
                        <h3 style={styles.partheading}>Microscopic Observation</h3>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp5.jpg'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We brought <strong style={{ color: '#c67e38' }}>electron microscopes</strong> and prepared <strong style={{ color: '#c67e38' }}>hundreds of microscopical
                         sections</strong> for observation, allowing visitors to explore the world of
                          microorganisms in a fun way. A lot of children are participated in
                           this activity and we taught the children how to use the microscope.
                            This process raises the public's awareness of microorganisms and
                             allows them to learn more about microorganisms through microscopic
                              observation.
                        </p>
                        <h3 style={styles.partheading}>Microbial Painting</h3>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp6.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        We also brought along <strong style={{ color: '#c67e38' }}>drawings of microorganisms</strong> to 
                        introduce visitors to fluorescent proteins, colored
                         metabolic secretions, and other magical “drawing
                          gadgets” that show the infinite possibilities of
                           the world of microorganisms.
                        </p>
                        <h3 style={styles.partheading}>Hands-on Cooperation</h3>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp7.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        The most widely spread probiotic food is <strong style={{ color: '#c67e38' }}>yogurt</strong>, and we designed a
                        <strong style={{ color: '#c67e38' }}>homemade yogurt experience</strong>. Many visitors were attracted to stop by
                          and taste and make yogurt themselves. With our assistance, visitors
                           experienced the joy of making yogurt with their own hands, tasted
                            the deliciousness of yogurt, and learned about the application and
                             benefits of probiotic flora.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp8.png'}
                            caption={''}>
                        </ImageWithCaption>
                        <p style={styles.paragraph}>
                        Finally, visitors <strong style={{ color: '#c67e38' }}>drew spring</strong> marks on the kites to express their
                         understanding of the microbial world in nature, harboring deep blessings
                          for our team and great expectations for the future development of
                           synthetic biology.
                        </p>
                        <ImageWithCaption
                            src={'https://static.igem.wiki/teams/5376/humanpractices/hp9.png'}
                            caption={''}>
                        </ImageWithCaption>
                    </Element>
                </main>
            </div>
        </main>

    )
        ;
}




