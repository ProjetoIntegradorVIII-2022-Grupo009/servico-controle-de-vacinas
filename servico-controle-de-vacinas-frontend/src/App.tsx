import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastro'
import Catastrofes from './components/pages/Catastrofes'

function App() {
  return (
    <>
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/cadastro'>Cadastro</Link>
          <Link to='/catastrofes'>Catastrofes</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/catastrofes' element={<Catastrofes/>} />
        </Routes>
            <p>Footer</p>
          </Router>
        </>
        )
}

        export default App
