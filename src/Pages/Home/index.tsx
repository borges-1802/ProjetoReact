import NavBar from '../../components/NavBar'
import HeaderHome from '../../components/Home/Header'
import { TituloHome, BarraHorizontal, HomeDiv , CategoriaHome, CategoriaCima , CategoriaBaixo, LogoHome, TextoTitulo, TextoCategorias, TextoPraVc, ProdutosPraVc, ProdutosDestaque, ProdutosMaisVendidos, Infos, LogosInferiores} from './style'
import Produto from '../../components/Produto'
import Categorias from '../../components/Home/Categorias'

import Celular from '../../assets/CategoriasCelular.png'
import CarrosselHome from '../../components/Home/Carrossel'
import LogoElektro from '../../assets/LogoElektro.png'
import RedesSociais from '../../assets/redesSociais.png'

function Home() {

  return (
    <HomeDiv>
      <HeaderHome/>

      <TituloHome>
      <LogoHome src={LogoElektro}></LogoHome>
      <TextoTitulo>Bem-vindo à Elektro!</TextoTitulo>
      </TituloHome>
      <CarrosselHome/>


      <BarraHorizontal></BarraHorizontal>
      <TextoCategorias>Categorias Elektro</TextoCategorias>

      <CategoriaHome>
        <CategoriaCima>
      <Categorias foto= {Celular} nome={'Celulares'}/>
      <Categorias foto= {Celular} nome={'Notebook'}/>
      <Categorias foto= {Celular} nome={'Tablet'}/>
      <Categorias foto= {Celular} nome={'Periféricos'}/>
      </CategoriaCima>

      <CategoriaBaixo>
      <Categorias foto= {Celular} nome={'TVs'}/>
      <Categorias foto= {Celular} nome={'Acessórios'}/>
      <Categorias foto= {Celular} nome={'PCs'}/>
      <Categorias foto= {Celular} nome={'Smartwatches'}/>
      </CategoriaBaixo>
      </CategoriaHome>


      <TextoPraVc>Para Você</TextoPraVc>
      <BarraHorizontal></BarraHorizontal>
      <ProdutosPraVc>
      <Produto nome='TV Cobal' preço='R$11,87'/>
      <Produto nome='TV Fluminense' preço='R$19,02'/>
      </ProdutosPraVc>

      <TextoPraVc>Produtos em Destaque</TextoPraVc>
      <BarraHorizontal></BarraHorizontal>
      <ProdutosDestaque>
      <Produto nome='TV Cobal' preço='R$11,87'/>
      <Produto nome='TV Fluminense' preço='R$19,02'/>
      </ProdutosDestaque>
      
      
      <TextoPraVc>Mais Vendidos</TextoPraVc>
      <BarraHorizontal></BarraHorizontal>
      <ProdutosMaisVendidos>
      <Produto nome='TV Cobal' preço='R$11,87'/>
      <Produto nome='TV Fluminense' preço='R$19,02'/>
      </ProdutosMaisVendidos>

      <Infos>
        <p>Siga-nos nas redes sociais!</p>
        <LogosInferiores src={RedesSociais}></LogosInferiores>
      </Infos>
      <NavBar/>
    </HomeDiv>
  )
}

export default Home