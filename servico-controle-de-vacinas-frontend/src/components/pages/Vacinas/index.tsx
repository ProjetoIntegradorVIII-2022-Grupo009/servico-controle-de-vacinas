import painelVacinas from "../../../assets/img/vacina.jpg"
import painelIco from "../../../assets/img/email.png"
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';

function Vacinas() {
    return (
        <>
            <section className="container-fluid">
                <div className="row-fluid">
                    <div className="backgroundimage">
                        <img src={painelVacinas} alt="set-photo" />
                    </div>
                </div>
            </section>

            <section id="sales">
            <div className="dsmeta-container">
                <div className="dsmeta-card">
                    <div className="dsmeta-card">


                        <h1 className="titulo-Vacinas">Carteira de Vacinação Digital</h1>
                        <br></br>
                        <br></br>
                        <div>
                            <h1 className="MSG-Vacinas-carteira">
                                Seja bem vindo(a) a sua carteira de vacinação digital.
                            </h1>
                        </div>
                        <br></br>

                        <div>
                            <section id="sales">


                                <div>
                                    <table className="dsmeta-sales-table">
                                        <thead>
                                            
                                            <tr className="table_comBordas">
                                                <th className="show992">VACINAS</th>
                                                <th className="show576">2 MESES</th>
                                                <th className="show476">4 MESES</th>
                                                <th className="show992">6 MESES</th>
                                                <th className="show992">12 MESES</th>
                                                <th className="show992">ABRIL/22</th>
                                                <th className="show992">MARÇO/23</th>
                                                <th className="show992">PROTEÇÃO</th>
                                                <th>Notificar</th>
                                            </tr>

                                        </thead>
                                        <tbody className="table_comBordas">
                                            <td className="show992" >BCG</td>
                                            <td className="show576">DOSE ÚNICA</td>
                                            <td className="show476"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992">FORMAS GRAVES DE TUBERCULOSE NA INFANCIA</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>
                                        <tbody className="table_comBordas" >
                                            <td className="show992">HEPATITE B </td>
                                            <td className="show576">DOSE AO NASCER</td>
                                            <td className="show476"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992">HEPATITE B </td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>
                                        <tbody className="table_comBordas" >
                                            <td className="show992">PNEUMOCÓCIA</td>
                                            <td className="show576">X</td>
                                            <td className="show476">X</td>
                                            <td className="show992">X</td>
                                            <td className="show992">REFORÇO</td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992">PNEUMONIA, MENINGITE E INFECÇÕES CAUSADO PELO PNEUMOCOCO</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>
                                        
                                        <tbody className="table_comBordas" >
                                        <td className="show992">PENTAVELMENTE</td>
                                            <td className="show576">X</td>
                                            <td className="show476">X</td>
                                            <td className="show992">X</td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992">INFECÇOES CAUSADAS PELA INFLUENZA TIPO B</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>
                                        <tbody className="table_comBordas" >
                                            <td className="show992">POLIOMELITE</td>
                                            <td className="show576">X</td>
                                            <td className="show476">X</td>
                                            <td className="show992">X</td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992">FORMAS GRAVES DE TUBERCULOSE NA INFANCIA</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>
                                        <tbody className="table_comBordas" >
                                            <td className="show992">MENGICOCO C </td>
                                            <td className="show576"></td>
                                            <td className="show476"></td>
                                            <td className="show992">X</td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992">SOROGRUPO C</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>
                                        <tbody className="table_comBordas" >
                                            <td className="show992">ROTAVÍRUS</td>
                                            <td className="show576">X</td>
                                            <td className="show476">X</td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992">DIARRÉIA POR ROTAVIRUS</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>
                                        <tbody className="table_comBordas" >
                                            <td className="show992">TRÍPLICE VIRAL</td>
                                            <td className="show576"></td>
                                            <td className="show476"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992">X</td>
                                            <td className="show992"></td>
                                            <td className="show992">SARAMPO, RUBÉOLA E CAXUMBA</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>

                                        <tbody className="table_comBordas" >
                                            <td className="show992">FEBRE AMARELA</td>
                                            <td className="show576"></td>
                                            <td className="show476"></td>
                                            <td className="show992">X</td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992"></td>
                                            <td className="show992">FEBRE AMARELA</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>

                                        <tbody className="table_comBordas" >
                                            <td className="show992">DTP</td>
                                            <td className="show576"></td>
                                            <td className="show476"></td>
                                            <td className="show992"></td>
                                            <td className="show992">X</td>
                                            <td className="show992">X</td>
                                            <td className="show992"></td>
                                            <td className="show992">FEBRE AMARELA</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <div className="dsmeta-red-btn">
                                                        <img src={painelIco} alt="set-photo" />
                                                    </div>

                                                </div>
                                            </td>
                                        </tbody>

                                    </table>

                                </div>

                             <main>

                                
                                
                             </main>


                            </section>


                        </div>
                    </div>

                </div>
            </div>
            </section>
        </>
    )
}
export default Vacinas