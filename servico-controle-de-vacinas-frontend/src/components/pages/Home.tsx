import styles from './Home.module.css'
import SayMyName from '../layouts/SayMyName'

function Home() {
    const nome = 'Yana'
    return (
        <div className="Home">
        <div>
          <h1>Bem-vindo ao site de <span>Controle de Vacinas</span></h1>
          <SayMyName nome = {nome} />
          <p>Comece a gerenciar as suas vacinas agora mesmo!</p>
        </div>
      </div>
    )
}


/*
    <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/grid.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsivo.css">

        

  </head>
  <body>
    <div id="fb-root"></div>
    
    <script type="module" src="/src/main.tsx"></script>

    <header class="header">
            <div class="container">
                <a href="index.html" class="grid-4">
                    <img src="img/icone.png" alt="Vacinação">
                </a>
                <nav class="grid-12 header_menu">
                    <ul>
                        <li><a href="sobre.html">Sobre</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="cadastro.html">Cadastro</a></li>
                        <li><a href="contato.html">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    <section class="introducao">
            <div class="container">
                <h1 data-anime="400" class="fadeInDown">Controle de Vacinação</h1>
                <blockquote data-anime="800" class="fadeInDown quote-externo">
                    <p>“A Vida pede licença!”</p>
                </blockquote>
        <a data-anime="1200" href="cadastro.html" class="btn">Cadastre-se</a>
            </div>
        </section>

        <section class="produtos container fadeInDown" data-anime="1600">
            <h2 class="subtitulo">Site</h2>
            
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed nisi sem. Suspendisse a eros orci. In finibus diam molestie lacus malesuada, sit amet gravida metus commodo. Duis ut tristique dolor, congue facilisis sem. Nullam fermentum urna ligula, nec pretium nibh scelerisque vestibulum. Maecenas luctus lacus massa, eget euismod sem hendrerit vel. Nulla tincidunt lorem ipsum, vel fringilla leo bibendum eu.</p>

            </ul>

            <div class="call">
                <p>clique aqui e faça o seu cadastro</p>
                <a href="cadastro.html" class="btn btn-preto">Cadastro</a>
            </div>

        </section>

                <section class="quebra">
            <blockquote class="quote-externo container">
                <p>“A saúde é direito de todos e dever do estado”</p>
                <cite>Art. 196 da Constituição Federal do Brasil.</cite>
            </blockquote>
        </section>

        <footer>
            <div class="footer">
                <div class="container">

                    <div class="grid-8 footer_historia">
                        <h3>Nossa História</h3>
                        <p>Buscando auxiliar a comunidade da cidade de Sorocaba a se manter informada sobre aspectos de saúde, e previnir contra as fake news, nos motivou a criar essa página. Conheça um pouco mais da nossa história na aba "Sobre".</p>
                    </div>

                    <div class="grid-4 footer_contato">
                        <h3>Contato da Sec. de Saúde</h3>
                        <ul>
                            <li>- 15 3238.2242</li>
                            <li>- ses@sorocaba.sp.gov.br</li>
                            <li>- Sorocaba - SP</li>
                        </ul>
                    </div>

                    <div class="grid-4 footer_redes">
                        <h3>Agradecimentos</h3>
                        <ul>
                            <li><p>Gostariamos de agradecer nossa tutora ...</p></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="copy">
                <div class="container">
                    <p class="grid-16">UniVacina 2022 - Alguns direitos reservados.</p>
                </div>
            </div>
        </footer>

    <!-- JavaScript -->
    <script src="./js/simple-anime.js"></script>
        <script src="./js/script.js"></script>
    <!-- JavaScript -->
  </body>
  */


export default Home