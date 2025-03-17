import AddTasks from "./componentes/AddTasks";
import Tasks from "./componentes/Tasks";
import '../src/App.css'

//criando primeiro componente
function App(){
  //const message = 'oiie';
  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
    {/* <h2>{message}</h2>*/} 
    {/*  <h3>como vai?</h3>*/}

    <div className="w-[500px]">
      <h1 className="titulo text-3xl font-bold text-center">Gerenciador de tarefas</h1>
      <h2 className="text-red-500 text-3xl">Segundo titulo</h2>
      <AddTasks></AddTasks>
      <Tasks></Tasks>
    </div>
    </div>
  );
}
 export default App;