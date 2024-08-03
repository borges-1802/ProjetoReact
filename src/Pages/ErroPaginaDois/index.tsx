import { BotaoCadastro, BotaoLogin, Botoes, DivTotal, ErroDesc, ErroDiv, ErroTexto, ImgErro } from "./styled"

import Erro from "../../assets/Erro.png"
import NavBar from "../../components/NavBar"

function ErroPaginaDois(){
    return(

        <DivTotal>
        <ErroDiv>
            <ErroTexto>Opsss...</ErroTexto>
            <ImgErro src={Erro}/>
            <ErroDesc>Infelizmente, parece que não encontramos o produto desejado.</ErroDesc>
        </ErroDiv>

        <Botoes>
            <BotaoCadastro>Cadastrar
            </BotaoCadastro>
            <BotaoLogin>Fazer Login</BotaoLogin>
        </Botoes>
        <NavBar/>
        </DivTotal>
    )

}
export default ErroPaginaDois