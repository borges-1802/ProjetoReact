import Encontrar from "../../components/Encontrar"
import HeaderDefault from "../../components/Header"
import PesquisasFeitas from "../../components/PesquisasFeitas"
import SugestaoPesquisa from "../../components/SugestaoPesquisa"
import { Apagar, BarraHorizontal, CaixaSugestao, PesquisaDoisDiv, Sugestao } from "./style"

import Celulares from "../../assets/CelularesPesquisa.png"
import Monitores from "../../assets/MonitoresPesquisa.png"
import Teclados from "../../assets/TecladoPesquisa.png"

import NavBar from "../../components/NavBar"

function PesquisaDois(){
    return (

        <PesquisaDoisDiv>
            <HeaderDefault nome={'Pesquisa'}/>
            <Encontrar/>

            <PesquisasFeitas nome={"Monitor"}/>
            <PesquisasFeitas nome={"Smart TV"}/>
            <PesquisasFeitas nome={"Mousepad"}/>

            <BarraHorizontal></BarraHorizontal>

            <Apagar>Apagar Histórico de Pesquisa</Apagar>

        <CaixaSugestao>Sugestão de Busca</CaixaSugestao>

            <Sugestao>

            {<SugestaoPesquisa foto={Celulares} nome={'Celulares'}/>}

            {<SugestaoPesquisa foto={Teclados} nome={'Teclados'}/>}

            {<SugestaoPesquisa foto={Monitores} nome={'Monitores'}/>}
            </Sugestao>

            <NavBar/>

        </PesquisaDoisDiv>



    )

}

export default PesquisaDois