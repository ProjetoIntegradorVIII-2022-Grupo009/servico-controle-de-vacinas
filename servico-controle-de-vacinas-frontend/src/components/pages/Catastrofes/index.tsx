import painelCatastrofes from "../../../assets/img/desastresambientais2.jpg"
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';

function Catastrofes() {
    return (
        <>
            <section className="container-fluid">
                <div className="row-fluid">
                    <div className="backgroundimage">
                        <img src={painelCatastrofes} alt="set-photo" />
                    </div>
                </div>
            </section>
            <div className="Catastrofes">
                <div>
                    <h1 className="titulo-catastrofes">Catástrofes</h1>
                    <br></br>
                    <br></br>
                    <div>
                        <p>Catástrofes são desastres de grandes proporções relacionados a fenômenos naturais.</p>
                    </div>
                    <br></br>
                    <h2>O que é desastre ambiental?</h2>
                    <p>
                        Desastres ambientais são eventos que afetam negativamente uma sociedade ou ecossistema em algum nível, podem ter origem natural, por exemplo: terremotos, tsunamis, furacões e outros eventos naturais, ou podem ocorrer por intervenções humanas, tais como: rompimento de barragens, acidentes em usinas nucleares, vazamento óleo no mar. 
                    </p>
                    <br></br>
                        <h2>Desastres ambientais no Brasil</h2>
                    <div>
                        <p>
                            No Brasil, os desastres ambientais dificilmente são provocados por efeitos naturais de grande magnitude, porém, muitos deles são provocados por ações humanas.
                            Como os dois grandes desastres ambientais do Brasil: acidente Césio 137 em Goiânia em 1987 e o rompimento da barragem de Brumadinho em 2019.
                        </p>
                        <br></br>
                        <div className="container row">
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="card">
                                    <iframe src="https://www.youtube.com/embed/hP-8D-YglDo" title="Acidente Césio 137 Goiânia" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="card-body">
                                        <h5 className="card-title">Acidente Césio 137 Goiânia</h5>
                                        <p className="card-text">Maior acidente radioativo em área urbana do mundo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="card">
                                    <iframe src="https://www.youtube.com/embed/YIN02W40UTE" title="Brumadinho: o documentário da BBC (PARTE 1)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="card-body">
                                        <h5 className="card-title">Brumadinho: o documentário da BBC (PARTE 1)</h5>
                                        <p className="card-text">Segundo maior desastre ambiental de mineração e o maior acidente de trabalho no Brasil em perda de vidas humanas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="card">
                                    <iframe src="https://www.youtube.com/embed/TUlq8pjOU4U" title="Brumadinho: o documentário da BBC (PARTE 2)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="card-body">
                                        <h5 className="card-title">Brumadinho: o documentário da BBC (PARTE 2)</h5>
                                        <p className="card-text">Continuação do documentário da BBC.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <h2>Os maiores desastres naturais do Brasil</h2>
                        <br></br>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BPvKYhScq08" title="Os maiores desastres naturais do Brasil" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <br></br>
                        <br></br>
                        <p>Alguns acontecimentos mais destrutivos do Brasil foram:</p>
                        <div className="desastres-Brasil">
                            <p>
                                <li> Incêndios:</li>
                                <ul className="b">
                                    <li>1963 - No Paraná;</li>
                                    <li>1974 - No edifício Joelma em São Paulo;</li>
                                    <li>1998 - Em Roraima;</li>
                                    <li>2013 - Na boate Kiss, na Cidade de Santa Maria (RS);</li>
                                    <li>2017 - Na Chapada dos Veadeiros em Goiás;</li>
                                    <li>2018 - No museu nacional em São Paulo;</li>
                                </ul>
                                <li>Tornados:</li>
                                <ul className="b">
                                    <li>1991 - Na cidade de Itu (SP);</li>
                                    <li>2005 - Na cidade de Indaiatuba (SP);</li>
                                    <li>2015 - Dois tornados no oeste de Santa Catarina;</li>
                                    <li>2018 - Em 24 cidades gaúchas;</li>
                                </ul>
                                <li>Inundações ou enxentes:</li>
                                <ul className="b">
                                    <li>1941 - Em Porto Alegre (RS);</li>
                                    <li>1966 - No Rio de Janeiro;</li>
                                    <li>1967 - Enxente com deslizamento de terra em Serra das Araras (RJ);</li>
                                    <li>2008 - Em Santa Catarina;</li>
                                    <li>2011 - Enxente com deslizamento de terra no Rio de Janeiro;</li>
                                </ul>
                                <li>Rompimentos de barragens:</li>
                                <ul className="b">
                                    <li>2015 - Em Mariana (MG);</li>
                                    <li>2019 - Barragem de Brumadinho (MG);</li>
                                </ul>
                            </p>
                        </div>                       
                    </div>
                    <br></br>
                    <div>
                        <h2>Desastres Naturais: Castigos da natureza ou desequilíbrio urbano?</h2>
                        <br></br>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VYy2c6h1KsE" title="Desastres Naturais: Castigos da natureza ou desequilíbrio urbano?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <br></br>
                        <br></br>
                        <p>
                        Terremotos, deslizamentos, furacões, temporais, desastres, foram tantos eventos naturais que nos dão a impressão de que o meio ambiente quer nos castigar.
                        <br />
                        Os desastres naturais são uma realizade no mundo, entendê-los é fundamental para prever, previnir e minimizar os imapctos sociais.
                        <br />
                        Por isso, o planejamento urbano é uma iniciativa de prevenção e de humanidade.
                        <br />
                        As intensas atividades humanas que levam aos desmatamentos, as secas, as enxentes, a poluição dos rios, contribuem muito para que desastres naturais aconteçam.
                        <br />
                        Segundo um estudo divulgado pela ONG World Resources Institute (WRI), especializada em manejo sustentável de recursos naturais, mudanças climáticas e o crescimento urbano desordenado poderão deixar mais de 400 mil brasileiros expostos a enchentes fluviais até 2030.
                        <br />
                        O problema de água no nordeste é conhecido desde o século XVI, um ecossistema que é naturalmente seco e cíclico, é discutível a expressão "combater as secas", mas é algo possível, demanda vontade individual, coletiva e política. Não é necessário combater o semiárido, mas sim, é preciso aprender a conviver com ele de forma saudável e sustentável.
                        <br />
                        Diante de tantos desafios, o grande problema é a falta de informação, portanto é importante educar para a prevenção, a percepção e reação diante de um risco de desatre.
                        <br />
                        Para minimizar as tragédias, é importante investir em políticas públicas para que o monitoramento de desastres naturais seja eficaz e o resultado seja a preservação da vida do maior número de pessoas possíveis.
                        </p>
                        <br></br>
                        <div>
                            <h2>Desastres ambientais no Mundo</h2>
                            <p>
                                Desastres ambientais são situações comuns na natureza, entretando, são intensificados pela ação da humanidade.
                            </p>
                            <br></br>
                            <div className="container row">
                                <div className="col-12 col-md-6 col-lg-4 mb-2">
                                    <div className="card">
                                        <iframe src="https://www.youtube.com/embed/DiGqjYkRQ6o" title="Chernobyl: A História Completa" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <div className="card-body">
                                            <h5 className="card-title">Chernobyl: A História Completa</h5>
                                            <p className="card-text">O acidente de Chernobyl aconteceu em 26 de abril de 1986, quando o reator 4 da usina nuclear de Chernobyl explodiu e lançou material radioativo na atmosfera.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-2">
                                    <div className="card">
                                        <iframe src="https://www.youtube.com/embed/5mw1JJ0KdFc" title="Fukushima: terremoto, tsunami e acidente nuclear" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <div className="card-body">
                                            <h5 className="card-title">Fukushima: terremoto, tsunami e acidente nuclear</h5>
                                            <p className="card-text">Mundialmente conhecido acidente nuclear de Fukushima (2011), o segundo mais grave da história.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-2">
                                    <div className="card">
                                        <iframe src="https://www.youtube.com/embed/ZFgHuXHRSKE" title="3ª Guerra Mundial ou 1ª Ciberguerra?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <div className="card-body">
                                            <h5 className="card-title">3ª Guerra Mundial ou 1ª Ciberguerra?</h5>
                                            <p className="card-text">A ciberguerra ou guerra cibernética é uma modalidade de guerra em que a conflitualidade não ocorre com armas físicas, mas via meios eletrônicos e informáticos no chamado ciberespaço.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div>
                            <h2>Os Dez Maiores Desastres Naturais</h2>
                            <div>
                                <br></br>
                                    <iframe width="560" height="315" className="video9" src="https://www.youtube.com/embed/MbqIro1tm3U" title="Os Dez Maiores Desastres Naturais" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
                                <br></br>
                                <br></br>
                                <p>
                                    Os dez maiores desastres naturais que mudaram o mundo:
                                    <ol reversed>
                                        <li>Ondas de tornados nos Estados Unidos (2011);</li>
                                        <li>Terremoto e tsunami no Japão (2011);</li>
                                        <li>Pandemia da gripe espanhola (1918);</li>
                                        <li>Erupção do vulcão Krakatoa na Indonésia (1883);</li>
                                        <li>Tornado Katrina nos Estados Unidos (2005);</li>
                                        <li>Mega enxente do passado;</li>
                                        <li>Terremoto em São Francisco - EUA (1906);</li>
                                        <li>Erupção do vulcão (Laki) na Islândia (1783);</li>
                                        <li>Terremoto e tsunami do Oceano Índico (2004);</li>
                                        <li>Pandemia da peste negra ou bulbônica (1348).</li>
                                    </ol>
                                </p>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catastrofes
