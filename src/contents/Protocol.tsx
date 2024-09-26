import { Inspirations, InspirationLink } from "../components";
import { Link, Element } from 'react-scroll';
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
    height: '500px',
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

    outline: '5px solid #ffffff',
    outlineOffset: '-20px',
    // boxShadow: '0 0 0 30px #FFF8F0', // 模拟内侧圆角
  },

  section: {
    padding: '20px 0',
    borderBottom: '1px solid #ddd',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  paragraph: {
    lineHeight: 1.6,
  },
  overviewImage: {
    width: '350px',
    height: 'auto',
  },

};
export function Protocol() {
  return (
    <main style={{ backgroundColor: '#FFF8F0', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <img
          src="https://static.igem.wiki/teams/5376/viruse1.png"
          alt="Left Image"
          style={{ maxWidth: '200px', height: 'auto' }}
        />
        <img
          src="https://static.igem.wiki/teams/5376/protocol.png"
          alt="TITLE"
          style={{ width: '547px', height: '110px', objectFit: 'cover' }}
        />
        <img
          src="https://static.igem.wiki/teams/5376/viruse2.png"
          alt="Right Image"
          style={{ maxWidth: '200px', height: 'auto' }}
        />
      </div>
      <div style={styles.container}>
      <aside style={styles.sidebar as React.CSSProperties}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['Overview'].map((item, index) => (
            <li key={index} style={{ fontSize: '22px', color: '#c67e38', fontWeight: 'bold', marginBottom: '10px' }}>
              <Link
                to={`section${index + 1}`}
                smooth={true}
                duration={500}
                offset={-20}
                spy={true}
                activeClass="active"
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontSize: '30px', // 字体大小
                  color: '#c67e38', // 文字颜色
                  fontWeight: 'bold', // 字体加粗
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#333'}
                onMouseOut={(e) => e.currentTarget.style.color = '#c67e38'}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div style={styles.content as React.CSSProperties}>
      <img
          src="https://static.igem.wiki/teams/5376/overview.png"
          alt="Overview Image"
          style={styles.overviewImage as React.CSSProperties}
        />
        <div>

        </div>
      </div>
      </div>
      

      
    </main>
  );
}
