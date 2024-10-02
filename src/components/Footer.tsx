import React, { useState, useEffect } from 'react';

export function Footer(): JSX.Element {
  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      height: '250px',
      position: 'relative',
      backgroundColor: '#ffebd3',
      padding: '0px',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    topRightImage: {
      position: 'absolute',
      top: '0px',
      right: '0px',
    },
    topRightImg: {
      width: '8vw',
      height: 'auto',
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      width: '48%', // Adjusted for non-mobile
      paddingTop: '20px',
      paddingLeft: '50px',
    },
    rowStyle: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-start',
    },
  };

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <footer  id='footer' style={styles.footer}>
        {/* 右上角的图片 */}
        <div style={styles.topRightImage}>
          <img
              src="https://static.igem.wiki/teams/5376/footer/icon.png"
              alt="Top Right Image"
              style={styles.topRightImg}
              loading="lazy"
          />
        </div>

        {/* 主内容区域 */}
        <div style={{ display: 'flex', width: '100%', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
          {/* 左侧区域 */}
          <div style={styles.footerSection}>
            <div style={styles.rowStyle}>
              <img
                  src="https://static.igem.wiki/teams/5376/footer/contactus.png"
                  alt="Left Row 1 Image"
                  style={{ width: '200px', height: 'auto' }}
                  loading="lazy"
              />
            </div>
            
            <div style={styles.rowStyle}>
              <img
                  src="https://static.igem.wiki/teams/5376/footer/locationlogo.png"
                  alt="Left Row 2 Image 1"
                  style={{ width: '40px', height: '50px' }}
                  loading="lazy"
              />
              <img
                  src="https://static.igem.wiki/teams/5376/footer/location.png"
                  alt="Left Row 2 Image 2"
                  style={{ width: '500px', height: 'auto' }}
                  loading="lazy"
              />
            </div>
            
            <div style={styles.rowStyle}>
              <img
                  src="https://static.igem.wiki/teams/5376/footer/contactlogo.png"
                  alt="Left Row 3 Image 1"
                  style={{ width: '40px', height: 'auto' }}
                  loading="lazy"
              />
              <img
                  src="https://static.igem.wiki/teams/5376/footer/igemtjusx.png"
                  alt="Left Row 3 Image 2"
                  style={{ width: '180px', height: 'auto',objectFit: 'contain'}}
                  loading="lazy"
              />
            </div>
          </div>

          {/* 右侧区域 */}
          <div style={{...styles.footerSection, gap: '10px'}}>
            <div style={styles.rowStyle}>
              <img
                  src="https://static.igem.wiki/teams/5376/footer/aboutus.png"
                  alt="Right Row 1 Image"
                  style={{ width: '150px', height: 'auto' }}
                  loading="lazy"
              />
            </div>
            <div style={styles.rowStyle}>
              <img
                  src="https://static.igem.wiki/teams/5376/footer/tjulogo.png"
                  alt="Right Row 2 Image 1"
                  style={{ width: '100px', height: 'auto', padding: '10px' }}
                  loading="lazy"
              />
              <img
                  src="https://static.igem.wiki/teams/5376/footer/companylogo.png"
                  alt="Right Row 2 Image 2"
                  style={{ width: '100px', height: 'auto', padding: '10px' }}
                  loading="lazy"
              />
              <img
                  src="https://static.igem.wiki/teams/5376/footer/tjusxlogo.png"
                  alt="Right Row 2 Image 3"
                  style={{ width: '100px', height: 'auto', padding: '10px' }}
                  loading="lazy"
              />
            </div>
            <div style={styles.rowStyle}>
              <img
                  src="https://static.igem.wiki/teams/5376/footer/igemlogo.png"
                  alt="Right Row 3 Image 1"
                  style={{ width: 'auto', height: '70px',paddingRight: '10px' }}
                  loading="lazy"
              />
              <img
                  src="https://static.igem.wiki/teams/5376/footer/teamlogo.png"
                  alt="Right Row 3 Image 2"
                  style={{ width: '70px', height: 'auto' }}
                  loading="lazy"
              />
            </div>
          </div>
        </div>
      </footer>
  );
}
//TODO：添加Git Lab链接
