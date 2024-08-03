import { BaseBotao, NomeBotao } from "./style";

type Props = {
    nome: string;
}

export default function BotaoPreto({nome}:Props){
    return(
        
        <BaseBotao>
        
        <NomeBotao>{nome}</NomeBotao>
        </BaseBotao>
    )

}