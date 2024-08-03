import Encontrar from "../../components/Encontrar"
import HeaderDefault from "../../components/Header"
import NavBar from "../../components/NavBar"
import Produto from "../../components/Produto"
import { PesquisaDiv, ProdutoLinha , Produtos } from "./style"

import TVerde from '../../assets/PesquisaAssets/VerdeTV.png'
import TVAzul from '../../assets/PesquisaAssets/AzulTV.png'
import TVAmarelo from '../../assets/PesquisaAssets/AmarelaTV.png'
import TVermelha from '../../assets/PesquisaAssets/VermelhaTV.png'
import TVTCL from '../../assets/PesquisaAssets/TCLTV.png'
import HomeTV from '../../assets/HomeAssets/HomeTV.png'

function Pesquisa(){
    return (
    <PesquisaDiv>
    <HeaderDefault nome={'Pesquisa'}/>
    <Encontrar/>

    <Produtos>
    <ProdutoLinha>
    <Produto nome='LGTV 4K' preço='R$1999,99' imagem={TVerde}/>
    <Produto nome='TV Samsung' preço='R$1412,99' imagem={HomeTV}/>
    </ProdutoLinha>
    <ProdutoLinha>
    <Produto nome='TV TCL' preço='R$1112,01' imagem={TVTCL}/>
    <Produto nome='Semp RokuTV' preço='R$1200,02' imagem={TVAmarelo}/>
    </ProdutoLinha>
    <ProdutoLinha>
    <Produto nome='AOC TV UHD' preço='R$1300,87' imagem={TVermelha}/>
    <Produto nome='Phillips TV' preço='R$1400,02' imagem={TVAzul}/>
    </ProdutoLinha>
        
    </Produtos>
    <NavBar/>
    </PesquisaDiv>
    
    )
}

export default Pesquisa