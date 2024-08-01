import LogoElektro from "../../assets/LogoElektro.png"
import { DivLogo, InicioDiv, LogoInicio, TextoInicio } from "./style"

function Inicio(){
    return(

        <InicioDiv>
        <DivLogo>
            <LogoInicio src={LogoElektro}></LogoInicio>
            <TextoInicio>Elektro</TextoInicio>
        </DivLogo>
        </InicioDiv>
    )
}

export default Inicio