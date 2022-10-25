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
                    <Link to='/catastrofes'>Catastrofes</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar