
import './styles.css'
import SayMyName from '../../layouts/SayMyName'

function Home() {
    const nome = 'Yana'
    return (
        <div className="Home">
                <div>
                    <br></br>
                    <h1>Bem-vindo ao site de <span>Controle de Vacinas</span></h1>
                    <SayMyName nome = {nome} />
                    <p>Comece a gerenciar as suas vacinas agora mesmo!</p>
                                
                    <div class="contents">
                    <div class="slides" >
                        <input type="radio" name="slide" id="slide1" checked></input>
                        <input type="radio" name="slide" id="slide2"></input>
                        <input type="radio" name="slide" id="slide3"></input>
                        <input type="radio" name="slide" id="slide4"></input>
                        <input type="radio" name="slide" id="slide5"></input>
                        
                        <div class="slide s1">                        
                            <img src="../../src/assets/img/11.jpg" alt="imagem"></img>
                            <div class="banner-responsivo-titulo">Cadastro</div>
                            <div class="banner-responsivo-legenda"><br></br>Faça o seu cadastro e tenha sempre acesso as nossas novidades.</div>
                            <a href="Cadastro">
                            <div class="button1">Clique aqui!</div></a>                        
                        </div>
                        <div class="slide">
                            <img src="../../src/assets/img/22.jpg" alt="imagem"></img>                        
                        </div>
                        <div class="slide">
                            <img src="../../src/assets/img/33.jpg" alt="imagem"></img>
                        </div>
                        <div class="slide">
                            <img src="../../src/assets/img/44.jpg" alt="imagem"></img>                        
                        </div>
                        <div class="slide">
                            <img src="../../src/assets/img/55.jpg" alt="imagem"></img>                        
                        </div>
                        <div class="navigations">
                            <label class="bar" for="slide1"></label>
                            <label class="bar" for="slide2"></label>
                            <label class="bar" for="slide3"></label>
                            <label class="bar" for="slide4"></label>
                            <label class="bar" for="slide5"></label>
                        </div>
                  
                    </div>
                    
                </div>
                
              
                </div>
                <br></br>
                <br></br>
                

                <p>O Portal de Vacinas é um site que busca conectar quem precisa se vacinar ao local onde está sendo disponibilizada essa vacina na cidade de Sorocaba.</p>
                <p>Para isso, é realizado o cadastro no nosso site, uma vez cadastro o nosso usuário recebe notificações avisando tanto via SMS quanto por e-mail sobre onde se vacinar.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jV-uhu1aAqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <br></br>
                <h3>Visão, Missão e Valores</h3>
                <p><strong>Visão:</strong> tornar-se uma ferramenta de integração entre as pessoas que precisam das vacinas e o ponto de vacinação mais próximo.</p>
                <p><strong>Missão:</strong> facilitar o acesso das pessoas aos serviços públicos de vacinação e à informação sobre vacinas, saúde e prevenção de doenças.</p>
                <p><strong>Valores:</strong> Responsabilidade, Cuidado, Praticidade, Transparência, Parceria e Integração.</p>
                <br></br>
                <h3>Outros assuntos</h3>
                <p>Entendemos a importância da imunização através da vacinação, mas não podemos tirar a importância de outros itens de extrema importância para a saúde das pessoas.</p>
                <p>Devido a isso, disponibilizamos em nosso site páginas que tratam de outro assuntos como <a href="Campanhas">Campanhas</a>, <a href="doencasTransmissiveis">Doenças Transmissíveis</a>, <a href="epidemiologia">Epidemiologia</a> e <a href="catastrofes">Catástrofes</a>.</p>
                <p>Fique por dentro desses assuntos, acessando através dos links acima.</p>
                <br></br>

                                  
        </div>
        
    )
}


export default Home