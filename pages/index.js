import React, { useState } from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar(props) {
    return (
        <Box>
            <img src={`http://github.com/${props.name}.png`} style={{ borderRadius: '8px' }} />
            <hr />
            <a className="boxLink" href={`http://github.com/${props.name}`}>
                @{props.name}
            </a>
            <hr />
            <AlurakutProfileSidebarMenuDefault />

        </Box>
    )
}

export default function Home() {

    const [comunidades, setComunidades] = useState([{
        id: new Date().toISOString(),
        title: 'Eu odeio acordar cedo!',
        image: 'http://alurakut.vercel.app/capa-comunidade-01.jpg',
    }]);
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
                    <Box>
                        <h2 className="subTitle">O que você deseja fazer?</h2>
                        <form onSubmit={function handleCriaComunidade(e) {
                            e.preventDefault();

                            const dadosForm = new FormData(e.target)

                            const comunidade = {
                                id: new Date().toISOString(),
                                title: dadosForm.get('title'),
                                image: dadosForm.get('imagem'),
                            }
                            setComunidades(arrAnt => [...arrAnt, comunidade])
                        }}>
                            <div>
                                <input
                                    placeholder="Qual vai ser o nome da sua comunidade?"
                                    name="title"
                                    aria-label="Qual vai ser o nome da sua comunidade?"
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Coloque uma URL para usarmos de capa"
                                    name="imagem"
                                    aria-label="Coloque uma URL para usarmos de capa"
                                />
                            </div>
                            <button>
                                Criar comunidade
                            </button>

                        </form>
                    </Box>
                </div>
                <div className="communityArea" style={{ gridArea: 'communityArea' }}>
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smalltitle">Comunidades ({comunidades.length})</h2>
                        <ul>
                            {comunidades.map((itemAtual) => {
                                return (
                                    <li>
                                        <a href={`/users/${itemAtual.title}`} key={itemAtual.id}>
                                            <img src={itemAtual.image} />
                                            <span>{itemAtual.title}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>
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
