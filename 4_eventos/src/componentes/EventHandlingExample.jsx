import {useState} from 'react'

export const EventHandlingExample = () => {
  
        const handleClik = () => {
            alert("testando");
        };
    
        const handleGreet = (name) => {
            alert(`ola ${name}`)
        };

        //USANDO useState
        const [name, setName] = useState();
  
        const handleSubmit = (e) => { // o argumento e a linha 14 sao necessarios, pois a pagina recarrega sem eles, e isso nao eh o objetivo com SPA
            e.preventDefault(); 

            alert(`"enviado" ${name}`);//aqui envio o valor
        }
  
 
 
  
    return (
    <div>
        <button onClick={handleClik}>clique aqui</button> {/* quando evento de clique tem uma logica, usa-se uma funcao e por padrao nomeie esse evento/funcao de evento com 'handle'  */}
       
        <br />
        <br />
        
        <button onClick={() => handleGreet("joao")}>Dizer ola joao</button> {/*sempre que tem um evento com parametros, precisa usar a funcao anonima, para o evento ser feito pelo usuario e nao js*/}
        
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={name} //react entende que esse input representa o state
            onChange={(e) => setName(e.target.value)} //mudo o valor do state
            placeholder='digite seu nome' />
            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}
