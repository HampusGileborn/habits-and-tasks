import React from 'react';
import { Link } from "react-router-dom";

function Task({task, setDone, removeTask}) {
  return (
    <div >
            <h2>{task.titel}</h2>
            <h3>{task.description}</h3>
            <h3>{task.time}</h3>
            <h3>{task.type}</h3>
            <div>
              <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => setDone(task.id, e.target.checked)}
              />
              <button onClick={() => {
                removeTask(task.id)
              }}>Ta bort</button>
              <Link to={"/EditTask/" + task.id}>Redigera</Link>
            </div>
          </div>
  )
}

export default Task;
