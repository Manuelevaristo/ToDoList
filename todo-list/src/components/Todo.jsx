import "./Todo.css";
import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    if (!task) {
      return alert("preencha uma tarefa");
    }

    setItemsList([...itemsList, task]);
    setTask("");
  }

  return (
    <div className="todo-container">
      <h1 className="title">ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeInput}
          value={task}
        />

        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list">
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
