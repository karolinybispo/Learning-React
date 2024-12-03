
export const JsxExample = () => { {/* aqui cria-se o componente*/}
// fora do return pode escrever código JavaScript, se necessário

  const nome = "juliana";
  
  const objeto = {
    idade: "90",
  };

  function getGreeting(frase){
    return `ola ${frase}`
  }

  const userIsLoggedIn = true;

  const userRold = "admin";

  const users = [
    { id: 1, nome: "joao"},
    { id: 2, nome: "vitoria"},
    { id: 3, nome: "branda"},
  ];

    return ( 
    <div>
         {/* Aqui coloca-se o componente */}
         
        <h1>JsxExample</h1>
        <h2>my name is {nome}</h2>
        <h3>my age is {objeto.idade}</h3>
        <h4>{getGreeting("bom dia")}</h4>

        {/* estilizando a div com a class, no jsx nao podemos usar o class pois ele eh reservado do js, portanto use className*/}
        <div className="teste"></div>

        {/* todos atributos devem ser em camelCase */}
        <button onClick={() => alert("alerta")}>clique</button>

        {/*todas as tags devem ser fechadas*/}

        {/*renderizacao condicional*/} 
        {userIsLoggedIn ? <p>caso: esta logado</p> :  <p>nao esta logado</p>}
       
        {/*outra forma de logica*/} 
        <p>{userRold === "admin" && <p>voce eh admin </p>}</p> {/* && em js e react avalia o lado esquerdo para exibir ou executar o lado direito, nesse caso '<p>voce eh admin</p>'*/}

        {/*renderizacao de listas*/}
        <div> 
            <ul>
            {/*sera usado o map do js*/}
            {users.map((user) => ( 
                    <li key={user.id}>  {/*em uma exibicao de lista de elementos no react precisa-se de uma chave unica para cada elemento da lista. Essa key permite o react acompanhar quais itens mudaram, foram adc ou removidos */}
                        {user.id} - {user.nome} </li>
                ))}
            </ul>
        </div>



    </div>
    
  )
}
