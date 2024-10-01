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
    height: '240px',
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

export function Implement(): JSX.Element {
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
      <div style={{ overflow: 'hidden', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', padding: '20px', position: 'relative' }}>
                <img
                    src="https://static.igem.wiki/teams/5376/logo1-2.png"
                    alt="Left Image"
                    style={{ maxWidth: '760px', height: 'auto', zIndex: 1 }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/implement/implementlogo.png"
                    alt="TITLE"
                    style={{ width: 'auto', height: '220px', position: 'absolute', top: '45%', zIndex: 3 }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse3.png"
                    alt="Left Image"
                    style={{ position: 'absolute', maxWidth: '250px', left: '150px', top: '270px', height: 'auto' }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/viruse4.png"
                    alt="Left Image"
                    style={{ position: 'absolute', maxWidth: '220px', right: '150px', top: '150px', height: 'auto' }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/bl2-1.png"
                    alt="Left Image"
                    style={{
                        position: 'absolute', width: '200%',
                        right: `${-scrollY * 1.5 - 20}px`, top: '530px', height: 'auto', transform: 'rotate(0deg)', zIndex: 0
                    }}
                />
                <img
                    src="https://static.igem.wiki/teams/5376/bl1.png"
                    alt="Left Image"
                    style={{
                        position: 'absolute', width: '150%',
                        right: `${-scrollY * 1.5}px`, top: '500px', height: 'auto', transform: 'rotate(0deg)', zIndex: 0
                    }}
                />

            </div>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Microbiome Construction', 'Microbial Community Therapy', 'Microbial Community Analysis'].map((item, index) => (
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
        <BackToTopButton />
        <main style={styles.content}>
          <Element name="section1" style={styles.section}>
            <h2 style={styles.heading}>Microbiome Construction</h2>
            <p style={styles.paragraph}>
              Spidey Microbe, by constructing autonomous regulatory mechanisms for
              <strong style={{ color: '#c67e38' }}>cooperation and competition</strong> within microbial communities, can achieve
              the pause, start, transition, and termination of the system. This high
              degree of <strong style={{ color: '#c67e38' }}>controllability</strong> has broad application prospects in various fields.
            </p>
            <p style={styles.paragraph}>
              Firstly, in terms of construction, the microbial community of
              Spidey Microbe provides a novel and effective approach to
              microbial community construction, modularizing the ECN
              module. By surface display, it can connect with any
              microorganism that expresses streptavidin, achieving
              the aggregation of probiotics. The "spider silk"
              connection constructs a vast "spider web" and<strong style={{ color: '#c67e38' }}>can be
                extended to the construction of other wet lab
                microbial communities</strong>.
            </p>
            <p style={styles.paragraph}>
              Secondly, in terms of regulation, Spidey Microbe has very
              <strong style={{ color: '#c67e38' }}> strong controllability and safety</strong>. By constructing
              interactions between different types of microorganisms
              and using a self-assembly system, dynamic regulation
              of the microbial community is achieved. During the
              process of the system, the adhesion system adopts
              controllable induced expression, which can regulate
              the expression of therapeutic factors at any time.
              At the end of the system, by adding or stopping the supply of inducers, it is possible to kill the microbial community or make the microbial community lose adhesion, making the global regulation of the pathway more flexible while ensuring the safety of the system.
            </p>
          </Element>
          <Element name="section2" style={styles.section}>
            <h2 style={styles.heading}>Microbial Community Therapy</h2>
            < p style={styles.paragraph}>
              As <strong style={{ color: '#c67e38' }}>a highly safe autonomous regulatory treatment system</strong>, Spidey Microbe has tremendous potential and various possibilities in disease treatment.
            </p>
            
            <h3 style={styles.partheading}>Diverse Dosage Forms</h3>
            <p style={styles.paragraph}>
              <strong style={{ color: '#c67e38' }}>Drug delivery systems (DDS)</strong> achieve maximum therapeutic effect and minimum
              side effects (adverse reactions) by delivering drugs to the necessary site
              in the necessary amount at the necessary time. Spidey Microbe can be
              made into <strong style={{ color: '#c67e38' }}>various dosage forms of DDS</strong> to maximize therapeutic effect and safety.
            </p>
            <ImageWithCaption
              src={'https://static.igem.wiki/teams/5376/implement/implement1.png'}
              caption={'Figure 1 Existing Applications of Drug Delivery Systems'}
              customWidth={'90%'}>
            </ImageWithCaption>
            <br />
            <h3 style={{ ...styles.heading, fontSize: '28px' }}>Controlled Release Formulations</h3>
            <p style={styles.paragraph}>
              We can construct microbial communities that control gene expression to achieve <strong style={{ color: '#c67e38' }}>sustained
                or controlled drug release</strong>. For example, <strong style={{ color: '#c67e38' }}>inducible promoters</strong> are used in Spidey Microbe
              to control the expression of therapeutic genes, allowing the production and release of
              drugs to be regulated according to environmental signals (such as pH, temperature, or
              chemical inducers).
            </p>
            <p style={styles.paragraph}>
              Controlled release formulations are usually administered orally,
              made into tablets, capsules, granules, solutions, etc.,
              allowing patients to self-medicate, suitable for <strong style={{ color: '#c67e38' }}>long-term
                treatment</strong>, and <strong style={{ color: '#c67e38' }}>improving patient compliance and treatment
                  convenience</strong>.
            </p>
            <ImageWithCaption
              src={'https://static.igem.wiki/teams/5376/implement/implement2.jpg'}
              caption={'Figure 2 The Most Common Tablet and Capsule Formulations in Oral Administration'}
              customWidth={'80%'}>
            </ImageWithCaption>
            <br />
            <h3 style={{ ...styles.heading, fontSize: '28px' }}>Mucosal Administration</h3>

            <p style={styles.paragraph}>
              On the basis of the original enhanced intestinal mucosal
              colonization ability of the adhesion module, Spidey
              Microbe can further optimize the adhesion mechanism
              between the microbial community and the mucosal
              membrane, and further develop a mucosal administration
              system to improve the <strong style={{ color: '#c67e38' }}>retention time</strong> and
              <strong style={{ color: '#c67e38' }}>bioavailability of drugs</strong> on the mucosal membrane.
            </p>
            <br />
            <h3 style={{ ...styles.heading, fontSize: '28px' }}>Yogurt</h3>
            <p style={styles.paragraph}>
              In the process of disease treatment, psychological support and
              mental health management are equally important. This inspires
              us to explore how to help patients <strong style={{ color: '#c67e38' }}>improve their mood and
                psychological state</strong> through technological means, providing
              comprehensive and all-round support. For probiotic drugs,
              we can create forms such as yogurt to further<strong style={{ color: '#c67e38' }}> enhance the
                patient’s medication experience and reduce the
                psychological stress</strong> brought by their treatment.
            </p>
            <ImageWithCaption
              src={'https://static.igem.wiki/teams/5376/implement/implement3.jpeg'}
              caption={'Figure 3 Yogurt may serve as an innovation drug delivery form'}
              customWidth={'50%'}>
            </ImageWithCaption>
            <br />
            <h3 style={styles.partheading}>Various Therapeutic Diseases</h3>
            <p style={styles.paragraph}>
              Spidey Microbe can not only be used as a new method for <strong style={{ color: '#c67e38' }}>treating Parkinson's
                disease</strong> but can also be extended to <strong style={{ color: '#c67e38' }}>the treatment of other diseases</strong>.
            </p>
            <ImageWithCaption
              src={'https://static.igem.wiki/teams/5376/implement/implement4.png'}
              caption={'Figure 4 Various Diseases That Can Be Treated by Spidey Microbe Using Gut Microbiota'}
              customWidth={'100%'}>
            </ImageWithCaption>
            <br />
            <h3 style={{ ...styles.heading, fontSize: '28px' }}>Gastrointestinal Inflammatory Diseases</h3>
            <p style={styles.paragraph}>
              We can use the microbial community regulation of Spidey
              Microbe to enhance butyrate production, which helps
              improve <strong style={{ color: '#c67e38' }}>intestinal mucosal permeability</strong> and <strong style={{ color: '#c67e38' }}>enhance
                the protective effect of the intestinal mucosa</strong>,
              reducing inflammatory responses and treating
              inflammatory bowel diseases (IBD) and other diseases.
            </p>
            <br />
            <h3 style={{ ...styles.heading, fontSize: '28px' }}> Neurological Diseases</h3>
            <p style={styles.paragraph}>
              In the treatment of depression, by regulating the metabolic products
              of gut microbiota, such as levodopa, and through the
              hypothalamic-pituitary-adrenal axis, it can affect mood and behavior,
              thereby improving depressive
              symptoms and greatly <strong style={{ color: '#c67e38' }}>reducing drug side effects and adverse reactions</strong>.
            </p>
            <p style={styles.paragraph}>
              In addition, it can also be extended to the treatment of Alzheimer's disease, autism spectrum disorder, amyotrophic lateral sclerosis, chronic fatigue syndrome, and other diseases.
            </p>
            <h3 style={{ ...styles.heading, fontSize: '28px' }}> Metabolic Diseases</h3>
            <p style={styles.paragraph}>
              Spidey Microbe can also be extended to the treatment of metabolic
              diseases such as obesity, type 2 diabetes, and liver disease. By
              regulating the balance of gut microbiota and increasing microorganisms
              that can utilize specific substrates in the gut to produce energy,
              it can reduce the accumulation of host fat and improve the therapeutic
              effect of obesity. It can also further optimize the mechanism, transform
              new microorganisms, and stably output metabolites that can regulate blood
              sugar, such as GLP-1 analogs, providing new ideas for the treatment of
              type 2 diabetes. By regulating the balance of gut microbiota, Spidey
              Microbe may help <strong style={{ color: '#c67e38' }}>improve the metabolic
                status of the liver</strong> and reduce the occurrence and development of fatty liver.
            </p>
            <br />
            <h3 style={{ ...styles.heading, fontSize: '28px' }}> Chronic Kidney Disease</h3>
            <p style={styles.paragraph}>
              Patients with chronic kidney disease (CKD) often have a disorder of the gut microbiota, which can accelerate the progression of kidney disease. Spidey Microbe, by regulating the composition of the gut microbiota, can help slow down the progression of CKD. Uremic patients accumulate various toxins in their bodies, such as indoxyl sulfate (IS), p-cresyl sulfate (PCS), etc. Spidey Microbe helps reduce the levels of these uremic toxins and alleviate the burden on the kidneys.
            </p>
          </Element>
          <Element name="section3" style={styles.section}>
            <h2 style={styles.heading}>Microbial Community Analysis</h2>
            <p style={styles.paragraph}>
              As a database of gut microbiome metabolites, ProMetab has an
              important contribution to <strong style={{ color: '#c67e38' }}>subsequent research modeling and
                prediction</strong>.
            </p>
            <p style={styles.paragraph}>
              ProMetab plays an important role in the cutting-edge research
              of<strong style={{ color: '#c67e38' }}> microbiology</strong> and <strong style={{ color: '#c67e38' }}>synthetic biology</strong>. ProMetab ca
              be used for large-scale mining and pattern recognition
              of microbiome data. By using machine learning and data
              mining techniques, it can discover <strong style={{ color: '#c67e38' }}>potential patterns
                and associations from complex microbiome data</strong>, providing
              new perspectives and methods for microbiome research.
              In synthetic biology, the data of ProMetab can optimize
              synthetic biology pathways and <strong style={{ color: '#c67e38' }}>improve the yield of
                target compounds</strong> by analyzing microbial community
              metabolites. For example, by using a machine
              learning framework to optimize the promoter
              combinations of evolutionary pathways, it

              can improve the efficiency of synthetic
              biology systems.
            </p>
          </Element>
        </main>
      </div>
    </main>
  );
}




