import { useEffect, useState } from 'react';
import Header from './addTaskHeader/header';
import AllTasks from './allTasks/allTasks';



function App() {

  function getStoredDate(){
    let data = localStorage.getItem("todos");
    let json = JSON.parse(data);
    
    if(json) return json;

    return [];
  }
  const [todos, setTodos] = useState(getStoredDate());

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <Header  addTodo={addTodo} />
      <AllTasks todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />

    </>
  );
}

export default App;
