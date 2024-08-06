import NavBar from '../../components/NavBar'
import HeaderHome from '../../components/Home/Header'
import { TituloHome, BarraHorizontal, HomeDiv , CategoriaHome, LogoHome, TextoTitulo, TextoCategorias, TextoPraVc, ProdutosPraVc, ProdutosDestaque, ProdutosMaisVendidos, Infos, LogosInferiores, CategoriaSecao} from './style'
import Produto from '../../components/Produto'
import Categorias from '../../components/Home/Categorias'

import Celular from '../../assets//HomeAssets/CategoriasCelular.png'
import Acessorios from '../../assets/HomeAssets/CategoriasAcessorios.png'
import Headset from '../../assets/HomeAssets/CategoriasHeadset.png'
import Notebook from '../../assets/HomeAssets/CategoriasNotebook.png'
import PC from '../../assets/HomeAssets/CategoriasPC.png'
import Smartwatch from '../../assets/HomeAssets/CategoriasSmartw.png'
import TV from '../../assets/HomeAssets/CategoriasTV.png'
import Tablet from '../../assets/HomeAssets/CategoriasTablet.png'

import MotorolaHome from '../../assets/HomeAssets/HomeMotorola.png'
import IphoneHome from '../../assets/HomeAssets/HomeIphone.png'
import SmartHome from '../../assets/HomeAssets/HomeSmart.png'
import CapinhaHome from '../../assets/HomeAssets/HomeCapinha.png'
import HomeTV from '../../assets/HomeAssets/HomeTV.png'
import HomeMonitor from '../../assets/HomeAssets/HomeMonitor.png'


import CarrosselHome from '../../components/Home/Carrossel'
import LogoElektro from '../../assets/LogoElektro.png'
import RedesSociais from '../../assets/redesSociais.png'
import { Link } from 'react-router-dom'



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
        <CategoriaSecao>
      <Categorias foto= {Celular} nome={'Celulares'}/>
      <Categorias foto= {TV} nome={'TVs'}/>
      </CategoriaSecao>
      <CategoriaSecao>
      <Categorias foto= {Notebook} nome={'Notebooks'}/>
      <Categorias foto= {Acessorios} nome={'Acessórios'}/>
      </CategoriaSecao>

      <CategoriaSecao>
      <Categorias foto= {Tablet} nome={'Tablets'}/>
      <Categorias foto= {PC} nome={'PCs'}/>
      </CategoriaSecao>
      <CategoriaSecao>
      <Categorias foto= {Headset} nome={'Periféricos'}/>
      <Categorias foto= {Smartwatch} nome={'Smartwatches'}/>
      </CategoriaSecao>
      </CategoriaHome>


      <TextoPraVc>Para Você</TextoPraVc>
      <BarraHorizontal></BarraHorizontal>
      <ProdutosPraVc>
      <Link to="/ProdutoPage"><Produto nome='MotoG20' preço='R$878,43' imagem={MotorolaHome}/></Link>
      <Produto nome='Capa p/ Celular' preço='R$20,10' imagem={CapinhaHome}/>
      </ProdutosPraVc>

      <TextoPraVc>Produtos em Destaque</TextoPraVc>
      <BarraHorizontal></BarraHorizontal>
      <ProdutosDestaque>
      <Produto nome='SmartTV UHD' preço='R$1872,99' imagem={HomeTV}/>
      <Produto nome='Monitor 144Hz' preço='R$749,99' imagem={HomeMonitor}/>
      </ProdutosDestaque>
      
       
      <TextoPraVc>Mais Vendidos</TextoPraVc>
      <BarraHorizontal></BarraHorizontal>
      <ProdutosMaisVendidos>
      <Produto nome='iPhone 15 Pro' preço='R$7812,99' imagem={IphoneHome}/>
      <Produto nome='Smartwatch Bom' preço='R$899,99' imagem={SmartHome}/>
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