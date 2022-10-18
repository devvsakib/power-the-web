import React,{useState,useEffect} from "react";
import './App.css';
import Form from "./component/Form";
import TodoList from "./component/TodoList";

function App() {
  const [inputText,setInputText]= useState("");
  const [todos, setTodos]= useState([]);
  const [status, setStatus]= useState("all");
  const [filteredTodos, setFilteredTodos]= useState([]);

 
  useEffect(()=>{
    //functions
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
    filterHandler();
  },[todos,status]);

  

  
  
  return (
    <div className="App">
    <header>
      <h1>Todo List</h1>
    </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
