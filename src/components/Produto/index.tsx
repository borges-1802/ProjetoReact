import { BaseProduto, Coracao, Detalhes, ImgProduto, Inferior } from "./style"
import ProdutoFoto from "../../assets/imgTV.png"
import CoracaoUm from "../../assets/coracao.png"

type Props = {
    nome: string;
    preço: string;
}

export default function Produto({nome,preço}: Props) {
    return (

        <BaseProduto>

        <ImgProduto src={ProdutoFoto}/>
        
        <Inferior>
        <Detalhes>
        <p>{nome}</p>
        <p>{preço}</p>
        </Detalhes>
        <Coracao src={CoracaoUm}/>
        </Inferior>

        </BaseProduto>


    );
    
}