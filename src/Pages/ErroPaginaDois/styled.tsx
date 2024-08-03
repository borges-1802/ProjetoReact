import styled from "styled-components";

export const DivTotal = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-color: #f3f3f3;
`

export const ErroDiv = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
position: relative;
top: 23%
`

export const ErroTexto = styled.div`
font-family: "Russo One", sans-serif;
font-weight: 400;
font-style: normal;
color: #2A2A2A;
font-size: 32px;
text-align: center;
`

export const ImgErro = styled.img`
`

export const ErroDesc = styled.text`
text-align: center;
padding-left: 5rem;
padding-right: 5rem;
`

export const Botoes = styled.div`
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
top: 24%;
gap: 10px;
`

export const BotaoCadastro = styled.div`
    background-color: #2B2B2B;
    color: #F3F3F3;
    height: 2rem;
    width: 12rem;
    border: none;
    border-radius: 16px;
    padding: 7px 0px;
    text-align: center;
`

export const BotaoLogin = styled.div`
background-color: #FFFFFF;
    color: #2B2B2B;
    height: 2rem;
    width: 12rem;
    border: none;
    border-radius: 16px;
    padding: 7px 0px;
    text-align: center;
`