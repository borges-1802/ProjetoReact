import BotaoPreto from "../../components/BotaoPreto";
import HeaderDefault from "../../components/Header";
import { Avaliacao, AvaliacaoFoto, Caracteristica, ConteudoProduto, Descricao, FotoLogos, ImagemProdutoPage, ImagemVendedor, LogosProduto, NomeProduto, NomeVendedor, ParteInferior, ProdutoDiv, ProdutoTexto, ValorProduto } from "./style";
import CelularProduto from "../../assets/CelularProduto.png"
import IconesProduto from "../../assets/favsProduto.png"
import ImgVendedor from "../../assets/VendedorProduto.png"
import Estrelinhas from "../../assets/Estrelinhas.png"


function ProdutoPage(){
    return (
        <ProdutoDiv>
            <HeaderDefault nome={'Produto'}/>

        <ConteudoProduto>
            <FotoLogos>
                <ImagemProdutoPage src={CelularProduto}/>
                <LogosProduto src={IconesProduto}/>
            </FotoLogos>

            <ParteInferior>

            <ProdutoTexto>
                <NomeProduto>Produto</NomeProduto>
                <ValorProduto>R$800,00</ValorProduto>
            </ProdutoTexto>

            <Avaliacao>
                <ImagemVendedor src={ImgVendedor}/>
                <NomeVendedor>João Paixão</NomeVendedor>
                <AvaliacaoFoto src={Estrelinhas}/>
            </Avaliacao>

            </ParteInferior>

        </ConteudoProduto>

        <Caracteristica>Caracteristicas do Produto</Caracteristica>
        <Descricao>- Tela Super Retina XDR de 6,1”;</Descricao>
<Descricao>- Chip biônico A15 p/ desempenho + rápido;</Descricao>
<Descricao>- Sistema avançado de câmera dupla;</Descricao>
<Descricao>- Câmera frontal TrueDepth de 12 MP, com modo noturno e gravação 4K Dolby Vision.</Descricao>

        <BotaoPreto nome={"Comprar"}/>




        </ProdutoDiv>

    )
}

export default ProdutoPage