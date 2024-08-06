import { BarraPesquisa, CaixaEncontrar, Filtro, FiltroImg, FiltroTexto, InputEncontrar, PesquisaImg } from "./style";

import Pesquisa from "../../assets/lupaWhite.png"
import FiltroBusca from "../../assets/filtro.png"
import { Link } from "react-router-dom";

export default function Encontrar(){
    return (
        <BarraPesquisa>
            <Link to="/ErroPagina"><CaixaEncontrar>
                <PesquisaImg src={Pesquisa}></PesquisaImg>
                <InputEncontrar placeholder="Encontrar na Elektro"></InputEncontrar>
            </CaixaEncontrar></Link>

            <Link to="/PesquisaDois"><Filtro>
                <FiltroImg src={FiltroBusca}></FiltroImg>
                <FiltroTexto>Filtro</FiltroTexto>
            </Filtro></Link>
        </BarraPesquisa>

    )

}