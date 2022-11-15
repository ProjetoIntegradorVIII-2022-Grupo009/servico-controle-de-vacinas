import painelEpidemiologia from "../../../assets/img/epidemiologia3.jpg"
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';

function Epidemiologia() {
    return (
        <>
            <section className="container-fluid">
                <div className="row-fluid">
                    <div className="backgroundimage">
                        <img src={painelEpidemiologia} alt="set-photo" />
                    </div>
                </div>
            </section>
            <div className="Catastrofes">
                <div>
                    <h1 className="titulo-epidemiologia">Epidemiologia</h1>
                    <br></br>
                    <div className="card">
                        <iframe src="https://www.youtube.com/embed/0ZEABB1LRFE" title="Epidemiologia: Conceitos Fundamentais" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="card-body">
                            <h4 className="card-title">As maiores pandemias da história</h4>
                            <p className="card-text">Nenhuma outra doença viral atingiu proporções de letalidade como o surto do vírus COVID-19.</p>
                        </div>
                    </div>
                    <br></br>
                    <p>Existem diferentes nomes técnicos para classificar o status epidemiológico de uma doença, são eles:</p>
                    <div className="classificacao">
                        <p>
                            <ul>
                                <li>Surto;</li>
                                <li>Endemia;</li>
                                <li>Epidemia;</li>
                                <li>Pandemia.</li>
                            </ul>
                        </p>
                    </div>
                    <br></br>
                    <div>
                        <h2>Surto</h2>
                        <p>
                            Surto ou evento inusitado em saúde pública: situação em que há aumento acima do esperado na ocorrência de casos de evento ou doença em uma área ou entre um grupo específico de pessoas, em determinado período. Ressalta-se que, para doenças raras, um único caso pode representar um surto.
                            <br />
                            A ocorrência de surtos pode ser identificada de várias maneiras. Entre elas destacam-se:
                            <li>Notificação por profissionais de saúde que percebem em sua rotina uma elevação do número de casos de determinada doença ou de sua gravidade.</li>
                            <li>Informação procedente da comunidade e notificada às autoridades.</li>
                            <li>Informação procedente da imprensa.</li>
                            <li>Análise de rotina de dados de vigilância epidemiológica. Tais dados podem ser obtidos por diversas formas, incluindo a notificação compulsória de doenças, inquéritos ou busca ativa em uma investigação, assim como a detecção laboratorial.</li>
                            <br />
                            A detecção de surtos exige a adoção de medidas de controle oportunas para o seu controle e prevenção da ocorrência de novos casos.
                            <br />
                            A maior parte dos surtos é de etiologia infecciosa e transmissível e muitas vezes representam razões para a realização de investigação sistemática com vistas à identificação da fonte de infecção e adoção das medidas de controle e elaboração de recomendações adicionais.
                            <br />
                            Entre outras razões para investigar surtos, incluem-se a oportunidade de:
                            <br />
                            a) descrever novas doenças; <br />
                            b) aprender mais sobre doenças conhecidas; <br />
                            c) avaliar as estratégias de prevenção e controle existentes, por exemplo, vacinas; <br />
                            d) ensinar (e aprender) epidemiologia; e e) responder a uma preocupação da população sobre o surto. <br />
                            Quando se decide por investigar um surto de forma sistematizada e com base no método científico, a depender do surto, pelo menos três tipos de atividades devem ser considerados: <br />
                            <li> A investigação epidemiológica.</li>
                            <li> A investigação ambiental.</li>
                            <li> A interação e comunicação com a população e com a imprensa e, em alguns casos, com órgão de controle social (sistema legal).</li>
                        </p>
                        <br></br>
                        <h2>Endemia</h2>
                        <p>A endemia é a presença contínua de uma enfermidade ou de um agente infeccioso em uma zona geográfica determinada. </p>
                        <br></br>
                        <h2>Epidemia</h2>
                        <p>
                            A epidemia é uma denominação utilizada em situações em que a doença envolve grande número de pessoas e atinge uma larga área geográfica.
                            <br />
                            Neste caso, a doença se faz presente em diversos locais ou comunidades, para além daquele em que foram inicialmente identificados. As epidemias podem ser em nível municipal, estadual e nacional.
                        </p>
                        <br></br>
                        <h2>Pandemia</h2>
                        <p>
                            Uma pandemia é a disseminação mundial de uma doença. Ela pode surgir quando um agente infeccioso se espalha ao redor do mundo e a maior parte das pessoas não são imunes a ele.
                            Em uma escala de gravidade, a pandemia é o pior dos cenários porque ela se estende a várias regiões do planeta. Mas isso não necessariamente significa que a situação é irreversível ou que o agente da doença tenha aumentado o seu poder de ameaça.
                        </p>
                        <br></br>
                    </div>
                    <div className="card">
                        <iframe src="https://www.youtube.com/embed/V4gFVuc4n9s" title="As maiores pandemias da história" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="card-body">
                            <h4 className="card-title">As maiores pandemias da história</h4>
                            <p className="card-text">Nenhuma outra doença viral atingiu proporções de letalidade como o surto do vírus COVID-19.</p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </>
    )
}

export default Epidemiologia