import React, { useEffect, useState } from "react";
import Task from "../Components/Task";

function Tasks(props) {
  const [check, setCheck] = useState();
  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();

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

  const getSorting = (a, b) => {
    if (sort === "abc"){
        return a.titel.toLowerCase() > b.titel.toLowerCase() ? 1 : -1;
    }else if(sort === "cba") {
        return a.titel.toLowerCase() > b.titel.toLowerCase() ? -1 : 1;
    }else if(sort === "123"){
        return a.time - b.time;
    }else if(sort === "321"){
        return b.time - a.time;
    }else{
        return;
    }
  };



  return (
    <>
      <div>
        <h2>Filtrera</h2>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Alla kategorier</option>
          <option value="Hushållssysslor">Hushållssysslor</option>
          <option value="Aktivitet">Aktivitet</option>
          <option value="Plugg">Plugg</option>
        </select>
        <h2>Sortera</h2>
        <select value={sort} onChange={(e) => setSort(e.target.value)} >
          <option value="">Välj sortering</option>
          <option value="abc">Bokstavsordning a-ö</option>
          <option value="cba">Bokstavsordning ö-a</option>
          <option value="123">Tidsestimat kortast tid</option>
          <option value="321">Tidsestimat längst tid</option>
        </select>
      </div>
      <div className="taskList">
        <div id="notDone">
          <h2>Att Göra</h2>
          {props.tasks
            .filter((e) => e.done === false && (filter === "all" ? true : (filter ? e.type.toLowerCase() === filter.toLowerCase() : true)))
            .sort((a, b) => getSorting(a, b))
            .map((task) => (
              <Task task={task} setDone={setDone} removeTask={removeTask} />
            ))}
        </div>
        <div id="done">
          <h2>Gjort</h2>
          {props.tasks
            .filter((e) => e.done === true && (filter === "all" ? true : (filter ? e.type.toLowerCase() === filter.toLowerCase() : true)))
            .sort((a, b) => getSorting(a, b))
            .map((task) => (
              <Task task={task} setDone={setDone} removeTask={removeTask} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Tasks;
