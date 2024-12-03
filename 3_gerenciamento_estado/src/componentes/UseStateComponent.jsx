import { useState } from "react";

//state gerencia estados
//state = hook
 export const UseStateComponent = () => {
    
    //let count = 0; // a variavel nao muda de estado, sera necessario usar state.
    
    //usando state
    const [count, setCount] = useState(0); //crio uma varivel de consulta e outra de alteracao(setCount) e inico o hook.


    const increment = () => {
//  setCount(count + 1);// como a variavel vai ser mudada, precisa-se usar o previus staite(forma segura de pegar o estado anterior do count).
    setCount((prevCount) => prevCount + 1)//faco uma funcao e o argumento especial vai ser o estado anterior, pode nomear como qualquer coisa, nesse caso 'prevCount'
    console.log(count);
    };
  
    //exemplo 2:
    const[user, setUser] = useState ({
      name: "ana",
      age: 32,
      hobbies: ["leitura, luta"],
    })
    const updateUserAge = () => { //funcao para mudar o valor da variavel
      setUser((prevUser) => (
        {
          ...prevUser,
          age: prevUser.age + 1,
        }
      ))
    }


    return (
    <div>
      <h2>Contador</h2>
      <p>voce clicou {count} vezes </p>
      <button onClick={increment}> incrementar </button>


      {/*exemplo 2*/}
      <p>nome: {user.name} e idade {user.age}</p>
      <button onClick={updateUserAge}>incrementar idade</button>
    </div>  
    )
  } //sempre que for alterar valor de algo, usa-se useState
  // se for somente para leitura, usa-se variavel state
   



















/* 
    export const UseStateComponent = () => {
    //exemplo sem uso do state
      let count = 0;

      const increment = () => {

        count += 1;
        console.log(count);
      };



      return (
      <div>
        <h2>
          Contador
        </h2>
        <p>voce clicou {count} vezes </p>
        <button onClick={increment}> incrementar </button>
      </div>  
      )
    }
*/
