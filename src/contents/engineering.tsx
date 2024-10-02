import { Link, Element } from 'react-scroll';
import ImageWithCaption from "../components/ImageWithCaption.tsx";
import { useEffect, useState } from 'react';
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
      height: '330px',
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

export function Engineering(): JSX.Element {
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
               src="https://static.igem.wiki/teams/5376/engineering/engineeringlogo.png"
               alt="TITLE"
               style={{ width: 'auto', height: '250px', position: 'absolute', top: '45%', zIndex: 3 }}
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
                  {['Overview', 'Adhension Module', 'Therapeutic Modules', 'Fluorescent characterization of microbiota', 'Quorum Sensing Module'].map((item, index) => (
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
                     We have constructed adhesion modules, therapeutic modules, quorum sensing modules, and microbial characterization components based on our design in Escherichia coli Nissle1917 and Lactococcus lactis F44. Following the design-build-test-learn cycle, we optimized and analyzed each module rigorously.
                  </p>
               </Element>
               <Element name="section2" style={styles.section}>
                  <h2 style={styles.heading}>Adhension Module</h2>
                  <br />
                  <h3 style={styles.partheading}>Expression of Streptavidin</h3>
                  <br />
                  <h4 style={{ ...styles.partheading, fontSize: '28px' }}>cycle1</h4>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     Based on our design, we aim to express a fusion protein of streptavidin (SA) and adhesive protein binding protein (MBD93) in EcN (Design Page). To verify whether SA and MBD93 can be expressed in EcN, we plan to use a strong constitutive promoter J23119 for expression.
                  </p>
                  <br />
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng1.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}> Build</strong>
                  </p>
                  <br />
                  <p style={styles.paragraph}>
                     The lab already possessed the pETDuet-1 plasmid with a T7 (lacO) promoter and dual gene expression frames. To create a constitutive expression vector of SA and MBD93, we first replaced the T7 (lacO) promoter with the J23119 promoter via PCR, and assembled it into the circular plasmid, pETDuet-1-J23119, through seamless cloning .
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng2.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We obtained plasmids with replaced promoters in the transformed E. coli.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng3.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     Then, we constructed expression frames for SA and MBD93 in the pETDuet-1-J23119 plasmid through seamless cloning, and constructed pETDuet-1-J23119-SA and pETDuet-1-J23119-MBD93, hoping to verify their expression through SDS-PAGE.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng4.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We chemically transformed the constructed pETDuet-1-J23119-SA and pETDuet-1-J23119-MBD93 into EcN, and screened the correct transformants by coating them on carbenicillin resistant medium.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng5.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We transferred the correct transformants into 50ml LB medium, cultured them for 48 hours, then extracted their proteins, and performed SDS-PAGE. The SA protein band should be at 18.9kDa, and the MBD93 protein band should be at 9.8kDa.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng6.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     In the gel image, a clear and specific band can be seen around 10kDa, but no obvious band is observed around 18.9kDa. It’s speculated that EcN can express MBD93 well, but it is difficult for it to express SA.
                  </p>
                  <p style={styles.paragraph}>
                     After reviewing the literature, we speculated that due to its aggregation inside the cell,  expression of SA using a strong promoter may be toxic to cells. We planned to replace the promoter with an inducible promoter and construct an RFP tag at the C-terminus of SA for easier detection of its expression.
                  </p>
                  <h3 style={{ ...styles.partheading, fontSize: '28px' }}>cycle2</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Deign</strong>
                  </p>
                  <p style={styles.paragraph}>
                     According to cycle 1, we replaced the constitutive J23119 promoter with the inducible T7 promoter.We added an RFP tag to the C-terminus of SA to construct the plasmid pETDuet-1-T7-SA-RFP for observation.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng7.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     Due to the lack of T7 RNA polymerase in the EcN strain, we were unable to utilize the T7 promoter. Therefore, we planned to construct a plasmid containing T7 RNA polymerase and co-transform EcN with pETDuet-1-T7-SA-RFP.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng8.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     In order to make the newly constructed plasmid with T7RNA polymerase compatible with the pETDuet-1-T7-SA-RFP plasmid, we found pJUMP27-1A (sfGFP) with a replication origin of PSC101 and resistance to kanamycin in iGEM 2024 Distribution. This plasmid skeleton is compatible with the pETDuet-1 plasmid skeleton with a replication origin of ori and resistance to ampicillin. We obtained the T7RNA polymerase expression frame from the BL21 (DE3) strain and constructed Biobirck enzyme cleavage sites on both sides. We used EcoRI and SpeI to simultaneously cleave pJUMP27-1A (sfGFP) and T7RNA polymerase expression frame fragments, and connected them using T4 polymerase. In the end, we successfully obtained the pJUMP27-1A (DE3) plasmid expressing T7RNA polymerase.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng9.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We used the pETDuet-1 plasmid and first constructed pETDuet-1-T7-SA using seamless cloning. Then, we continued to construct RFP with linker fragments on the pETDuet-1-T7-SA plasmid, thus successfully constructing pETDuet-1-T7-SA-RFP.
                  </p>
                  <p style={styles.paragraph}>
                     We transformed the constructed pJUMP27-1A (DE3) plasmid and pETDuet-1-T7-SA-RFP plasmid into EcN and coated them on kanamycin and carbenicillin resistant medium for screening, obtaining the correctly transformed strains. Subsequently, we transformed the pETDuet-1-T7-SA-RFP plasmid into BL21 (DE3) strain and screened it on carbenicillin resistant medium, obtaining the correctly transformed strain as well.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng10.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We transferred the two strains into a test tube containing 20 ml LB, culturing them for 20 hours, and measured their OD and fluorescence values every 2 hours (excitation wavelength 550nm, absorption wavelength 588nm). For detailed results, please visit the Results page.
                  </p>
                  <p style={styles.paragraph}>
                     The results showed that the fluorescence values of the EcN strain expressing SA-RFP were very low both before and after induction, while the BL21 (DE3) strain expressing SA-RFP showed weak fluorescence after induction.
                  </p>
                  <p style={styles.paragraph}>
                     <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     The SA-RFP protein may be difficult to express in EcN or exhibit structural abnormalities. According to literature analysis, SA is prone to aggregation and has poor water solubility, which may cause certain cytotoxicity. At the same time, it is also easily hydrolyzed by proteases inside the cell. SA with RFP tags may be hydrolyzed by proteases inside the cell, resulting in lower fluorescence values.
                  </p>
                  <p style={styles.paragraph}>
                     Researchers have formed core streptavidin (cSA) by truncating SA, which can greatly improve its solubility and reduce its cohesiveness. We planned to adopt the same strategy.
                  </p>
                  <h3 style={{ ...styles.partheading, fontSize: '28px' }}>cycle3</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     Based on the results of cycle2, we discovered that SA-RFP hardly produced fluorescence in EcN. After investigation, we planned to truncate SA and break it at positions 10-12 at the N-terminus and 19-21 at the C-terminus. The full-length SA would be reduced from 159 amino acids to 127 amino acids, and the pETDuet-1-T7 cSA and pETDuet-1-T7 cSA RFP plasmids would be redesigned and constructed.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng11.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We designed primers to truncate the full-length SA and constructed the pETDuet-1-T7-CSA plasmid through seamless cloning. Subsequently, based on this plasmid, we further seamlessly cloned and constructed the pETDuet-1-T7-CSA RFP plasmid.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We transformed the constructed pJUMP27-1A (DE3) plasmid and pETDuet-1-T7-cSA RFP plasmid into EcN and coated them on kanamycin and carbenicillin resistant medium for screening, obtaining the correctly transformed strains. Subsequently, we transformed the pETDuet-1-T7-cSA RFP plasmid into BL21 (DE3) strain and screened it on carbenicillin resistant medium, obtaining the correctly transformed strain.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng12.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We will culture the obtained strains in a test tube containing 20 ml of LB for 12 hours, measuring their OD and fluorescence values every 2 hours. For detailed results, please visit the Results page.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng13.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     The analysis results showed that the cSA-RFP protein was expressed normally in both EcN and BL21 (DE3). We also found that constructing T7 RNA polymerase on the pJUMP27-1A (sfGFP) plasmid had no significant difference in effect compared to integration into the genome.
                  </p>
                  <h3 style={styles.partheading}>Verification of the binding between EcN and mucin</h3>
                  <h3 style={{ ...styles.partheading, fontSize: '28px' }}>Cycle1</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We designed a new plasmid that places MBD93 at the N-terminus, creating the plasmids pETDuet-1-T7-MBD93-SA and pETDuet-1-T7-MBD93-cSA.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng16.png'}
                     caption={''}
                    >
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We first constructed the pETDuet-1-T7-MBD93 plasmid based on the pETDuet-1 vector. Then, we inserted the SA and cSA genes at the C-terminus of MBD93 using seamless cloning.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                  The constructed pETDuet-1-T7-MBD93-SA plasmid and pETDuet-1-T7-MBD93-cSA plasmid were transformed into EcN with pJUMP27-1A(DE3-J23111-RFP) plasmid, and coated on kanamycin and carbenicillin resistant medium for screening. The strain that got the correct transformation.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng17.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We inoculated the correctly transformed strains into a 30 ml LB culture in a flask and incubated them for 24 hours. Then, we performed biotinylation and sampled the mixture into a Mucin-coated 96-well plate for measurement. For detailed results, please visit the Results page.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     Analysis of the results showed that MBD93-SA exhibited increased adhesion to Mucin after biotinylation and also improved upon the addition of an inducer. However, the overall adhesion value decreased at OD=1. Given that the N-terminus and C-terminus of fusion proteins significantly impact protein structure, we attempted to fuse full-length SA and truncated cSA at the N-terminus of MBD93.
                  </p>
                  <h3 style={{ ...styles.partheading, fontSize: '28px' }}>Cycle2</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We designed two plasmids by fusing full-length SA and truncated cSA to the N-terminus of MBD93, resulting in the plasmids pETDuet-1-T7-SA-MBD93 and pETDuet-1-T7-cSA-MBD93.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng14.png'}
                     caption={''}
                     >
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We constructed the MBD93 gene at the C-terminus of the pETDuet-1-T7-SA and pETDuet-1-T7-cSA plasmids using seamless cloning.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     To facilitate measurement, we constructed an RFP expression frame on the pJUMP27-1A(DE3) plasmid, resulting in pJUMP27-1A(DE3-J23111-RFP). For detailed construction processes, please visit the Engineering page. We then transformed the constructed pETDuet-1-T7-SA-MBD93 and pETDuet-1-T7-cSA-MBD93 plasmids into EcN, plating them on kanamycin and carbenicillin-resistant media to select for correctly transformed strains.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng15.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We inoculated the correctly transformed strains into 30 ml of LB medium in a conical flask and cultured them for 24 hours. Following this, we performed biotinylation and sampled the cultures to add to a Mucin-coated 96-well plate for measurement. For detailed results, please visit the Results page.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We analyzed the results and found that the cSA-MBD93 group showed increased adhesion to Mucin after biotinylation, which further improved upon the addition of the inducer. This trend became more pronounced as the OD value increased, indicating that this group performed well.
                  </p>
                  <h3 style={styles.partheading}>Verification of surface display in Lactococcus lactis F44</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     To verify the feasibility of the surface display strategy using USP45 and 3LysM, we plan to construct a cSA-RFP expression framework using a strategy similar to that of EcN. Since the fluorescence intensity of SA-RFP is relatively weak in EcN, we did not select it for validating the surface display component. The laboratory already has a plasmid available for Lactococcus lactis, which is pLEB124, utilizing the P45 promoter. We will construct the protein expression framework on this plasmid.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng18.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     First, we need to obtain the 3LysM gene sequence. We employed a strategy combining PCA and overlap to synthesize this sequence using multiple segments of primers.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng19.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We split the entire 3LysM into five small fragments, each obtained from two primers through PCR. Fragment 1 and Fragment 2 were assembled together using overlap assembly, while Fragments 3, 4, and 5 were assembled together in the same manner. Subsequently, the two medium-length fragments were joined together, each carrying homologous arms at both ends.
                  </p>
                  <p style={styles.paragraph}>
                     We assembled the 3LysM, cSA fragment, mRFP fragment, and plasmid backbone together using seamless cloning, resulting in the pLEB124-P45-USP45-3LysM-cSA-mRFP plasmid.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We transformed the obtained plasmid into Lactococcus lactis F44 and plated it on erythromycin agar for selection, resulting in the identification of correctly transformed strains. We inoculated the correct transformants into 20 ml of F44 seed culture medium and measured their OD and fluorescence values every 6 hours.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng20.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     At the same time, we also performed laser confocal observation on the 48-hour culture medium, where there was red fluorescence outside the cell wall. For detailed results, please refer to the Results page.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     The surface display strategy using USP45 and 3LysM is feasible in Lactococcus lactis F44. We will further verify whether the surface display of cSA can enhance its aggregation with biotinylated EcN.
                  </p>
                  <h3 style={styles.partheading}>Aggregation of Lactococcus lactis F44 and EcN</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     To verify the aggregation of Lactococcus lactis F44 and EcN, we assembled the 3LysM, SA fragment/cSA fragment, and plasmid backbone using seamless cloning, constructing the plasmids pLEB124-P45-USP45-3LysM-SA and pLEB124-P45-USP45-3LysM-cSA.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng21.png'}
                     caption={''}customWidth={'80%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     To characterize, we plan to use fluorescent protein labeling of Lactococcus lactis F44 and EcN, incorporating expression cassettes for YFP and BFP into this plasmid. For detailed procedures, please refer to the community characterization section.
                  </p>
                  <p style={styles.paragraph}>
                     In subsequent community characterizations, we found that due to the thicker cell wall of Lactococcus lactis F44, the penetration of fluorescent proteins is poor, resulting in lower measurement values for its fluorescent proteins. We are considering using Gram staining simultaneously to label Lactococcus lactis F44 and EcN during the characterization of their aggregation.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We constructed the plasmids pLEB124-P45-USP45-3LysM-SA and pLEB124-P45-USP45-3LysM-cSA through seamless cloning.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We transformed the plasmid into Lactococcus lactis F44 and plated it on erythromycin agar to select for correctly transformed strains. After culturing the correctly transformed strains for 16 hours, we co-incubated them with biotinylated EcN for 2 hours, followed by Gram staining and observation. For detailed results, please refer to the Results page.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We found that after biotinylation of EcN, the surface-displayed Lactococcus lactis F44 with SA and cSA showed a significant aggregation with EcN.
                  </p>
               </Element>
               <Element name="section3" style={styles.section}>
                  <h2 style={styles.heading}>Therapeutic Modules</h2>
                  <h3 style={styles.partheading}>Butyric Acid-EcN</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     According to the design iterations, we plan to construct a butyrate production component in EcN, which can produce butyrate by itself. Therefore, we expect to enhance the butyrate production capacity of EcN by increasing its carbon metabolic flux. We selected acetyl-CoA acetyltransferase, which is the key step in directing acetyl-CoA towards butyrate production.
                  </p>
                  <p style={styles.paragraph}>
                     To ensure compatibility with the adhesion module's plasmid, we obtained the pJUMP26-1A(sfGFP) plasmid from the iGEM 2024 Distribution, which replicates via p15A and is compatible with both ori and PSC101. At the same time, to ensure resistance compatibility, we replaced the kanamycin resistance of this plasmid with chloramphenicol resistance.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng22.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     Our gene is flanked by BioBrick sites at both ends. We simultaneously digested the vector and gene fragment with EcoRI and SpeI, and after using T4 ligase, we obtained the plasmid pJUMP26-1A (J23111-cat1) containing the acetyl-CoA acetyltransferase gene with kanamycin resistance. Subsequently, we replaced the kanamycin resistance gene with a chloramphenicol resistance gene using seamless cloning.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We will transform the pJUMP26-1A (J23111-cat1) plasmid into EcN and select for correctly transformed strains on chloramphenicol medium.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng23.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We inoculated the correct transformant into 50 ml of LB medium and cultured it for 48 hours. The OD value was measured every 6 hours, and samples of the final fermentation broth were taken for product detection. For detailed results, please refer to the Results page.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     By enhancing its carbon metabolic flux (overexpressing acetyl-CoA acyltransferase), the butyrate production capacity of EcN is effectively increased without causing significant growth inhibition.
                  </p>
                  <h3 style={styles.partheading}>L-Dopa - Lactococcus lactis F44</h3>
                  <h3 style={{ ...styles.partheading, fontSize: '28px' }}>Cycle1</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     L-DOPA can be obtained through the decarboxylation of L-tyrosine in one step. We plan to express 4-hydroxyphenylacetate-3-hydroxylase to achieve the hydroxylation and decarboxylation of L-tyrosine. The 4-hydroxyphenylacetate-3-hydroxylase consists of two genes: hpaB and hpaC. To validate the effect, we first constructed this pathway in EcN. We selected the pETDuet-1 plasmid and inserted the expression frames for hpaB and hpaC onto it.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We obtained the hpaB and hpaC genes in the BL21 (DE3 strain) and assembled them onto the pETDuet-1 plasmid using seamless cloning.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We transformed the obtained pETDuet-1-T7-hpaBC plasmid into EcN and selected the correctly transformed strains on carbenicillin medium.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng24.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We inoculated the correct transformant into 50 ml of LB medium for 48 hours and observed the color changes of the medium. After 48 hours, the medium of the EcN strain containing the pETDuet-1-T7-hpaBC plasmid turned black.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng25.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     Due to the structure of L-DOPA, which contains a catechol moiety, it is highly susceptible to oxidation by oxygen in the air, leading to discoloration that can progress from yellow to red-purple and eventually to black. Therefore, the EcN strain carrying the pETDuet-1-T7-hpaBC plasmid can produce L-DOPA after fermentation.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     Using hpaBC to produce L-DOPA from L-tyrosine in one step is feasible. We attempted to construct this metabolic pathway in Lactococcus lactis F44.
                  </p>
                  <h3 style={{ ...styles.partheading, fontSize: '28px' }}>Cycle2</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     According to the results of cycle 1, we constructed the hpaBC gene cluster on the pNZ8148 vector and controlled its expression using the Pnis promoter.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng26.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We used a seamless cloning method to construct hpaBC downstream of the Pnis promoter.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We will transform the plasmid we obtained into Lactococcus lactis F44 and plate it on chloramphenicol agar to select for the correct transformants.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng27.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We inoculated the correct transformants into 50 ml of MRS medium containing Lactobacillus casei F44 and cultured them in a shaking flask for 48 hours. The optical density (OD) was measured every 2 hours until the stationary phase was reached. For detailed results, please refer to the Results page.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     The use of Lactococcus lactis F44 to produce L-DOPA is effective, but it does lead to some growth inhibition.
                  </p>
                  <h3 style={styles.partheading}>Serotonin-Lactococcus lactis F44</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     In order to further improve the therapeutic effect of Spidey Microbe, we added a strain of lactobacilli F44 that produces serotonin. We chose to overexpress N-acetyltransferase to enhance the production of serotonin. We used the pNZ8148 vector and inserted the BioBrick site onto it by PCR, and inserted the BioBrick site at both ends of the N-acetyltransferase gene.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng28.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We used the BioBrick assembly method to assemble the N-acetyltransferase gene onto the pNZ8148 vector.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We will transform the obtained plasmid into Lactobacillus F44 and coat it in chloramphenicol medium to screen for the correct transformants.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng29.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We will inoculate the correct transformants into conical flasks containing 50 ml of Lactococcus lactis F44 seed culture medium and culture for 48 hours. The OD will be measured every 2 hours until the plateau period. Please refer to the Results page for detailed results.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     The production of serotonin using Lactococcus lactis F44 is effective and almost does not cause growth inhibition.
                  </p>
               </Element>
               <Element name="section4" style={styles.section}>
                  <h2 style={styles.heading}>Fluorescent characterization of microbiota</h2>
                  <h3 style={styles.partheading}>Lactococcus lactis F44-mTagBFP/SYFP2</h3>
                  <h3 style={{ ...styles.partheading, fontSize: '28px' }}>Cycle1</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     In order to locate Lactococcus lactis F44 in Spidey Microbe, we attempted to label it with fluorescent proteins. Due to the presence of two strains of Lactococcus lactis F44 (L-dopa producing bacteria and 5-hydroxytryptamine producing bacteria) in the microbiota, we identified two fluorescent proteins for labeling Lactococcus lactis F44 in iGEM 2024 Distribution and ensured that their excitation and emission wavelengths did not overlap.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng30.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We are preliminarily considering using CRISPR technology to construct it on the genome of Lactococcus lactis F44.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We analyzed the genome of Lactococcus lactis F44 and designed to insert it downstream of the HisH gene.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng31.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We obtained BFP and YFP genes and combined them with the P32 promoter and terminator using overlap. At the same time, we extracted the F44 genome and obtained the upstream and downstream homologous arms of the insertion site through PCR. We integrated them into a long fragment donor (approximately 3000bp) using overlap.
                  </p>
                  <p style={styles.paragraph}>
                     We selected plasmid pHSP02 that can express Cas9 in lactic acid bacteria.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng32.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We designed three sgRNAs for gene editing and performed PCR on plasmid pRGB using primers with sgRNAs. We obtained a circular vector through seamless cloning. Finally, three sgRNA plasmids were successfully obtained: pRGB-F44-sg1, pRGB-F44-sg2, and pRGB-F44-sg3.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng33.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We plan to transform the plasmid carrying Cas9 into Lactococcus lactis F44, using this strain as the competent state, and then transform the sgRNA plasmid and donor into Lactococcus lactis F44 carrying Cas9.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     Due to the large size of the pHSP02 plasmid, we were unable to successfully transform it into Lactobacillus F44 through electroporation.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng42.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We attempted to switch to using plasmids to express fluorescent proteins.
                  </p>
                  <h3 style={{ ...styles.partheading, fontSize: '28px' }}>Cycle2</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We chose to construct fluorescent proteins on plasmids of the adhesion module, namely pLEB124-P45-USP45-3LysM-SA and pLEB124-P45-USP45-3LysM-cSA plasmids, and assembled BFP and YFP expression cassettes on these two plasmids.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng34.png'}
                     caption={''}
                     customWidth={'70%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We obtained BFP and YFP expression frames from two donor fragments obtained from cycle1, and assembled them into pLEB124-P45-USP45-3LysM-SA and pLEB124-P45-USP45-3LysM-cSA plasmids using seamless cloning.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We will transform the obtained plasmid into Lactobacillus F44 and screen for the correctly transformed strain in a medium containing erythromycin.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng35.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     Subsequently, we inoculated the correct transformants into a culture medium containing 20 ml LB and measured their OD and fluorescence values every 6 hours. For detailed results, please refer to the Results page.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     After 48 hours, the fluorescence value of lactobacilli F44 with fluorescent protein was higher than that of natural lactobacilli F44, but the overall fluorescence value was relatively weak. It is considered that the cell wall of lactobacilli F44 is thicker, but the penetration power of fluorescent protein is poor. However, the labeled lactobacilli F44 can be observed through fluorescence microscopy, indicating that the strategy of using fluorescent proteins to label lactobacilli F44 is effective, but its fluorescence value is low.
                  </p>
                  <h3 style={styles.partheading}>EcN-TannenRFP</h3>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     Due to the interruption of the CRISPR strategy in Lactococcus lactis F44, we simultaneously cancelled the gene editing strategy in EcN and instead constructed fluorescent proteins on plasmids. We have selected the plasmid pJUMP27-1A (J23111-TannenRFP-DE3) that expresses T7 RNA polymerase, and plan to use the BioBrick assembly method to assemble the RFP expression box onto this plasmid.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng36.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     In the CRISPR strategy, we expect to insert the RFP expression frame into the glmS (glucosamine-6-phosphate synthase) site and use positive screening (single colony appears red) and negative screening (single colony cannot grow on culture medium without N-acetylglucosamine after photocopying) to obtain correctly edited strains.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng37.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We have obtained the donor fragment with RFP expression frame and sgRNA plasmid using overlap. We obtained the RFP expression frame from the donor fragment and inserted BioBrick sites at both ends. We assembled it onto the pJUMP27-1A (DE3) plasmid using BioBrick.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We will transform the obtained plasmid into EcN and coat it on kanamycin medium to screen for the correct transformed strain.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng38.jpg'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We will inoculate the correct transformant into a test tube containing 20 ml LB and culture it for 26 hours. The OD and fluorescence values will be measured every 2 hours. For detailed results, please refer to the Results page.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We found that using fluorescence values during the logarithmic growth phase of bacterial cells resulted in a faster increase in OD values, but a slower increase in fluorescence values. Therefore, using fluorescent proteins for labeling bacterial strains is more accurate after the logarithmic growth phase. This suggests that when constructing a mixed bacterial system, the initial amount of bacterial cells should be increased to the logarithmic growth phase to ensure the accuracy of fluorescent protein labeling and better growth of bacterial cells in the mixed bacterial system.
                  </p>
               </Element>
               <Element name="section5" style={styles.section}>
                  <h2 style={styles.heading}>Quorum Sensing Module</h2>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Design</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We plan to construct the lcnG gene controlled by the paraBAD promoter in EcN and the lcnG immune gene lagC gene controlled by the Pnis promoter in Lactococcus lactis F44, which produces levodopa.
                  </p>
                  <p style={styles.paragraph}>
                     We constructed the lcnG gene expression box controlled by the paraBAD promoter on a butyric acid production plasmid using BioBrick.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng39.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We assembled the lagC gene into the hpaBC gene cluster of the levodopa production plasmid.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng40.png'}
                     caption={''}
                     customWidth={'40%'}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Build</strong>
                  </p>
                  <p style={styles.paragraph}>
                     Due to the excessive length of the lcnG gene, we split it into three fragments for synthesis. We obtained a paraBAD promoter fragment carrying the araC gene on the pMED-cas9 plasmid and integrated these four fragments together through overlap to form an lcnG expression frame. We inserted BioBrick sites on both sides of the lcnG expression frame fragment and integrated them into the pNZ8148 PNis hpaBC plasmid using BioBrick.
                  </p>
                  <p style={styles.paragraph}>
                     We obtained the gene fragment of lagC through PCR and assembled it onto the pNZ8148 PNis hpaBC plasmid using seamless cloning.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Test</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We co transformed the constructed pNZ8148-PNis-hpaBC-lagC plasmid with pLEB124-P45-USP45-3LysM-cSA-P32-BFP plasmid into Lactococcus lactis F44, and co transformed pJUMP27-1A (J23111-TannenRFP-DE3) plasmid and pJUMP26-1A (J23111-cat1-paraBAD-lcnG) plasmid into EcN. The corresponding strains were screened on culture media containing the corresponding antibiotics.
                  </p>
                  <ImageWithCaption
                     src={'https://static.igem.wiki/teams/5376/engineering/eng41.png'}
                     caption={''}>
                  </ImageWithCaption>
                  <p style={styles.paragraph}>
                     We will culture the obtained EcN in a conical flask containing 20 ml LB, and culture the obtained Lactococcus lactis F44 in a seed medium containing 20 ml F44. When OD=0.6, we will add arabinose and nisin for induction, and we will also set up a blank group (no induction). After 8 hours, we measured their OD separately and mixed EcN with Lactococcus lactis F44 according to the final OD=1.
                  </p>
                  <p style={styles.paragraph}>
                     We set up four groups:
                  </p>
                  <p style={styles.paragraph}>
                     (1)EcN induced with arabinose and lactobacillus F44 induced with nisin;
                  </p>
                  <p style={styles.paragraph}>
                  (2)EcN induced with arabinose and lactobacilli F44 induced without nisin;
                  </p>
                  <p style={styles.paragraph}>
                  (3)EcN without adding arabinose induction+Lactococcus lactis F44 with nisin induction;
                  </p>
                  <p style={styles.paragraph}>
                  (4)EcN induction without adding arabinose+lactobacilli F44 induction without adding nisin.
                  </p>
                  <p style={styles.paragraph}>
                     Cultivate for 10 hours and measure the OD and red fluorescent protein fluorescence values every two hours.
                  </p>
                  <p style={styles.paragraph}>
                     We have analyzed the results, please refer to the Results page for detailed results.
                  </p>
                  <p style={styles.paragraph}>
                  <strong style={{ color: '#c67e38' }}>Learn</strong>
                  </p>
                  <p style={styles.paragraph}>
                     We found that when both strains of bacteria were not induced, lactobacilli F44 showed a growth advantage after OD mixing, and the fluorescence value of red fluorescent protein decreased while OD increased. When adding arabinose without nisin, the decrease in red fluorescent protein is slower and the increase in OD is also slower. When adding arabinose with nisin, the decrease in red fluorescent protein is faster and the increase in OD is faster.
                  </p>
                  <p style={styles.paragraph}>
                     This indicates that lcnG has a toxic effect on lactobacilli F44, and lagC can immunize lactobacilli F44 against this toxic effect. At the same time, when EcN is co cultured with lactobacilli F44, the two strains can coexist well, and lactobacilli F44 shows a growth advantage.
                  </p>
               </Element>
            </main>
         </div>
      </main>

   )
      ;
}




