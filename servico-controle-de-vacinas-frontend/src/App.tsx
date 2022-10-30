import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastro'
import Vacinas from './components/pages/Vacinas'
import Campanhas from './components/pages/Campanhas'
import Catastrofes from './components/pages/Catastrofes'
import DoencasTransmissiveis from './components/pages/DoencasTransmissiveis'
import ClassificacaoEpidemiologica from './components/pages/ClassificacaoEpidemiologica'

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
                <Route path='/vacinas' element={<Vacinas />} />
                <Route path='/campanhas' element={<Campanhas />} />
                <Route path='/doencasTransmissiveis' element={<DoencasTransmissiveis />} />
                <Route path='/classificacaoEpidemiologica' element={<ClassificacaoEpidemiologica  />} />
                <Route path='/catastrofes' element={<Catastrofes />} />
        </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
