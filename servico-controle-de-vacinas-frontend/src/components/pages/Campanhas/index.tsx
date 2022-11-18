import painelCampanhas from "../../../assets/img/Campanha.jpg"
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';

function Campanhas() {
    return (
        <>
            <section className="container-fluid">
                <div className="row-fluid">
                    <div className="backgroundimage">
                        <img src={painelCampanhas} alt="set-photo" />
                    </div>
                </div>
            </section>
            <div className="Campanhas">
                

                <div>
                    <br></br>
                    <h2>Olá, Seja bem vindo(a) à página de campanhas de vacinação da região metropolitana de Sorocaba/SP. </h2>
                    <br></br>
                    <p>Para visualizar as campanhas disponíveis em sua cidade clique na opção abaixo:</p>
                    <h1 className="titulo-Campanhas">Campanhas</h1>
                    <div className="dropdown">
                        <button className="mainmenubtn">CIDADES</button>
                        <div className="dropdown-child">
                            <a href="https://saude.sorocaba.sp.gov.br/">SOROCABA</a>
                            <a href="https://salto.sp.gov.br/category/secretaria-de-saude/">SALTO</a>
                            <a href="https://itu.sp.gov.br/saude/">ITU</a>
                            <a href="https://www.cabreuva.sp.gov.br/">CABREUVA</a>
                            <a href="https://www.portofeliz.sp.gov.br/secretaria-saude">PORTO FELIZ</a>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div>
                        <p>
                        O Estado de São Paulo amplia a campanha de vacinação a partir desta quarta-feira (22) para toda a população acima de 6 meses de idade. Com término da campanha dos grupos prioritários, as doses remanescentes podem ser aplicadas em pessoas de outras faixas etárias que devem procurar os postos de vacinação dos municípios, para mais detalhes acesse o menu "cidades".
                        </p>
                        <br></br>
                        <h2>Últimas Campanhas lançadas no estado de São Paulo.</h2>
                        <br></br>
                        <div className="container row">
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="card">
                                <iframe  src="https://www.youtube.com/embed/khMs__hrgDI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div className="card-body">
                                        <h5 className="card-title">Campanha Poliomelite</h5>
                                        <p className="card-text">Lançamento da Campanha Nacional de Vacinação contra a Poliomielite e da Multivacinação.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="card">
                                <iframe src="https://www.youtube.com/embed/DLdoZm5F0Zs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div className="card-body">
                                        <h5 className="card-title">Campanha Influenza</h5>
                                        <p className="card-text">Governo de SP incentiva campanha de vacinação contra vírus influenza.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="card">
                                <iframe  src="https://www.youtube.com/embed/hzmqhmR1Q9I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div className="card-body">
                                        <h5 className="card-title">Campanha de Prevenção Varíola dos Macacos</h5>
                                        <p className="card-text">Campanha Nacional de Prevenção à Varíola dos Macacos (2022).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Campanhas