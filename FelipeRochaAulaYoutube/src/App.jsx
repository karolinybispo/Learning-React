import AddTasks from "./componentes/AddTasks";
import Tasks from "./componentes/Tasks";

//criando primeiro componente
function App(){
  //const message = 'oiie';
  return(
    <div>
    {/* <h2>{message}</h2>*/} 
    {/*  <h3>como vai?</h3>*/}

    <h1>Gerenciador de tarefas</h1>
    <AddTasks></AddTasks>
    <Tasks></Tasks>


    </div>
  );
}
 export default App;