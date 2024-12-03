
import './App.css' //necessario para componente filho ser usado
import { UseStateComponent } from './componentes/UseStateComponent' // necessario para componente filho ser usado

function App() {

  return (
    <>
      <UseStateComponent/> {/*componente filho mencionado para que tudo que tiver nele apareca ao user*/}
    </>
  )
}

export default App
