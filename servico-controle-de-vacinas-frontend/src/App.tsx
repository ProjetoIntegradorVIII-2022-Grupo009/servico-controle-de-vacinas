import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastro'
import Catastrofes from './components/pages/Catastrofes'

import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container customClass="min-height">
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/catastrofes' element={<Catastrofes />} />
        </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
