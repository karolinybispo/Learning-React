//importacoes
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //trabalha com react para poder manipular o DOM
import App from './App.jsx' // importei o componente App e declarei ele dentro do metodo createRoot

// aqui esta renderizando os compoenntes no index.html

//METODO PARA REDERIZAR
createRoot(document.getElementById('root')).render( // o createRoot eh um metodo que cria uma rota onde vai ser renderizado os compoentes, esta pegando um docuemnto pelo id que eh nomeado como root (essa root eh a div dentro do Index.html) que sera render (renderizado) um componente App
  <StrictMode> 
    <App />
  </StrictMode>,
)
