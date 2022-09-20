import React from "react";

function Todo() {
  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form>
        <input type="text" placeholder="Adicione uma tarefa" />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list">
        <li>Item</li>
      </ul>
    </div>
  );
}

export default Todo;
