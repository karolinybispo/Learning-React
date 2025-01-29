//importei a biblioteca para usar rotas
import{BrowserRouter, Routes, Route} from "react-router-dom";


import { Home } from "./pages/home"
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";



function App() {

  return (
    <div>
         {/* Configurando o roteamento */}
      <BrowserRouter>
          <Routes> 
            
            {/* Definindo as rotas */}
            {/*Dentro de Routes eu faço uma rota (route) */}
            {/*Dentro de Route eu coloco a path que eh o caminho da URL, nesse caso a pg inicial (a que entramos no aplicativo, informada pelo terminal) que representamos com /. O elemento que eu quero que seja renderizado ao entrar na pg eh o Home*/}
            <Route path="/" element={<Home/>} /> 
            <Route path="/Sobre" element={<Sobre/>} /> 
            <Route path="/Contato" element ={<Contato/>} > 

            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
