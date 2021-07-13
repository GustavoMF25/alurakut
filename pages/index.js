
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar(props) {
    return (
        <Box>
            <img src={`http://github.com/${props.name}.png`} style={{ borderRadius: '8px' }} />
        </Box>
    )
}

export default function Home() {
    const githubuser = "GustavoMF25";
    const pessoasFavoritas = [
        'juunegreiros',
        'omariosouto',
        'peas',
        'rafaballerini',
        'marcobrunodev',
        'felipefialho',
    ]

    return (
        <>
            <AlurakutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea: 'profileArea' }}>
                    <ProfileSidebar name={githubuser} />
                </div>
                <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
                    <Box>
                        <h1 className="title"> Bem vindo! </h1>
                        <OrkutNostalgicIconSet />
                    </Box>
                </div>
                <div className="communityArea" style={{ gridArea: 'communityArea' }}>
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smalltitle">Pessoas da Comunidade ({pessoasFavoritas.length})</h2>

                        <ul>
                            {pessoasFavoritas.map((itematual) => {
                                return (
                                    <li>
                                        <a href={`/users/${itematual}`} key={itematual}>
                                            <img src={`http://github.com/${itematual}.png`} />
                                            <span>{itematual}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>
                </div>
            </MainGrid>
        </>
    )
}
