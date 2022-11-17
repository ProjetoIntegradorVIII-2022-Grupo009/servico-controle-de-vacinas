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
                    <h2>Conceitos Fundamentais</h2>
                    <br></br>
                    <div className="card-conceitos">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0ZEABB1LRFE" title="Epidemiologia: Conceitos Fundamentais" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <br></br>
                    <p>Epidemilogia é um ramo da ciência que estuda os diferentes fatores que intervêm na difusão e propagação de doenças. Esta estuda os seguintes fatores: frequência, distribuição, evolução e prevenção.</p>
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
                            Surto é um aumento repentino do número de casos de uma determinada doença em uma região específica, este número vai além do esperado pelas autoridades.
                            <br />
                            Exemplo: Caso de hepatite A em uma determinada creche, somente neste local foi registrado um número muito maior de crianças com esta doença do que geralmente aconteceria.
                            <br />
                        </p>
                        <br></br>
                        <h2>Endemia</h2>
                        <p>
                            A endemia é a presença contínua de uma enfermidade ou de um agente infeccioso em uma zona geográfica determinada (local específico), ou seja, é uma doença típica de uma determinada localidade, aparece com muita frequência em regiões específicas.
                            <br />
                            Por exemplo: A febre amarela é uma doença endêmica da região Norte, há ocorrências em outras localidades, porém é muito mais frequente na região Norte do que em outras regiões do Brasil. A mesma coisa é o caso da malária.
                        </p>
                        <br></br>  
                        <h2>Epidemia</h2>
                        <p>
                            A epidemia é uma denominação utilizada em situações em que a doença envolve grande número de pessoas e atinge uma larga área geográfica.
                            <br />
                            Neste caso, a doença se faz presente em diversos locais ou comunidades, para além daquele em que foram inicialmente identificados. As epidemias podem ser em nível municipal, estadual e nacional.
                            <br />
                            Exemplo: O caso de epidemia de sarampo no Brasil, em 2022 enfrentamos um novo e desafiante cenário com o aumento de casos e suspeitas da doença.
                            <br />
                            Outro exemplo: Crescente casos de dengue no país, segundo Ministério da Saúde, houve um crescimento de 43,9% de casos em 2022.
                        </p>
                        <br></br>
                        <h2>Pandemia</h2>
                        <p>
                            A pandemia nada mais é que uma epidemia geral, uma disseminação mundial de uma doença. Ela pode surgir quando um agente infeccioso se espalha ao redor do mundo e a maior parte das pessoas não são imunes a ele.
                            Em uma escala de gravidade, a pandemia é o pior dos cenários porque ela se estende a várias regiões do planeta. Mas isso não necessariamente significa que a situação é irreversível ou que o agente da doença tenha aumentado o seu poder de ameaça.
                            <br />
                            É o caso do Covid-19, que iniciou na China e devido a propagação mundial, em 11 de março de 2020, esta doença foi caracterizada pela OMS como uma pandemia.
                        </p>
                        <br></br>
                        <h4>As maiores pandemias da história</h4>
                    <div className="card-pandemias">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/V4gFVuc4n9s" title="As maiores pandemias da história" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <br></br>
                    <div className="casos-pandemias">
                    <p>
                        Nenhuma outra doença viral atingiu proporções de letalidade como o surto do vírus COVID-19, os maiores casos de pandemias da história foram:
                        <ul>
                                <li>Ebola - 8 agosto de 2014 (África Ocidental) e 18 maio de 2018 (República Democrática do Congo);</li>
                                <li>Gripe suína, conhecida também como H1N1 - 25 de abril de 2009;</li>
                                <li>Covid-19;</li>
                        </ul>
                    </p>
                    </div>
                    <br></br>
                </div>
            </div>
            </div>
       </>
    )
}

export default Epidemiologia