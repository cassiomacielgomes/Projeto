//import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Pagina404 from './pages/404'
import './assets/css/base/base.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './assets/css/404.css'
import Cabecalho from './components/cabecalho'
import Post from './pages/Post'
import './assets/css/post.css'
import Categoria from './pages/Categoria'
import SubCategoria from './pages/SubCategorias'
import CategoriaPosts from './pages/CategoriaPost'
import Admin from './pages/admin/admin'
import FormCategoria from './pages/admin/components/FormCategoria'

function App() {
  return(
    <Router>
      <Cabecalho />
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/NovaCategoria' element={<FormCategoria />}/>
        <Route path='/admin/:id' element={<FormCategoria />}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts/:id' element={<Post/>}/> 

        <Route path='/categorias/:id' element={<Categoria/>}>          
            <Route index element={<CategoriaPosts />} />            
            <Route path=':subcategoria' element={<SubCategoria />} />
        </ Route>

        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='*' element={<Pagina404/>}/>
      </Routes>
    </Router>
  )
}

export default App