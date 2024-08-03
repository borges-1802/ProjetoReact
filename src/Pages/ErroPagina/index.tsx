import { DivTotal, ErroDesc, ErroDiv, ErroTexto, ImgErro , Voltar } from "./styled"

import Erro from "../../assets/Erro.png"
import NavBar from "../../components/NavBar"
import VoltarImg from "../../assets/Voltar.png"

function ErroPagina(){
    return(

        <DivTotal>
        <ErroDiv>
            <ErroTexto>Opsss...</ErroTexto>
            <ImgErro src={Erro}/>
            <ErroDesc>Infelizmente, parece que não encontramos o produto desejado.</ErroDesc>
        </ErroDiv>

        
            <Voltar src={VoltarImg}/>

        <NavBar/>
        </DivTotal>
    )

}
export default ErroPagina