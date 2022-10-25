import './styles.css'

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="container">

                    <div className="grid-8 footer_historia">
                        <h3>Nossa História</h3>
                        <p>Buscando auxiliar a comunidade da cidade de Sorocaba a se manter informada sobre aspectos de saúde, e previnir contra as fake news, nos motivou a criar essa página. Conheça um pouco mais da nossa história na aba "Sobre".</p>
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
                            <li><p>Gostariamos de agradecer nossa tutora ...</p></li>
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