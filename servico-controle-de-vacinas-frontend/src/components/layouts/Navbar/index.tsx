import { Link } from 'react-router-dom'
import login from "../../../assets/img/Login.png"
import './styles.css'

function Navbar() {
    return (
        <nav className="navbar">
        <ul className="list">
          
          <a href="login">
              <li className='item'>
              <img src={login} alt="login"/>
              </li>                           
                           
            <li className='item'>
            <Link to='/cadastro'><h6>Cadastre-se</h6></Link>
            </li>                                
          </a>                           
              
            <li className='item'>
                <Link to='/'>Home</Link>
            </li>
            <li className='item'>
                <Link to='/vacinas'>Vacinas</Link>
            </li>
            <li className='item'>
                <Link to='/campanhas'>Campanhas</Link>
            </li>
            <li className='item'>
                <Link to='/doencasTransmissiveis'>Doenças Transmissíveis</Link>
            </li>
            <li className='item'>
                <Link to='/epidemiologia'>Epidemiologia</Link>
            </li>
            <li className='item'>
                <Link to='/catastrofes'>Catástrofes</Link>
            </li>
        </ul>        
    </nav> 
    )
}

export default Navbar