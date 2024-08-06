import { ComponentesNav, Icones, Texto, NavBarDiv } from "./style";
import HomeIcon from "../../assets/casa.png"
import MsgIcon from "../../assets/msg.png"
import NotificaIcon from "../../assets/notifica.png"
import PerfilIcon from "../../assets/perfil.png"
import { Link } from "react-router-dom";

export default function NavBar(){
    return(

        <NavBarDiv>
            <ComponentesNav>
            <Link to="/Home"><Icones src={HomeIcon}/></Link>
            <Texto>Home</Texto>
            </ComponentesNav>
            <ComponentesNav>
            <Link to="/ErroPaginaDois">
            <Icones src={MsgIcon}/></Link>
            <Texto>Chat</Texto>
            </ComponentesNav>
            <ComponentesNav>
            <Link to="/ErroPaginaDois">
            <Icones src={NotificaIcon}/></Link>
            <Texto>Avisos</Texto>
            </ComponentesNav>
            <ComponentesNav>
            <Link to="/ErroPaginaDois"><Icones src={PerfilIcon}/></Link>
            <Texto>Perfil </Texto>
            </ComponentesNav>
        </NavBarDiv>

    );
}