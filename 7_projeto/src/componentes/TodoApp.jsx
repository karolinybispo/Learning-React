import { useState } from "react"

import "./TodoApp.css";

//DESAFIOS:
//salvar itens no localStorege
// carregar eles com useEffetc
// deletar itens com uma funcao e evento



//Todo eh uma lista de tarefas
export const TodoApp = () => {
  
    //lista de tarefas
    const [todos, setTodos] = useState([]);
  
    //estado de texto da tarefa
    const [inputValue, setInputValue] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim() !== ''){
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false,
            }
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setInputValue("");
        }
    }

    return (
    <div className="app-container">
        <h1 className="title"> Lista de tarefas </h1>

        {/*form para adicionar tarefas*/}
        <form onSubmit={handleSubmit} className="form-container">

            <input type="text"
            className="input-field"
             placeholder="adc uma terefa" 
             value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}/>
            <button type="submit" className="add-button">adc</button>
        </form>

        {/*lista de tarefas*/}
        {todos.length === 0 && <p className="empty">Sem tarefas</p> }

            <ul className="todo-list">
            { todos.map((todo) => (
                <li key={todo.id} className="todo-item"> 
                    {todo.text}
                    <button className="delete-button"> excluir </button>
                </li>
            )
            )
            }
            </ul>
    </div>
  )
}
