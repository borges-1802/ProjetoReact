import { ImgX, PesquisasDiv, TextoPesquisado } from "./style";

import Fechar from "../../assets/x.png"

type Props = {
    nome: string;
}

export default function PesquisasFeitas({nome}:Props){
    return(

        <PesquisasDiv>
        <TextoPesquisado>{nome}</TextoPesquisado>
        <ImgX src={Fechar}/>
        </PesquisasDiv>
    )
}