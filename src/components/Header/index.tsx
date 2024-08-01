import { HamburguerImg, Header, PerfilImg, TextoHeader } from "./style";
import Hamburguer from "../../assets/hamburguerBlack.png"
import Perfil from "../../assets/perfilBlack.png"

type Props = {
    nome: string;
}

export default function HeaderDefault({nome}: Props) {
    return (
        <Header>
           <HamburguerImg src={Hamburguer}></HamburguerImg>
           <TextoHeader>{nome}</TextoHeader>
           <PerfilImg src={Perfil}></PerfilImg>
        </Header>
    );
}