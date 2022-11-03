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
                </div>
            </div>
        </>
    )
}

export default Epidemiologia