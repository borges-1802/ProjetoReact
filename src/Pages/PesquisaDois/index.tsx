import Encontrar from "../../components/Encontrar"
import HeaderDefault from "../../components/Header"
import PesquisasFeitas from "../../components/PesquisasFeitas"
import SugestaoPesquisa from "../../components/SugestaoPesquisa"
import { Apagar, BarraHorizontal, PesquisaDoisDiv, Sugestao } from "./style"

import Celulares from "../../assets/CelularesPesquisa.png"
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

            <Sugestao></Sugestao>

            {<SugestaoPesquisa foto={Celulares} nome={'Fluminense'}/>}

            {<SugestaoPesquisa foto={Celulares} nome={'Fluminense'}/>}

            {<SugestaoPesquisa foto={Celulares} nome={'Fluminense'}/>}

            <NavBar/>

        </PesquisaDoisDiv>



    )

}

export default PesquisaDois