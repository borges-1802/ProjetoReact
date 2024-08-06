import Inicio from "./Pages/Inicio"
import Home from "./Pages/Home"
import Pesquisa from "./Pages/Pesquisa"
import PesquisaDois from "./Pages/PesquisaDois"
import ProdutoPage from "./Pages/ProdutoPage"
import ErroPagina from "./Pages/ErroPagina";
import ErroPaginaDois from "./Pages/ErroPaginaDois"

import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


const AppRoutes = () => {
     return(
        <Router>
            <Routes>
                <Route element = { <Inicio/> } path="/" />
                <Route element = { <Home/> } path="/Home" />
                <Route element = { <Pesquisa/> } path="/Pesquisa" />
                <Route element = { <PesquisaDois/> } path="/PesquisaDois" />
                <Route element = { <ProdutoPage/> } path="/ProdutoPage" />
                <Route element = { <ErroPagina/> } path="/ErroPagina" />
                <Route element = { <ErroPaginaDois/> } path="/ErroPaginaDois" />
            </Routes>
        </Router>
    );
}
export default AppRoutes