interface HeaderProps {
    title: string;
    lead: string;

}

export function Header({ title, lead }: HeaderProps) {
    return (
        <header className="">
            <div className="col-lg-12">
                {/*<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>*/}
                {/*    <img*/}
                {/*        src="https://static.igem.wiki/teams/5376/viruse1.png"*/}
                {/*        alt="Left Image"*/}
                {/*        style={{maxWidth: '100px', height: 'auto'}}*/}
                {/*    />*/}

                {/*    <img*/}
                {/*        src="https://static.igem.wiki/teams/5376/model.png"*/}
                {/*        alt="TITLE"*/}
                {/*        style={{width: '250px', height: '110px', objectFit: 'cover'}}*/}
                {/*    />*/}


                {/*    <img*/}
                {/*        src="https://static.igem.wiki/teams/5376/viruse2.png"*/}
                {/*        alt="Right Image"*/}
                {/*        style={{maxWidth: '100px', height: 'auto'}}*/}
                {/*    />*/}
                {/*</div>*/}

                <h1 className="display-4 text-white mt-5 mb-2">{title}</h1>
                <p className="lead mb-5 text-white-50">{lead}</p>
            </div>
        </header>
    );
}

