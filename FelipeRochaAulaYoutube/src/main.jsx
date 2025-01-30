import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import EstadoState from './estadoState.jsx'

createRoot(document.getElementById('root')).render( //aqui esta sendo flado para o react criar o react, renderizar dentro da aplicacao com id root, que fica dentro do index.html
  <StrictMode>
    <App />
  {/*  <EstadoState></EstadoState> */}
    </StrictMode>,
)
