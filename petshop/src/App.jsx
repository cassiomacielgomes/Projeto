//import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Pagina404 from './pages/404'
import './assets/css/base/base.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './assets/css/404.css'
import Cabecalho from './components/cabecalho'

function App() {
  return(
    <Router>
      <Cabecalho />
      <Routes>
        {/* Use element={Componente /} para renderizar */}
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='*' element={<Pagina404/>}/>
      </Routes>
    </Router>
  )
}

export default App