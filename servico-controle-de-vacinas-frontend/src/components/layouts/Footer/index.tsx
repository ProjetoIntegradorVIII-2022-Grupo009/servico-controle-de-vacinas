import './styles.css'

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="container">

                    <div className="grid-8 footer_historia">
                        <h3>Nossa História</h3>
                        <p>Estudantes do 5° ano de Engenharia de Computação da Univesp, buscando auxiliar a comunidade da cidade de Sorocaba/SP a se manter informada sobre aspectos de saúde, sempre com suas vacinas em dia e previnir contra fake news, foi o que nos motivou a criar essa página.</p>
                    </div>

                    <div className="grid-4 footer_contato">
                        <h3>Contato da Sec. de Saúde</h3>
                        <ul>
                            <li>- 15 3238.2242</li>
                            <li>- ses@sorocaba.sp.gov.br</li>
                            <li>- Sorocaba - SP</li>
                        </ul>
                    </div>

                    <div className="grid-4 footer_redes">
                        <h3>Agradecimentos</h3>
                        <ul>
                            <li><p>Gostariamos de agradecer nossa tutora, Yana Jorge Polizer Rocha, por todo o suporte e orientação durante a realização desse projeto.</p></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="copy">
                <div className="container">
                    <p className="grid-16">UniVacina 2022 - Alguns direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer