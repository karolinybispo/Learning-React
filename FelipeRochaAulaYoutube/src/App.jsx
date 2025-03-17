import AddTasks from "./componentes/AddTasks";
import Tasks from "./componentes/Tasks";
import '../src/App.css'

//criando primeiro componente
function App(){
  //const message = 'oiie';
  return(
    <div>
    {/* <h2>{message}</h2>*/} 
    {/*  <h3>como vai?</h3>*/}

    <h1 className="titulo">Gerenciador de tarefas</h1>
    <AddTasks></AddTasks>
    <Tasks></Tasks>


    </div>
  );
}
 export default App;