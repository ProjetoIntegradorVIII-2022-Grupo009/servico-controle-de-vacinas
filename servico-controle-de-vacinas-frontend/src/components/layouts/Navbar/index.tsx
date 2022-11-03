import { Link } from 'react-router-dom'
import './styles.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="list">
                <li className='item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='item'>
                    <Link to='/cadastro'>Cadastro</Link>
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