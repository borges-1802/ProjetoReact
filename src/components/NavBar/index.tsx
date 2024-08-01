import { ComponentesNav, Icones, Texto, NavBarDiv } from "./style";
import HomeIcon from "../../assets/casa.png"
import MsgIcon from "../../assets/msg.png"
import NotificaIcon from "../../assets/notifica.png"
import PerfilIcon from "../../assets/perfil.png"

export default function NavBar(){
    return(

        <NavBarDiv>
            <ComponentesNav>
            <Icones src={HomeIcon}/>
            <Texto>Home</Texto>
            </ComponentesNav>
            <ComponentesNav>
            <Icones src={MsgIcon}/>
            <Texto>Chat</Texto>
            </ComponentesNav>
            <ComponentesNav>
            <Icones src={NotificaIcon}/>
            <Texto>Avisos</Texto>
            </ComponentesNav>
            <ComponentesNav>
            <Icones src={PerfilIcon}/>
            <Texto>Perfil </Texto>
            </ComponentesNav>
        </NavBarDiv>

    );
}