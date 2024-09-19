export function Software() {
    return (
        <main style={{backgroundColor: '#FFF8F0', minHeight: '100vh'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <img
                    src="https://static.igem.wiki/teams/5376/viruse1.png"
                    alt="Left Image"
                    style={{maxWidth: '100px', height: 'auto'}}
                />

                <img
                    src="https://static.igem.wiki/teams/5376/software.png"
                    alt="TITLE"
                    style={{width: '400px', height: '110px', objectFit: 'cover'}}
                />


                <img
                    src="https://static.igem.wiki/teams/5376/viruse2.png"
                    alt="Right Image"
                    style={{maxWidth: '100px', height: 'auto'}}
                />
            </div>


            <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px', height: "600px"}}>

                <aside style={{
                    width: '30%',
                    backgroundColor: '#FFF4E6',
                    padding: '20px',
                    height: '100%',
                    justifyContent: 'space-between',
                    borderRadius: '10px'
                }}>
                    <h3 style={{fontSize: '28px', color: '#c67e38', fontWeight: 'bold'}}>Overview</h3>
                    <ul style={{listStyleType: 'none', padding: '0'}}>
                        <li style={{fontSize: '22px', color: '#c67e38', fontWeight: 'bold', marginBottom: '10px'}}>
                            Part1. Metabolite database of probiotics—MDOP
                        </li>
                        <li style={{fontSize: '22px', color: '#c67e38', fontWeight: 'bold', marginBottom: '10px'}}>
                            Part2. Software package—MDOP Tool
                        </li>
                        <li style={{fontSize: '22px', color: '#c67e38', fontWeight: 'bold', marginBottom: '10px'}}>
                            Reference
                        </li>
                    </ul>
                </aside>

                <div
                    style={{
                        width: '65%',
                        padding: '20px',
                        backgroundImage: 'url(https://static.igem.wiki/teams/5376/textbox-background.png)',
                        backgroundSize: 'cover'
                    }}>
                    <img
                        src="https://static.igem.wiki/teams/5376/overview.png"
                        alt="Overview"
                        style={{width: '50%', height: 'auto'}}
                    />
                </div>
            </div>
        </main>
    );
}
