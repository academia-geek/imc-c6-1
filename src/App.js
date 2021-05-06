import Footer from './containrs/Footer'
import Header from './containrs/Header'
import Main from './containrs/Main'
import SocialMedia from './components/pages/SocialMedia'
import Copyright from './components/pages/Copyright'
import CalculadorApp from './components/calculador/CalculadorApp'
import bascula from './images/bascula-dibujo.png'
function App () {
  return (
    <>
     <Header title = "Cálculo de Indice de Masa Corporal IMC"/>
      <Main>
        <CalculadorApp bascula = {bascula}/>
      </Main>
      <Footer>
          <SocialMedia/>
          <Copyright/>
      </Footer>
    </>
  )
}

export default App
