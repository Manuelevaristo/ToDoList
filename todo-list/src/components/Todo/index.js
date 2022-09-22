import "./index.css";
import React, { useState, useEffect } from "react";
import TaskList from "../ItemLista";

function Todo() {
  const [taskInput, setTaskInput] = useState("");
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    getTodos();
  }, [ ])

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTaskInput(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    if (!taskInput) {
      return alert("preencha uma tarefa");
    }
    console.log(taskInput);
    setTaskInput("");
  }
  const getTodos = async () => {
    const response = await fetch('http://localhost:3000/todos');
    const data = await response.json();
    setItemsList(data);
  }
  return (
    <div className="todo-container">
      <h1 className="title">ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeInput}
          value={taskInput}
        />

        <button className="adicionar" type="submit">Adicionar</button>
      </form>

        <TaskList tasks={itemsList}/>
    </div>
  );
}

export default Todo;
