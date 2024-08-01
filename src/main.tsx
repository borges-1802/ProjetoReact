import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Pesquisa from './Pages/Pesquisa/index.tsx'
import Home from './Pages/Home/index.tsx'
import Inicio from './Pages/Inicio/index.tsx'
//import NavBar from './components/NavBar/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Inicio/>
  </React.StrictMode>,
)
