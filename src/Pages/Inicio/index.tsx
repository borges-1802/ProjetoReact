import { useNavigate } from "react-router-dom"
import LogoElektro from "../../assets/LogoElektro.png"
import { DivLogo, InicioDiv, LogoInicio, TextoInicio } from "./style"
import React from "react"

function Inicio(){
    const navegate = useNavigate()
    React.useEffect( () => {
    const TimeOut = setTimeout(() =>{
            navegate("Home")            
        }, 3000)
    return () => clearTimeout(TimeOut)
    })
    
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