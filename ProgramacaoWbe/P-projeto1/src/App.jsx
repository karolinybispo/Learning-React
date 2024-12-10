import Titulo from "./Titulo"
import Interpolacao from "./Interpolacao"
function App() {
  
  return ( 
  <div>
      <Titulo/>
      <Interpolacao age="34" />
      <Interpolacao lastname="bri" info={"com props de sobrenome"}/>
      <Interpolacao/>

  </div>
  )
}

export default App




//CRIANDO UM COMPOENTE:
//1- criar funcao;
//2- determinar um retorno;
//3- exporta-la.


//Nesse comonente importei dois outros componentes (Interpolacao e Titulo).