import React, { useState } from 'react'
import '../styles/App.css';

function ToDo() {
  return (<tr>
    <td>
      <p>id</p>
    </td>
    <td>
      <input />
    </td>
    <td>
      <p>createdAt</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);

  return (
    <div id="main">
      <button id="btn" >Reverse</button>
      <table>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}

document.getElementById("btn").addEventListener("click",()=>{
    let temp = todo1.value;
    todo1.value = todo2.value;
    todo2.value = temp;
})

export default App;
