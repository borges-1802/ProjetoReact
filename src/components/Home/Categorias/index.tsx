import { CategoriasDiv, FotoCategoria, NomeCategoria } from "./style";
type Props = {
    foto: string;
    nome: string;
}

export default function Categorias({foto, nome}: Props){
return(
    <CategoriasDiv>
        <FotoCategoria src={foto}/>
        <NomeCategoria>{nome}</NomeCategoria>
    </CategoriasDiv>
)
}