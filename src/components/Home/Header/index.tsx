import { Headers, HamburguerImg, CarrinhoImg, PesquisaImg, CaixaPesquisa, InputPesquisa} from "./style";
import Hamburguer from "../../../assets/hamburguer.png"
import Carrinho from "../../../assets/carrinho.png"
import Pesquisa from "../../../assets/pesquisa.png"

export default function HeaderHome() {
    return (
        <Headers>
           <HamburguerImg src={Hamburguer}></HamburguerImg>
           <CaixaPesquisa>
            <PesquisaImg src={Pesquisa}></PesquisaImg>
           <InputPesquisa placeholder="Encontrar na Elektro..."></InputPesquisa>
           </CaixaPesquisa>
           <CarrinhoImg src={Carrinho}></CarrinhoImg>
        </Headers>
    );
}