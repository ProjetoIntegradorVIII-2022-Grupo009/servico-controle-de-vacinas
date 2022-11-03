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
                    <div>
                        <p>Catástrofes são desastres de grandes proporções relacionados a fenômenos naturais.</p>
                    </div>
                    <br></br>
                </div>
            </div>
        </>
    )
}

export default Catastrofes
