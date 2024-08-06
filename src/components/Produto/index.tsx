import { BaseProduto, Coracao, Detalhes, ImgProduto, Inferior, TextoPreco, TextoProduto } from "./style"
import CoracaoUm from "../../assets/coracao.png"
import { Link } from "react-router-dom";

type Props = {
    imagem: string;
    nome: string;
    preço: string;

}

export default function Produto({imagem,nome,preço}: Props) {
    return (
        <BaseProduto>

            <ImgProduto src={imagem}/>
        
            <Inferior>
                <Detalhes>
                    <TextoProduto>{nome}</TextoProduto>
                    <TextoPreco>{preço}</TextoPreco>
                </Detalhes>
                <Coracao src={CoracaoUm}/>
            </Inferior>

        </BaseProduto>


    );
    
}