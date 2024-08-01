import Encontrar from "../../components/Encontrar"
import HeaderDefault from "../../components/Header"
import NavBar from "../../components/NavBar"
import Produto from "../../components/Produto"
import { PesquisaDiv, ProdutoLinha , Produtos } from "./style"

function Pesquisa(){
    return (
    <PesquisaDiv>
    <HeaderDefault nome={'Pesquisa'}/>
    <Encontrar/>

    <Produtos>
    <ProdutoLinha>
    <Produto nome='TV Cobal' preço='R$11,87'/>
    <Produto nome='TV Fluminense' preço='R$19,02'/>
    </ProdutoLinha>
    <ProdutoLinha>
    <Produto nome='TV Cobal' preço='R$11,87'/>
    <Produto nome='TV Fluminense' preço='R$19,02'/>
    </ProdutoLinha>
    <ProdutoLinha>
    <Produto nome='TV Cobal' preço='R$11,87'/>
    <Produto nome='TV Fluminense' preço='R$19,02'/>
    </ProdutoLinha>
        
    </Produtos>
    <NavBar/>
    </PesquisaDiv>
    
    )
}

export default Pesquisa