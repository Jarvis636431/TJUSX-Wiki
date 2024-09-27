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
        
        <div style={styles.content as React.CSSProperties}>
        <br />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <embed
              src="https://static.igem.wiki/teams/5376/protocol.pdf"
              type="application/pdf"
              width="75%"
              height="800px"
            />
          </div>
        </div>
      </div>



    </main>
  );
}
