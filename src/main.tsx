import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
/*import ProdutoPage from './Pages/ProdutoPage/index.tsx'
import Home from './Pages/Home/index.tsx'
import Inicio from './Pages/Inicio/index.tsx'
import Pesquisa from './Pages/Pesquisa/index.tsx'
import PesquisaDois from './Pages/PesquisaDois/index.tsx'
import ErroPagina from './Pages/ErroPagina/index.tsx'
import ErroPaginaDois from './Pages/ErroPaginaDois/index.tsx'*/
//import NavBar from './components/NavBar/index.tsx'
import AppRoutes from "./Routers.js"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
)
