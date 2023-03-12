import React, { useState } from 'react'
import '../styles/App.css';

function ToDo(props) {
  return (
    <tr>
      <td>
        <p>{props.todoId}</p>
      </td>
      <td>
        <input value={`ToDo ${props.todoId}`} />
      </td>
      <td>
        <p>{props.createdAt}</p>
      </td>
    </tr>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { id: "todo1", createdAt: "20:30" },
    { id: "todo2", createdAt: "18:00" },
  ]);

  function reverseOrder() {
    setTodos([...todos].reverse());
  }

  return (
    <div id="main">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>input</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <ToDo key={todo.id} todoId={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;