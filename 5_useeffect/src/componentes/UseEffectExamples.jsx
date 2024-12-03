import { useState, useEffect} from "react"

export const UseEffectExample = () => {
    
    //useState ativa a re-renderizacao
    const [count, setCount] = useState(0);


    // sem dependencias
    useEffect(() => {
        console.log("rodou"); //ele vai mostrar por qualquer motivo que ative a renderizacao
        }
    )

    //com dependencias vazias / array  de depende vazia
    useEffect(() => {
        console.log("rodou de novo");
    }, []) //vai aparecer sempre que a pagina recarregar


    //useEffect com dependencias
    useEffect(() => {
        console.log("rodou 3 vez"); // eh mostrado pois ele esta atrelado ao state, aparece toda vez que o array eh alterado
    }, [count]); // esse array de dependencia so eh ativado quando o estado muda
    
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>aumentar contagem </button>
        </div>
    )

}// esses exemplos podem ser muito bem usados para carregar API