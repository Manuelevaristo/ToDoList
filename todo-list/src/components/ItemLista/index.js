import React from "react";
import './index.css'


const TaskList = ({tasks}) =>{

    return(

        <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
    )
}

export default TaskList;