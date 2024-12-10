
//Agora usando um exxemplo de Estado
import { useState } from "react";


function Titulo(){
    //criando um Estado:
    //primeiro parametro eh o nome do estado, o segundo eh uma funcao que atualiza o estado (normalmente usa o set + nome do primeiro parametro).
    //uso o metodo useState para dizer como o estado inicializa.
    const [texto, setTexto] = useState("Um titulo do ESTADO inicial");

    //Criando outro Estado
    const [inputText, setInputText] = useState("");

    //Funcao que altera o valor de texto com o que foi inserido no inputText
    function clicou(){
        setTexto(inputText);
    }

    return (
    <div>
         <h1>{texto}</h1> 
         
         <input value={inputText} onChange={(e) =>{setInputText(e.target.value)}} type="text"/> {/*coloquei um evento onChange que quando tiver algo escrito, eu vou querer que faca uma funcao que passe o evento pegando e.target.value, ou seja, o que for escrito sera pego e armazenado com o e.target.value */}
         
         <button onClick={()=>{ setTexto("mudei quando apertou o botao")}}> Mudar </button> {/*quando o botao for apertado o estado vai ser mudado*/}
         
         <button onClick={clicou}> muda titulo</button> {/*vou fazer uma funcao e coloca-la aqui para que quando o botton for apertado o titulo mude pelo valor que foi escrito no input*/}

         <p>sou um compoente que esta dentro do compoenente App renderizador, ou seja, o componente raiz onde outros componentes sao incluidos e renderizados</p>
    </div>
    )
}

export default Titulo