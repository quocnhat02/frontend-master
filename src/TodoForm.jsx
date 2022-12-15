import React, { useState } from 'react';

const TodoForm = (props) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setText(e.target.value)} />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
