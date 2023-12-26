import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditTask(props) {

const [titel, setTitel] = useState("");
const [description, setDescription] = useState("");
const [time, setTime] = useState("");
const [type, setType] = useState("");
const {id} = useParams();

useEffect(() => {
    const task = props.tasks.filter((task) => task.id == id)[0];
    console.log(task,id);
    setTitel(task.titel);
    setDescription(task.description);
    setTime(task.time);
    setType(task.type);
},[])

const uppdate = () => {
    console.log("hej");
    const tasks = props.tasks.map((task) => {
      if (task.id == id) {
        task.titel = titel;
        task.description = description;
        task.time = time;
        task.type = type;
      }

      return task;
    });
    props.setTasks(tasks);
  };

  return (
    <>
    <div>
        <h2>Redigera Task</h2>
    </div>
    <div>
        <input type="text" value={titel} onChange={(e) => setTitel(e.target.value)} placeholder='Titel'/>
        <button onClick={async () => {
            let response= await fetch("https://www.boredapi.com/api/activity");
            let json = await response.json();
            setTitel(json.activity);
        }

        }>Random Task</button>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description'/>
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder='time'/>
        <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="none">Välj kategori</option>
            <option value="Hushållssysslor">Hushållssysslor</option>
            <option value="Aktivitet">Aktivitet</option>
            <option value="Plugg">Plugg</option>
        </select>
    </div>
    <div>
        <Link to={"/Tasks"} onClick={() => uppdate()}>Lägg till task</Link>
    </div>
    </>
  )
}

export default EditTask;

