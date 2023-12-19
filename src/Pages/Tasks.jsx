import React, { useEffect, useState } from "react";
import Task from "../Components/Task";

function Tasks(props) {
  const [check, setCheck] = useState();

  useEffect(() => {
    setCheck(false);
    console.log("blala");
  }, []);

  console.log(check);

  const setDone = (id, value) => {
    const tasks = props.tasks.map((task) => {
      if (task.id === id) {
        task.done = value;
      }

      return task;
    });
    props.setTasks(tasks);
  };

  const removeTask = (id) => {
    const tasks = props.tasks.filter((e) => e.id !== id);
    props.setTasks(tasks);
  };
  return (
    <div className="taskList">
      <div id="notDone">
        <h2>Att Göra</h2>
        {props.tasks
          .filter((e) => e.done === false)
          .map((task) => (
            <Task task={task} setDone={setDone} removeTask={removeTask} />
          ))}
      </div>
      <div id="done">
        <h2>Gjort</h2>
        {props.tasks
          .filter((e) => e.done === true)
          .map((task) => (
            <Task task={task} setDone={setDone} removeTask={removeTask} />
          ))}
      </div>
    </div>
  );
}

export default Tasks;
