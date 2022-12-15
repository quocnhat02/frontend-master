import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;

    if (todos.length > 0) {
      id = todos[0].id + 1;
    }

    const newTodo = {
      text,
      id,
      key: id,
    };

    setTodos((allTodo) => [newTodo, ...allTodo]);
  };

  console.log(todos);

  return (
    <div className="App">
      <div className="form">
        <h1 className="title">Todo List</h1>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
