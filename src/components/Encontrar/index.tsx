import { BarraPesquisa, CaixaEncontrar, Filtro, FiltroImg, FiltroTexto, InputEncontrar, PesquisaImg } from "./style";

import Pesquisa from "../../assets/lupaWhite.png"
import FiltroBusca from "../../assets/filtro.png"

export default function Encontrar(){
    return (
        <BarraPesquisa>
            <CaixaEncontrar>
                <PesquisaImg src={Pesquisa}></PesquisaImg>
                <InputEncontrar placeholder="Encontrar na Elektro"></InputEncontrar>
            </CaixaEncontrar>

            <Filtro>
                <FiltroImg src={FiltroBusca}></FiltroImg>
                <FiltroTexto>Filtro</FiltroTexto>
            </Filtro>
        </BarraPesquisa>

    )

}