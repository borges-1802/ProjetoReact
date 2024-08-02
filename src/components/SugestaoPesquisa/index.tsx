import { CaixaTexto, ImgProdutoSug, SugestaoDiv, TextoSugestao } from "./styled";

type Props = {
    foto: any;
    nome: string;
}

const SugestaoPesquisa = ({foto,nome}:Props)=> {
    return (

        <SugestaoDiv>

            
            <ImgProdutoSug src={foto}/>


            <CaixaTexto>
                <TextoSugestao>{nome}</TextoSugestao>
            </CaixaTexto>

        </SugestaoDiv>
    )
}

export default SugestaoPesquisa