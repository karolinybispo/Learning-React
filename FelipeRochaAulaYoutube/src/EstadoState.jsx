
// statte: uma variavel que quando altero ela, o componente eh alterado tbm. 
// state: quando altero ela, ela faz o componente ser rodado novamente,ou seja, nesse exemplo rodou o ola mundo, mas quando cliquei no estado o componente novemnte foi rodado e agora aparece o ola. Quando muda o state a interface eh atualizada

import { useState } from "react";

function EstadoState(){
    //criando um estado:
    //criei uma variavel (lista)  que vai ser igual a useState() que vai ser importada do react. Dentro da lista coloco a variavel que tem o valor que vai ser mudado e coloco mais uma com o set + mesmo nome
    const [men, setMen] = useState("ola mundo");

    
    return(
        <div>
            <h1> {men}
            </h1>
            <button onClick={ () => { setMen("Ola") }}> mudar mensagem </button>
        </div>
    );
}
export default EstadoState;

//passar js dentro do html precisa do {}