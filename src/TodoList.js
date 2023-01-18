import "./demo.css";
import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Hit the gym", isCompleted: false },
    { text: "Pay bills", isCompleted: true },
    { text: "Meet George", isCompleted: false },
    { text: "Buy eggs", isCompleted: false },
    { text: "Read a book", isCompleted: false },
    { text: "Organize office", isCompleted: false }
  ]);

  const handleClick = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleCloseClick = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const input = document.getElementById("myInput");
    if (input.value === "") {
      alert("You must write something!");
    } else {
      const newTodos = [...todos];
      newTodos.push({ text: input.value, isCompleted: false });
      setTodos(newTodos);
      input.value = "";
    }
  };

  return (
    <div id="myDIV">
      <div className="header">
        <h2>My To Do List</h2>
        <div className="inputAddBtn">
          <input type="text" id="myInput" placeholder="Title..." />
          <span onClick={handleAddClick} className="addBtn">
            Add
          </span>
        </div>
      </div>
      <ul id="myUL">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={todo.isCompleted ? "checked" : ""}
          >
            {todo.text}
            <span className="close" onClick={() => handleCloseClick(index)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
